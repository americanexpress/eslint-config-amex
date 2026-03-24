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

// eslint-disable-next-line import/no-unresolved -- see https://github.com/import-js/eslint-plugin-import/issues/1810
import { defineConfig } from "eslint/config";
import { JS_AND_TS_FILES_IN_BROWSER_TEST_DIR } from "./constants/file-glob-patterns.js";

const amexBrowserTestConfig = (overrides = {}) => defineConfig([
  {
    name: "Browser tests using Selenium WebDriver",
    files: overrides.files ?? [JS_AND_TS_FILES_IN_BROWSER_TEST_DIR],
    ...(overrides.ignores ? { ignores: overrides.ignores } : []),
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

export default amexBrowserTestConfig;