Gateway Game
====
[![Build Status](https://travis-ci.org/Team-H/gateway.png?branch=develop)](https://travis-ci.org/Team-H/gateway)
[![Code Climate](https://codeclimate.com/github/Team-H/gateway.png)](https://codeclimate.com/github/Team-H/gateway)
[![Coverage Status](https://coveralls.io/repos/Team-H/gateway/badge.png?branch=develop)](https://coveralls.io/r/Team-H/gateway?branch=develop)
[![Dependency Status](https://david-dm.org/team-h/gateway.png)](https://david-dm.org/team-h/gateway)
[![Stories in Ready](https://badge.waffle.io/team-h/gateway.png?label=ready&title=Ready)](http://waffle.io/team-h/gateway)
[![License](http://img.shields.io/license/MIT.png?color=green)](http://opensource.org/licenses/MIT)
[![Gitter chat](https://badges.gitter.im/Team-H/gateway.png)](https://gitter.im/Team-H/gateway)

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

styleguide
====
Style guides are enforced by lint checkers configured to check <strong>complete adherence</strong> to the below styleguides

for python please follow the [PEP 8 styleguide](http://www.python.org/dev/peps/pep-0008/)
We have an autoformatter, please make sure autopep8 is installed, then run the autoPython.sh in gateway to format.

for javascript please follow the [JS Hint styleguide](http://www.jshint.com/)
We also have an autoformatter for javascript now, make sure you install jsbeautifier from pip and run the autoJS.sh from terminal

for templates please follow [valid HTML 5 standards](http://validator.w3.org/nu/) and [follow django best practices](https://oncampus.oberlin.edu/webteam/2012/09/architecture-django-templates)

for stylesheets please use [bootstrap](http://getbootstrap.com/) for modifying bootstrap follow [the SMACSS styleguide](http://smacss.com/)

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

testing code
===
###creating unit tests
####django
basic contraints
* page is accessible
* page is secure

####javascript
test core logic

testing of events, or of dependant libraries is a non-goal

###running unit tests
####django
```
./manage.py test gateway.tests
```

####javascript game
```
karma start karma.conf.js
```

modifying bootstrap
====
to customize bootstap styles please visit the bootstrap folder.
in the folder run
```sh
sudo npm install
cd boostrap
sudo npm install
```

to edit the style visit the less folder.
please make all edits to custom-bootstrap and custom-variables.
(if you make edits to additional modules please copy prefix with custom-modulename and update the custom-bootstrap to import the custom module)

to compile the less to css, then move it to the static folder
```sh
cd bootstrap
grunt dist
cd ..
./manage.py collectstatic
```

naming convensions
====
bootstrap mixins should use the class naming system

example bootstrap panel
``` html
<div class="panel panel-default">
  <div class="panel-heading">Panel heading without title</div>
  <div class="panel-body">
    Panel content
  </div>
</div>
```

in django the variables would be
``` django
<section class="panel panel-default">
  <div class="panel-heading">
    {{ header }}
  </div>
  <div class="panel-body">
    {{ body }}
  </div>
</section>
```
