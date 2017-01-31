/* eslint no-undef: 0 */
'use strict';

const _eval = require('eval');
const Hogan = require('hogan.js');
const expect = require('expect.js');
const Plugin = require('.');

describe('Plugin', () => {
  let plugin;

  beforeEach(() => {
    plugin = new Plugin({});
  });

  it('should has #compile method', () =>
    expect(plugin.compile).to.be.a(Function)
  );

  it('should compile and produce valid result', () => {
    const content = 'Follow me @{{name}}';
    const expected = 'Follow me @mdp';

    return plugin.compile({data: content})
      .then(file => {
        const template = _eval(file.data, 'template.mustache', {Hogan})
          .render({name: 'mdp'});

        expect(template).to.equal(expected);
      });
  });
});
