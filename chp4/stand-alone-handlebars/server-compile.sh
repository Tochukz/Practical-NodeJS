#!/bin/bash
# Compiles handlebar template and generates JavaScript
# Handlebar must be installed globally to do this
# npm install -g handlebars
# Template defined by name the 'person.handlebars' will be a function accessable from Handlebars.templates.person

handlebars templates -f public/server-compiled/generated-js/compiled.js
