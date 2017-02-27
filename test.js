module.exports = {
  extends: [
    './index',
  ].map(require.resolve),
  env: {
    jest: true,
  },
  plugins: [
    'jest',
  ],
  rules: {
    // open a PR per rule change
    // ****.com/stash/projects/UIE/repos/eslint-config-axp/pull-requests?create
    'global-require': 'warn',
    'jest/no-disabled-tests': 'error',
    'jest/no-focused-tests': 'error',
    'jest/no-identical-title': 'error',
  },
};
