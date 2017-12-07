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

module.exports = {
  parser: 'babel-eslint',
  extends: [
    'eslint-config-airbnb',
  ].map(require.resolve),
  env: {
    browser: true,
    node: true,
  },
  plugins: [
    'import',
    'jsx-a11y',
    'react',
  ],
  rules: {
    // open a PR per rule change

    // https://github.com/facebook/jsx/issues/23
    // The future is that props given with no value will work like object shorthand
    // notation instead of evaluating to true.
    // Currently our rules forbid adding a value of true, which will
    // add more refactoring for us in the future.
    // Requiring true to be set as the value will help future-proof our code.
    'react/jsx-boolean-value': ['error', 'always'],

    // don't require trailing commas for multi-line function calls
    // airbnb config assumes you're transpiling with https://npmjs.com/babel-preset-airbnb
    // which includes trailing function commas.
    // https://github.com/eslint/eslint/issues/7571#issuecomment-259538272
    // This makes life harder if you're linting bin files that aren't transpiled
    // or have the trailing function (ES2017 proposal) config set.
    // This is bad as that adds friction to linting all files, which is desired.
    'comma-dangle': ['error', {
      arrays: 'always-multiline',
      objects: 'always-multiline',
      imports: 'always-multiline',
      exports: 'always-multiline',
      functions: 'never',
    }],

    // airbnb defaults to a maximum cyclomatic complexity of 11
    complexity: ['error'],

    // this rule isn't ready yet
    // arrow functions are forced to put the return values on a new line, rather than inline
    // with the argument and fat arrow itself, which is awkward syntax
    // this rule, when "fixing" code will then cause problems with the max-length rule
    // https://github.com/airbnb/javascript/issues/1584#issuecomment-335676788
    'function-paren-newline': 'off',
  },
};
