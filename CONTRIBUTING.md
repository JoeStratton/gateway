development flow
====
###user driven design
* the focus of the project is to product an user interface that is simple and enjoyable to use
* this requires designing the look of the page before designing the backend api
* <strong>Every api that is created will first have a user interface to display it</strong>

###test driven developement
* create apis to fulfill a test expectation
* <strong>Every pull request that includes changes to the api will have unit test ensuring its validity</strong>
* tests are written in the Django unit test framework

###additional testing
In addition to unit tests this project also checks code complexity and code maintability using radon for python.
We accept no grade less than a B from radon.

[See this link for how these are calculated](http://radon.readthedocs.org/en/latest/intro.html)

[See this link for how these are graded](http://radon.readthedocs.org/en/latest/commandline.html)

git flow
====
###make a fork of the repository
[instructions](https://help.github.com/articles/fork-a-repo)

###add main repository as upstream
```
git remote add upstream https://github.com/Team-H/gateway
```

###update content with lastest from develop branch
```
git checkout develop
git pull upstream develop
```

###create a new feature branch
```
git checkout -b branch-name
```

###add changes to the repository
```
git add --all
git commit --all
git pull upstream develop
git status
```
fix any conflicts then
```
git push origin branch-name
```

###merge changes into main repository

on github click on pull requests to the right, open a pull request
