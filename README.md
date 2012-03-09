## hoganjs-brunch
Adds [Hogan.Js](http://twitter.github.com/hogan.js/) support to
[brunch](http://brunch.io).

## Installation
Add `"hoganjs-brunch": "x.y.z"` to `package.json` of your brunch app.

Pick a plugin version that corresponds to your minor (y) brunch version.

If you want to use git version of plugin, add
`"hoganjs-brunch": "git@github.com:mdp/hoganjs-brunch.git"`.

## Usage:

Create a Mustache template

    # views/templates/city.mustache
    I live in {{name}}

Require the template

    template = require 'views/templates/city'

Render the template with some data:

    @$el.html template({'name': 'San Francisco'})
