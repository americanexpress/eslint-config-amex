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

/*
 * This file contains all settings for the `eslint-plugin-import` plugin.
 * For a complete list of settings, see https://github.com/import-js/eslint-plugin-import/blob/v2.32.0/README.md#settings.
 * Most of these settings were migrated from https://github.com/airbnb/javascript/blob/eslint-config-airbnb-v19.0.4/packages/eslint-config-airbnb-base/rules/imports.js.
 */

export default {
  "import/resolver": {
    node: {
      // migrated from https://github.com/americanexpress/eslint-config-amex/blob/16.x/index.js#L51
      paths: ["src"],
      // migrated from https://github.com/airbnb/javascript/blob/eslint-config-airbnb-v19.0.4/packages/eslint-config-airbnb/rules/react.js#L566
      extensions: [".js", ".jsx", ".json"],
    },
  },
  "import/extensions": [".js", ".mjs", ".jsx"],
  "import/core-modules": [],
  "import/ignore": ["node_modules", "\\.(coffee|scss|css|less|hbs|svg|json)$"],
};
