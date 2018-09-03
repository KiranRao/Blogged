---
layout: post
title:  "Day in Day out Git Commands for Developers"
date:   2018-09-02 21:21:00
author: Kiran Rao
categories: Git
---



Git is one of the most fascinating version control system out there. It is 3rd generation and distributed version control system.  Adoption of GIT in enterprises as well as open source projects is increasing significantly and it is worth learning.  

In one of the global surveys most respondents have mentioned that the learning curve for understanding the distributed version control for folks coming from Centralized version control is very steep and is challenging, may be its due to lack in the understanding of how different distributed version controls are compared to the centralized ones.  Being said that let me cover the core concepts in a different post and stick to what the title for this post is and list out the commands which are helpful for day in and out for a developer.

As an enterprise practice you may stick with one or more work flows for your teams. More about work flows here [Git Workflows].I stick with Forking work flow which very well suits the need of an enterprise product with more than 100 plus developers working at any given time. Let us start with some of the common commands that you as a developer need reference to.
Let us classify the commands under following categories and list them out in the order in which a new learner would have to face through as he starts working with Git version control.


- CREATE
- BROWSE
- REVERT
- UPDATE
- BRANCH
- COMMIT 
- PUSH

### CREATE
<pre><code class="hljs bash">$ git clone http://github.com/MyProject/ProjectA </code></pre>
Clones new project from the URL to the local directory and sets up a local repository


<pre><code class="hljs bash">$ git init </code></pre>
Initializes an empty git repository. This comes handy while stating fresh on a project or existing code and bring it under the purview of version control locally which later can be pushed to remote server. Often followed by <code>$ git add .</code>   To add all available files to the local repo.

[Git Workflows]:      https://www.atlassian.com/git/tutorials/comparing-workflows