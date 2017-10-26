'use strict';

const hogan = require('hogan.js');
const sysPath = require('path');

class HoganCompiler {
  constructor(config) {
    this.config = config;
  }

  compile(file) {
    return new Promise((resolve, reject) => {
      try {
        const content = hogan.compile(file.data, {asString: true});

        if (this.config.hoganjs) {
          const wrapper = this.config.hoganjs.wrapper;
          if (typeof wrapper === 'function') {
            return resolve(wrapper(file.path, content));
          }
        }

        resolve({
          data: `module.exports = new Hogan.Template(${content})`,
        });
      } catch (e) {
        reject(e);
      }
    });
  }

  get include() {
    return [sysPath.join(__dirname, '..', 'hogan.js', 'web', 'builds', '2.0.0', 'template-2.0.0.js')];
  }
}

HoganCompiler.prototype.brunchPlugin = true;
HoganCompiler.prototype.type = 'template';
HoganCompiler.prototype.extension = 'mustache';

module.exports = HoganCompiler;
