module.exports = {
  extends: [
    'eslint-config-airbnb',
  ].map(require.resolve),
  rules: {
    // open a PR per rule change
    // ****.com/stash/projects/UIE/repos/eslint-config-axp/pull-requests?create

    // disable requiring trailing commas
    "comma-dangle": 0,
    // disable requiring capital letter for constructors
    "new-cap": 1,
    // https://davidwalsh.name/for-and-against-let
    // and "vars-on-top" is enforced
    "no-var": 0
  }
};
