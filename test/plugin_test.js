var Hogan = require('hogan.js');

describe('Plugin', function() {
  var plugin;

  beforeEach(function() {
    plugin = new Plugin({});
  });

  it('should be an object', function() {
    expect(plugin).to.be.ok();
  });

  it('should has #compile method', function() {
    expect(plugin.compile).to.be.a(Function);
  });

  it('should compile and produce valid result', function(done) {
    var content = 'Follow me @{{name}}';
    var expected = 'Follow me @mdp';

    plugin.compile(content, 'template.mustache', function(error, data) {
      expect(error).not.to.be.ok();
      expect(eval(data)({'name':'mdp'})).to.equal(expected);
      done();
    });
  });
});
