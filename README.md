# hoganjs-brunch

Adds [Hogan.js](http://twitter.github.com/hogan.js/) support to
[Brunch](http://brunch.io).

## Installation

```
npm install --save-dev hoganjs-brunch
```

Or add `"hoganjs-brunch": "x.y.z"` to `package.json` of your brunch app. Pick a plugin version that corresponds to your minor (y) Brunch version.

If you want to use git version of plugin, add
`"hoganjs-brunch": "git@github.com:mdp/hoganjs-brunch.git"`.

## Usage:

Create a Mustache template:

```
I live in {{name}}
```

Require the template:

```js
const template = require('views/templates/city');
```

Render the template with some data:

```js
document.body.innerHTML = template.render({'name': 'San Francisco'});
```
