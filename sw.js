---
layout: null
---

const staticCacheName = "V1-SW-KIR";

console.log("installing service worker");

const filesToCache = [
  "/Blogged/",
  {% for page in site.html_pages %}
    "{{page.url | prepend:site.basetext}}",
  {% endfor %}
  {% for post in site.posts %}
    "{{post.url | prepend:site.basetext}}",
  {% endfor %}
  "{{site.baseurl}}assets/logo.png",
  "{{site.baseurl}}assets/instacode.png",
  "{{site.baseurl}}assets/profile-placeholder.gif",
  "{{site.baseurl}}assets/logo.png",
  "{{site.baseurl}}assets/header_image.JPG",
  "{{site.baseurl}}assets/backup.jpg",
  "{{site.baseurl}}css/main.css",
  "{{site.baseurl}}about/",
  "{{site.baseurl}}index.html"
];

self.addEventListener("install", function(e){
  self.skipWaiting();

  e.waitUntil(
    caches.open(staticCacheName).then(function(cache){
      return cache.addAll(filesToCache);
    })
  )
});

self.addEventListener("activate", function(e){
  e.waitUntil(
    caches.keys().then(function(cacheNames){
      return Promise.all(
        cacheNames.filter(function(cacheName){
          return cacheName.startsWith("V1-SW-KIR")
            && cacheName != staticCacheName;
        }).map(function(cacheName){
          return caches.delete(cacheName);
        })
      )
    })
  )
});

self.addEventListener("fetch", function(e){
  e.respondWith(
    caches.match(e.request).then(function(response) {
      return response || fetch(e.request);
    })
  )
});
