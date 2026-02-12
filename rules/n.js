import { momentRestrictedModule } from "../restricted-modules.js";

export default {
  // https://github.com/eslint-community/eslint-plugin-n/blob/v17.23.2/docs/rules/no-restricted-require.md
  "n/no-restricted-require": ["error", [momentRestrictedModule]],
};
