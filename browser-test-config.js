/*
 * Copyright (c) 2017 American Express Travel Related Services Company, Inc.
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

import { defineConfig } from "eslint/config";

export default defineConfig([
  // behavior from https://github.aexp.com/amex-eng/one-app-dependencies/blob/main/packages/cli/amex-one-app-module-template/js-template/__tests__/browser/.eslintrc.json.ejs
  {
    name: "browser test files",
    // files: ["__tests__/browser/**"], // this should be defined in module eslint.config.js
    languageOptions: {
      globals: {
        testHost: "false",
        seleniumServerPort: "false",
        port: "false",
        devProxyServerPort: "false",
      },
    },
  },
]);

