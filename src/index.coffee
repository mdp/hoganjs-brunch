hogan = require 'hogan.js'
sysPath = require 'path'

module.exports = class HoganCompiler
  brunchPlugin: yes
  type: 'template'
  extension: 'mustache'

  constructor: (@config) ->
    null

  # Returns a precompiled template with a 'render' function
  # Usage Example:
  # @$el.html(template({name: "mdp", city: "SF"}))
  compile: (data, path, callback) ->
    try
      content = hogan.compile data, asString: yes
      result = "module.exports = function(data) {
        var t = new Hogan.Template();
        t.r = #{content};
        return t.render(data);
      }"
    catch err
      error = err
    finally
      callback error, result

  # Add '../node_modules/hogan.js/web/builds/1.0.5/template-1.0.5.js'
  # to vendor files.
  include: ->
    [(sysPath.join '..', 'node_modules', 'hogan.js', 'web', 'build', '1.0.5', 'template-1.0.5.js')]
