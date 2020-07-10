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
    '../index',
  ].map(require.resolve).concat([
    'plugin:prettier/recommended',
    'prettier/react',
    'prettier/unicorn',
  ]),
  plugins: [
    'prettier',
  ],
  rules: {
    'prettier/prettier': ['error'],

    // Let Prettier handle this
    // https://eslint.org/docs/rules/implicit-arrow-linebreak
    'implicit-arrow-linebreak': 'off',

    // Let Prettier handle indent
    // https://eslint.org/docs/rules/indent
    indent: 'off',
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-indent.md
    'react/jsx-indent': 'off',

    // Let Prettier handle this
    // https://eslint.org/docs/rules/object-curly-spacing
    'object-curly-spacing': 'off',

  },
};
