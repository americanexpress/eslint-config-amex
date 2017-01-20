module.exports = {
  parser: 'babel-eslint',
  extends: [
    'eslint-config-airbnb',
  ].map(require.resolve),
  env: {
    browser: true,
    jest: true,
    node: true
  },
  plugins: [
    'import',
    'jsx-a11y',
    'react'
  ],
  rules: {
    // open a PR per rule change
    // ****.com/stash/projects/UIE/repos/eslint-config-axp/pull-requests?create
  }
};
