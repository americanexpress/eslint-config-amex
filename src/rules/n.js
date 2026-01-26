/*
 * Copyright (c) 2026 American Express Travel Related Services Company, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except
 * in compliance with the License. You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under the License
 * is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express
 * or implied. See the License for the specific language governing permissions and limitations under
 * the License.
 */

import { momentRestrictedModule } from "../utils/restricted-modules.js";

/*
 * This file contains all rules for the `eslint-plugin-n` plugin.
 * For a complete list of rules, see https://github.com/eslint-community/eslint-plugin-n/tree/v17.23.2?tab=readme-ov-file#-rules.
 */

export default {
  // https://github.com/eslint-community/eslint-plugin-n/blob/v17.23.2/docs/rules/global-require.md
  "n/global-require": "error",

  // https://github.com/eslint-community/eslint-plugin-n/blob/v17.23.2/docs/rules/no-deprecated-api.md
  "n/no-deprecated-api": "error",

  // https://github.com/eslint-community/eslint-plugin-n/blob/v17.23.2/docs/rules/no-new-require.md
  "n/no-new-require": "error",

  // https://github.com/eslint-community/eslint-plugin-n/blob/v17.23.2/docs/rules/no-path-concat.md
  "n/no-path-concat": "error",

  // https://github.com/eslint-community/eslint-plugin-n/blob/v17.23.2/docs/rules/no-restricted-require.md
  "n/no-restricted-require": ["error", [momentRestrictedModule]],
};
