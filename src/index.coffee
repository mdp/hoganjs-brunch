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
      if @config.hoganjs?
        wrapper = @config.hoganjs.wrapper
        if wrapper? and typeof wrapper = "function"
          result = wrapper path, content
      result = "module.exports = new Hogan.Template(#{content});" unless result?
    catch err
      error = err
    finally
      callback error, result

  # Add '../node_modules/hogan.js/web/builds/2.0.0/template-2.0.0.js'
  # to vendor files.
  include: ->
    [(sysPath.join __dirname, '..', 'node_modules', 'hogan.js', 'web', 'builds', '2.0.0', 'template-2.0.0.js')]
