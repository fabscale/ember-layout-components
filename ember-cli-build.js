'use strict';

const EmberAddon = require('ember-cli/lib/broccoli/ember-addon');

module.exports = function (defaults) {
  let app = new EmberAddon(defaults, {
    'ember-prism': {
      plugins: ['normalize-plugins'],
      components: ['handlebars', 'markup', 'markup-templating'],
    },
  });

  if ('@embroider/webpack' in app.dependencies()) {
    /* eslint-disable node/no-missing-require */
    const { Webpack } = require('@embroider/webpack');
    return require('@embroider/compat').compatBuild(app, Webpack, {
      staticAddonTestSupportTrees: true,
      staticAddonTrees: true,
      staticHelpers: true,
      staticComponents: true,
    });
    /* eslint-enable node/no-missing-require */
  }

  return app.toTree();
};
