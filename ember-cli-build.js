'use strict';

const EmberAddon = require('ember-cli/lib/broccoli/ember-addon');
const { maybeEmbroider } = require('@embroider/test-setup');

module.exports = function (defaults) {
  let app = new EmberAddon(defaults, {
    'ember-prism': {
      plugins: ['normalize-plugins'],
      components: ['handlebars', 'markup', 'markup-templating'],
    },
  });

  return maybeEmbroider(app);
};
