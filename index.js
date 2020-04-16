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

const forbiddenModules = [
  // want to restrict create-react-class usage within our modules
  'create-react-class',
  // want to prevent incorrect imports of moment
  {name: 'moment/moment', message: "Import only from 'moment' instead."},
];

module.exports = {
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 11,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  env: {
    browser: true,
    es2020: true,
    jest: true,
    'jest/globals': true,
  },
  globals: {
    jest: true,
    localStorage: true,
    process: false,
    Promise: true,
  },
  settings: {
    'import/resolver': {
      node: {
        paths: ['src'],
      },
    },
  },
  extends: ['eslint-config-airbnb']
    .map(require.resolve)
    .concat([
      'eslint:recommended',
      'plugin:unicorn/recommended',
      'plugin:react/recommended',
      'plugin:react-app/recommended',
      'plugin:jest/recommended',
      'plugin:jest-dom/recommended',
      'plugin:you-dont-need-lodash-underscore/compatible',
      'prettier',
      'prettier/react',
      'prettier/unicorn',
    ]),
  plugins: [
    'import',
    'jsx-a11y',
    'markdown',
    'react',
    'react-app',
    'jest',
    'jest-dom',
    'unicorn',
    'react-hooks',
    'you-dont-need-lodash-underscore',
    'sort-destructure-keys',
    'prettier',
  ],
  rules: {
    // open a PR per rule change

    // don't require trailing commas for multi-line function calls
    // airbnb config assumes you're transpiling with https://npmjs.com/babel-preset-airbnb
    // which includes trailing function commas.
    // https://github.com/eslint/eslint/issues/7571#issuecomment-259538272
    // This makes life harder if you're linting bin files that aren't transpiled
    // or have the trailing function (ES2017 proposal) config set.
    // This is bad as that adds friction to linting all files, which is desired.
    'comma-dangle': [
      'error',
      {
        arrays: 'always-multiline',
        objects: 'always-multiline',
        imports: 'always-multiline',
        exports: 'always-multiline',
        functions: 'never',
      },
    ],

    // airbnb defaults to a maximum cyclomatic complexity of 11
    complexity: ['error'],

    // Not all arrow functions need to return
    'consistent-return': 'off',

    // this rule isn't ready yet
    // arrow functions are forced to put the return values on a new line, rather than inline
    // with the argument and fat arrow itself, which is awkward syntax
    // this rule, whenfixing" code will then cause problems with the max-length rule
    // https://github.com/airbnb/javascript/issues/1584#issuecomment-335676788
    'function-paren-newline': 'off',

    // Prettier handles this
    'implicit-arrow-newline': 'off',

    // Prettier handles this
    indent: 'off',

    // Functions that take many positional arguments can be difficult to work
    // with and produce less maintainable APIs. When more than three arguments
    // are needed, named arguments should be used.
    'max-params': ['error', 3],

    // Bitwise use is rare, but it has its uses and people who don't know how to use it never will anyway
    // So this rule is not necessary
    'no-bitwise': 'off',

    // Simplifies code
    'no-lonely-if': ['error'],

    // restrict certain modules from being used
    'no-restricted-modules': ['error', {paths: forbiddenModules}],
    'no-restricted-imports': ['error', {paths: forbiddenModules}],

    'no-return-assign': ['error'],

    // Prettier handles this
    'object-curly-spacing': 'off',

    // Spreading is better
    'prefer-object-spread': ['error'],

    // Alphabetical sorting is the most reliable way to make code consistently readable
    // This goes for imports, props, objects, etc.
    // Warn because it should not prevent compilation during development
    'sort-imports': [
      'warn',
      {
        ignoreCase: true,
        memberSyntaxSortOrder: ['multiple', 'single', 'all', 'none'],
      },
    ],

    // React overrides

    // This expands the acceptable boolean names to include "canX", "show" and "hide"
    'react/boolean-prop-naming': [
      'error',
      {
        propTypeNames: ['bool', 'mutuallyExclusiveTrueProps'],
        rule: '^((is|has|can|show|hide)[A-Z]([A-Za-z0-9]?)+|(show|hide))',
      },
    ],

    // This is too onerous - 'style' is just one example of a prop that is
    // an object with unknown keys
    'react/forbid-prop-types': 'off',

    // https://github.com/facebook/jsx/issues/23
    // The future is that props given with no value will work like object shorthand
    // notation instead of evaluating to true.
    // Currently our rules forbid adding a value of true, which will
    // add more refactoring for us in the future.
    // Requiring true to be set as the value will help future-proof our code.
    'react/jsx-boolean-value': ['error', 'always'],

    // React fragment syntax requires Babel 7.x but this preset needs to still support Babel 6.x
    'react/jsx-fragments': 'off',

    // Prettier handles indentations
    'react/jsx-indent': 'off',

    // It's common practice to use .js for React components now
    'react/jsx-filename-extension': 'off',

    // Disabling this rule until this is resolved https://github.com/yannickcr/eslint-plugin-react/issues/1848
    // at the moment the fix makes the code look messy and at times unreadable
    'react/jsx-one-expression-per-line': 'off',

    // AirBnB uses 'error' but it's too disruptive during development
    // and we shouldn't prevent compilation because of it
    'react/no-unused-prop-types': ['warn'],

    // HEAR ME OUT!
    // With React heading towards concurrent mode and hooks being the preferred
    // way of building React now, we should avoid using class components
    // People can always disable the eslint rule inline case-by-case
    // or in an .eslintrc if they have a good reason
    'react/prefer-stateless-function': ['error'],

    // The only thing these rules do is increase boilerplate.
    // undefined is fine as an implied prop value
    // just like it is in vanilla javascript
    'react/require-default-props': 'off',
    'react/default-props-match-prop-types': 'off',

    // This is managed by another rule
    'react/function-component-definition': 'off',

    // This rule forces anchor tags to include an "href" attribute; however,
    // the Link component uses the "to" attribute instead. To prevent this
    // from causing linter errors, the below configuration specifies that
    // for Link components, the "to" attribute is also acceptable.
    'jsx-a11y/anchor-is-valid': [
      'error',
      {
        components: ['Link'],
        specialLink: ['to'],
      },
    ],

    // This rule has been deprecated by jsx-a11y as of version 6.1.0
    // As we are past this version, and per the recommendations of the dev team,
    // we should turn this rule off.
    // https://github.com/evcohen/eslint-plugin-jsx-a11y/issues/455#issuecomment-403359963
    'jsx-a11y/label-has-for': 'off',

    // Unicorn overrides

    // This is onerous in React functional components
    'unicorn/consistent-function-scoping': 'off',

    // We shouldn't enforce filename casing to always be the same.  e.g. We may
    // prefer kebab-case for bin files, PascalCase for React components, etc.
    'unicorn/filename-case': 'off',

    // Nested ternaries are formatted well with Prettier
    // and are commonly used in JSX
    'no-nested-ternary': 'off',
    'unicorn/no-nested-ternary': 'off',

    // Using null is fine, especially in React
    'unicorn/no-null': 'off',

    // Preventing abbreviations is too opinionated and is not
    // particularly compatible with React development
    'unicorn/prevent-abbreviations': 'off',

    // This rule is overly burdensome and is premature optimization
    'unicorn/prefer-set-has': 'off',

    // When an anonymous function is the default export of a module, your stack traces
    // and performance profiles become littered with anonymous functions which aren't
    // helpful with debugging.
    'import/no-anonymous-default-export': [
      'error',
      {
        allowArray: true,
        allowLiteral: true,
        allowObject: true,
      },
    ],

    // Order is handled elsewhere
    'import/order': 'off',

    // React hooks were introduced in 16.8.0 and have two restrictions that are addressed
    // with this rule:
    // 1. Hooks must be called from React functions
    // 2. Hooks can only be called from the top level and not within loops, conditions,
    // or nested functions
    // https://reactjs.org/docs/hooks-rules.html#eslint-plugin
    'react-hooks/rules-of-hooks': 'error',

    // Forbid the use of extraneous packages
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: [
          // base list from airbnb config
          'test/**', // tape, common npm pattern
          'tests/**', // also common npm pattern
          'spec/**', // mocha, rspec-like pattern
          '**/__tests__/**', // jest pattern
          '**/__mocks__/**', // jest pattern
          'test.{js,jsx}', // repos with a single test file
          'test-*.{js,jsx}', // repos with multiple top-level test files
          '**/*{.,_}{test,spec}.{js,jsx}', // tests where the extension or filename suffix denotes that it is a test
          '**/jest.config.js', // jest config
          '**/jest.setup.js', // jest setup
          '**/vue.config.js', // vue-cli config
          '**/webpack.config.js', // webpack config
          '**/webpack.config.*.js', // webpack config
          '**/rollup.config.js', // rollup config
          '**/rollup.config.*.js', // rollup config
          '**/gulpfile.js', // gulp config
          '**/gulpfile.*.js', // gulp config
          '**/Gruntfile{,.js}', // grunt config
          '**/protractor.conf.js', // protractor config
          '**/protractor.conf.*.js', // protractor config

          // additional paths used only in development
          'dev.*.js', // developer config
          'mock/**', // parrot mocks
        ],
        optionalDependencies: false,
      },
    ],

    'prettier/prettier': ['error'],

    // This enforces alphabetical props
    'sort-destructure-keys/sort-destructure-keys': 'error',
  },
  overrides: [
    {
      // Certain rules need to be disabled when we are linting markdown files,
      // since they will often be snippets in documentation that cannot be run on
      // their own.
      files: ['**/*.md'],
      rules: {
        'no-unused-expressions': 0,
        'no-unused-vars': 0,
        'no-undef': 0,
        'react/jsx-no-undef': 0,
        'import/extensions': 0,
        'import/no-unresolved': 0,
        'import/prefer-default-export': 0,
        'import/no-extraneous-dependencies': 0,
        'react/react-in-jsx-scope': 0,
        'react/jsx-filename-extension': 0,
        'react/prop-types': 0,
        'react/require-default-props': 0,
      },
    },
  ],
};
