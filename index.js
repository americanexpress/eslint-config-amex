module.exports = {
  parser: 'babel-eslint',
  extends: [
    'eslint-config-airbnb',
  ].map(require.resolve),
  env: {
    browser: true,
    jest: true,
    node: true,
  },
  plugins: [
    'import',
    'jsx-a11y',
    'react',
  ],
  rules: {
    // open a PR per rule change
    // ****.com/stash/projects/UIE/repos/eslint-config-axp/pull-requests?create
    // PR #7: https://github.com/facebook/jsx/issues/23
    'react/jsx-boolean-value': ['error', 'always'],
    // PR #8: don't require trailing commas for multi-line function calls
    'comma-dangle': ['error', {
      arrays: 'always-multiline',
      objects: 'always-multiline',
      imports: 'always-multiline',
      exports: 'always-multiline',
      functions: 'never',
    }],
  },
};
