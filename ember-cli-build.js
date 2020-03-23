'use strict';

const EmberAddon = require('ember-cli/lib/broccoli/ember-addon');

module.exports = function (defaults) {
  let app = new EmberAddon(defaults, {
    'ember-prism': {
      plugins: ['normalize-plugins'],
      components: ['handlebars', 'markup', 'markup-templating'],
    },
  });

  return app.toTree();
};
