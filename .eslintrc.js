module.exports = {
  root: true,
  ...require('fabscale-eslint-config/lib/ember'),

  overrides: [
    // node files
    {
      files: [
        './.eslintrc.js',
        './.prettierrc.js',
        './.template-lintrc.js',
        './ember-cli-build.js',
        './index.js',
        './testem.js',
        './blueprints/*/index.js',
        './config/**/*.js',
        './tests/dummy/config/**/*.js',
      ],
      ...require('fabscale-eslint-config/lib/node'),
    },
    {
      // test files:
      files: ['tests/**/*-test.{js,ts}'],
      ...require('fabscale-eslint-config/lib/ember-tests'),
    },
  ],
};
