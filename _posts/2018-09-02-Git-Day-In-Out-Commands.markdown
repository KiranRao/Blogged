---
layout: post
title:  "Day in Day out Git Command for Developers"
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
- COMMIT 
- BRANCH
- PUSH

### CREATE
<pre><code class="hljs bash">$ git clone http://github.com/MyProject/ProjectA </code></pre>
Clones new project from the URL to the local directory and sets up a local repository

<pre><code class="hljs bash">$ git init </code></pre>
Initializes an empty git repository. This comes handy while stating fresh on a project or existing code and bring it under the purview of version control locally which later can be pushed to remote server. Often followed by <code>$ git add .</code>   To add all available files to the local repo.

### BROWSE

<pre><code class="hljs bash">$ git status </code></pre>
Show the working tree status
<pre><code class="hljs bash">$ git log</code></pre>
 Show commit logs 
<pre><code class="hljs bash">$ git blame </code></pre>
Show what revision and author last modified each line of a file
<pre><code class="hljs bash">$ git diff </code></pre>
Show changes between commits, commit and working tree 


### UPDATE

<pre><code class="hljs bash">$ git pull</code></pre>
Fetch from and integrate with another repository or a local branch. More precisely, git pull runs git fetch with the given parameters and calls git merge to merge the retrieved branch heads into the current branch. With --rebase, it runs git rebase instead of git merge which is the preferred approach to avoid unwanted merge commits in the repository. So the common update that works out for me is 
<pre><code class="hljs bash">$ git pull --rebase origin develop   </code></pre>

<pre><code class="hljs bash">$ git fetch</code></pre>
Download objects and refs from another repository. This really only downloads new data from a remote repository - but it doesn't integrate any of this new data into your working files. In contrast pull not only downloads new data; it also directly integrates it into your current working copy files	
<pre><code class="hljs bash">$ git merge</code></pre>
Join two or more development histories together

### REVERT

<pre><code class="hljs bash">$ git reset</code></pre>
Reset current HEAD to the specified state. Commonly used modes for reset 
--soft
Does not touch the staging area (index file) or the working tree at all (but resets the head to <commit>, just like all modes do). This leaves all your changed files "Changes to be committed", as git status would put it.
--mixed
Resets the staging area (index file) but not the working tree (i.e., the changed files are preserved but not marked for commit) and reports what has not been updated. This is the default action.
--hard
Resets the staging area (index file) and working tree. Any changes to tracked files in the working tree since <commit> are discarded.
<pre><code class="hljs bash">$ git reset --hard HEAD</code></pre>  
Local to remote reset
<pre><code class="hljs bash">$ git reset HEAD^  </code></pre>
Revert last commit and get files in working directory
<pre><code class="hljs bash">$ git reset HEAD~5  </code></pre>
Reverts last 5 commits and get files in working directory
<pre><code class="hljs bash">$ git checkout</code></pre>
Switch branches or restore working tree files
<pre><code class="hljs bash">$ git checkout Branch_Name</code></pre>
Checkout the branch
<pre><code class="hljs bash">$ git checkout -b New_Branch_Name</code></pre>
Creates a new branch and checkout the same
<pre><code class="hljs bash">$ git revert Commit_id</code></pre>
The git revert command is used for undoing changes to a repository's commit history. Other 'undo' commands like, git checkout and git reset, move the HEAD and branch ref pointers to a specified commit. Git revert also takes a specified commit, however, git revert does not move ref pointers to this commit. A revert operation will take the specified commit
inverse the changes from that commit, and create a new "revert commit". The ref pointers are then updated to point at the new revert commit making it the tip of the branch.

### COMMIT 
<pre><code class="hljs bash">$ git commit –m “Commit message”</code></pre>
 Record changes to the repository
<pre><code class="hljs bash">$ git commit --amend --no-edit</code></pre>
Amends the commit with no change in the initial commit message.
<pre><code class="hljs bash">$ git show commit_id</code></pre>
Shows what a commit did

### BRANCH
<pre><code class="hljs bash">$ git checkout </code></pre>
Switch working directory to branch
<pre><code class="hljs bash">$ git merge branch</code></pre>
Merge into the current branch
<pre><code class="hljs bash">$ git checkout –b new other</code></pre>
Branch new from other and switch to it

### PUSH
<pre><code class="hljs bash">$ git push  remote branch_name</code></pre>
Update remote refs along with associated objects
 
-------------------------------------------------------------------------------------------------------------------------
Let us now list out some of the commonly needed commands for a given scenario. 

#### How to delete a Git branch both locally and remotely?
<pre><code class="hljs bash">$ git branch -d branch_name  </code></pre>
Deletes branch in local repository 
<pre><code class="hljs bash">$ git push origin --delete branch_name</code></pre>
Deletes branch in remote repository 

-------------------------------------------------------------------------------------------------------------------------

#### How to pull co-worker’s remote forked branch into local and work with it?
<pre><code class="hljs bash">$ git remote add REMOTE_NAME http://github.com/co-worker/Repository_name</code></pre>
<pre><code class="hljs bash">$ git fetch REMOTE_NAME</code></pre>
<pre><code class="hljs bash">$ git checkout -b NEW BRANCH_NAME --track REMOTE_NAME/BRANCH_NAME</code></pre>
OR 
<pre><code class="hljs bash">$ git checkout --track REMOTE_NAME/BRANCH_NAME</code></pre>
 
-------------------------------------------------------------------------------------------------------------------------

#### Cherry-Picking
 
<pre><code class="hljs bash">$ git cherry-pick SHA_ID</code></pre>
 
<pre><code class="hljs bash">$ git cherry-pick --edit SHA_ID</code></pre>
Editor will open to edit message
 
<pre><code class="hljs bash">$ git cherry-pick --no-commit SHA1 SHA2</code></pre>
Pick from multiple commits, changes will not be committed	
 
<pre><code class="hljs bash">$ git cherry-pick -x </code></pre>
-x allows to Tracks where the commit came from if you need that 
 
 
<pre><code class="hljs bash">$ git cherry-pick SHA_of_the_beginning_commit^..SHA_of_the_end_commit</code></pre>
Cherry pick range of commits with ^.. 

 



[Git Workflows]:      https://www.atlassian.com/git/tutorials/comparing-workflows