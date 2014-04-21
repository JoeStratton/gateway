Gateway Game
====
[![Build Status](https://travis-ci.org/Team-H/gateway.png?branch=develop)](https://travis-ci.org/Team-H/gateway)
[![Code Climate](https://codeclimate.com/github/Team-H/gateway.png)](https://codeclimate.com/github/Team-H/gateway)
[![Coverage Status](https://coveralls.io/repos/Team-H/gateway/badge.png?branch=develop)](https://coveralls.io/r/Team-H/gateway?branch=develop)
[![Release Status](http://img.shields.io/badge/release-sprint%204-03fcde.svg)](http://www.scrumwise.com/)
[![Dependency Status](https://david-dm.org/team-h/gateway.png)](https://david-dm.org/team-h/gateway)
[![devDependency Status](https://david-dm.org/team-h/gateway/dev-status.png)](https://david-dm.org/team-h/gateway#info=devDependencies)
[![Stories in Ready](https://badge.waffle.io/team-h/gateway.png?label=ready&title=Ready)](http://waffle.io/team-h/gateway)
[![License](http://img.shields.io/license/MIT.png?color=green)](http://opensource.org/licenses/MIT)
[![Gitter chat](https://badges.gitter.im/Team-H/gateway.png)](https://gitter.im/Team-H/gateway)

styleguide
====
Style guides are enforced by lint checkers configured to check <strong>complete adherence</strong> to the below styleguides

for python please follow the [PEP 8 styleguide](http://www.python.org/dev/peps/pep-0008/)
We have an autoformatter, please make sure autopep8 is installed, then run the autoPython.sh in gateway to format.

for javascript please follow the [JS Hint styleguide](http://www.jshint.com/)
We also have an autoformatter for javascript now, make sure you install jsbeautifier from pip and run the autoJS.sh from terminal

for templates please follow [valid HTML 5 standards](http://validator.w3.org/nu/) and [follow django best practices](https://oncampus.oberlin.edu/webteam/2012/09/architecture-django-templates)

for stylesheets please use [bootstrap](http://getbootstrap.com/) for modifying bootstrap follow [the SMACSS styleguide](http://smacss.com/)

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
