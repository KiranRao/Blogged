if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register("/Blogged/assets/scripts/serviceWorker.js", {
      scope: 'Blogged/'
    });
  }