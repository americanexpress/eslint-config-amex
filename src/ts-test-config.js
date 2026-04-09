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

import { defineConfig } from "eslint/config";
import testConfig from "./test-config.js";
import tsConfig from "./ts-config.js";
import { JS_AND_TS_FILES_IN_TEST_DIR } from "./constants/index.js";

const amexTsTestConfig = (overrides = {}) => defineConfig([
  {
    name: "TypeScript unit tests using Jest",
    files: overrides.files ?? [JS_AND_TS_FILES_IN_TEST_DIR],
    ...(overrides.ignores ? { ignores: overrides.ignores } : []),
    extends: [testConfig({ files: overrides.files ?? [JS_AND_TS_FILES_IN_TEST_DIR] }), tsConfig({ files: overrides.files ?? [JS_AND_TS_FILES_IN_TEST_DIR]})],
    rules: {
      // this rule is turned off in `testConfig` 
      // but needs to be turned off again because `tsConfig` extends `baseConfig` which has the rule turned on
      "react/jsx-props-no-spreading": 0,

      // allow the use of the `any` type in tests, as its often required to type mocks simply
      "@typescript-eslint/no-explicit-any": "off",
      ...overrides.rules,
    },
  },
]);

export default amexTsTestConfig;