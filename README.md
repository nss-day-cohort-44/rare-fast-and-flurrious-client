# Rare Publishing Platform Notes

## Setup
You are going to need a minimum of two terminal sessions open for this project at all times. Go ahead and open two now.

## Project Directory

1. In the first terminal, make a directory on your system for the code for this project. For example, `~/workspace/python/rare`.
1. `cd` to that directory.
1. Create two sub-directories.
    1. `client`
    1. `server`

## Client Setup

1. In the same terminal session, `cd` to the client directory.
1. `git clone git@github.com:nss-day-cohort-44/rare-stucco-turtles.git .` <-- note the single dot at the end.
1. `npm install` to get all required packages installed for the React client.
1. `npm start`

## Server Setup

1. In the second terminal session, `cd` into the `rare/server` directory.
1. `pipenv shell`
1. `pipenv install watchgod autopep8`
1. `watchgod request_handler.main`

## ERD
[ERD for this project](https://dbdiagram.io/d/5f885a013a78976d7b77cb74)

## Wireframes
![](./images/wireframe-login.png)
![](./images/wireframe-register.png)
![](./images/wireframe-create-post.png)
![](./images/wireframe-edit-post.png)
![](./images/wireframe-all-posts.png)
![](./images/wireframe-post-view.png)
![](./images/wireframe-post-detail.png)
![](./images/wireframe-comments.png)
![](./images/wireframe-post-by-author.png)
![](./images/wireframe-profile.png)
![](./images/wireframe-category-manager.png)
![](./images/wireframe-tag-manager.png)

