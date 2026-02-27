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

/**
 * This file contains all rules for the `eslint-plugin-n` plugin.
 *
 * The rules in this file were migrated from https://github.com/airbnb/javascript/blob/eslint-config-airbnb-v19.0.4/packages/eslint-config-airbnb-base/rules/node.js.
 *
 * Additionally, some rule updates were migrated from https://github.com/americanexpress/eslint-config-amex/blob/main/index.js.
 *
 * For a complete list of rules, see https://github.com/eslint-community/eslint-plugin-n/tree/v17.23.2?tab=readme-ov-file#-rules.
 */

export default {
  // enforce return after a callback
  // https://github.com/eslint-community/eslint-plugin-n/blob/v17.23.2/docs/rules/callback-return.md
  "n/callback-return": "off",

  // require all requires be top-level
  // https://github.com/eslint-community/eslint-plugin-n/blob/v17.23.2/docs/rules/global-require.md
  "n/global-require": "error",

  // enforces error handling in callbacks (node environment)
  // https://github.com/eslint-community/eslint-plugin-n/blob/v17.23.2/docs/rules/handle-callback-err.md
  "n/handle-callback-err": "off",

  // https://github.com/eslint-community/eslint-plugin-n/blob/v17.23.2/docs/rules/no-deprecated-api.md
  "n/no-deprecated-api": "error",

  // disallow mixing regular variable and require declarations
  // https://github.com/eslint-community/eslint-plugin-n/blob/v17.23.2/docs/rules/no-mixed-requires.md
  "n/no-mixed-requires": ["off", false],

  // disallow use of new operator with the require function
  // https://github.com/eslint-community/eslint-plugin-n/blob/v17.23.2/docs/rules/no-new-require.md
  "n/no-new-require": "error",

  // disallow string concatenation with __dirname and __filename
  // https://github.com/eslint-community/eslint-plugin-n/blob/v17.23.2/docs/rules/no-path-concat.md
  "n/no-path-concat": "error",

  // disallow use of process.env
  // https://github.com/eslint-community/eslint-plugin-n/blob/v17.23.2/docs/rules/no-process-env.md
  "n/no-process-env": "off",

  // disallow process.exit()
  // https://github.com/eslint-community/eslint-plugin-n/blob/v17.23.2/docs/rules/no-process-exit.md
  "n/no-process-exit": "off",

  // https://github.com/eslint-community/eslint-plugin-n/blob/v17.23.2/docs/rules/no-restricted-require.md
  "n/no-restricted-require": ["error", [momentRestrictedModule]],

  // disallow use of synchronous methods (off by default)
  // https://github.com/eslint-community/eslint-plugin-n/blob/v17.23.2/docs/rules/no-sync.md
  "n/no-sync": "off",
};
