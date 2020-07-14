/*
 * Copyright (c) 2020 American Express Travel Related Services Company, Inc.
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

module.exports = {
  extends: [
    './index',
  ].map(require.resolve).concat([
    'plugin:jest/recommended',
    'plugin:jest-dom/recommended',
  ]),
  env: {
    'jest/globals': true,
  },
  plugins: [
    'jest',
    'jest-dom',
  ],
  globals: {
    jest: true,
  },
  rules: {
    // open a PR per rule change

    // the way jest mocking works sometimes requires requiring within scope of each test
    'global-require': 'warn',
    // skipped tests can lead to false build successes
    'jest/no-disabled-tests': 'error',
    // forces you to remove .only from tests by raising error whenever you are using that feature.
    'jest/no-focused-tests': 'error',
    // disallows having tests with identical name
    'jest/no-identical-title': 'error',
    // disallows large snapshots (default 50 line threshold)
    'jest/no-large-snapshots': 'error',
    // prop spreading is very useful in tests for specs that including variations of the same
    // props repeatedly
    'react/jsx-props-no-spreading': 0,
    // this conflicts with co-located tests
    'unicorn/import-index': 'off',
  },
};
