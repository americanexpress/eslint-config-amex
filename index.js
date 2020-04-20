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
    // we are using optional chainig and nullish coalescing
    es2020: true,
    // do not warn about "it", "describe", "assert", etc. from showing as undefined globals
    jest: true,
    'jest/globals': true,
  },
  globals: {
    // these globals help IDEs from displaying these as undefined
    jest: true,
    localStorage: true,
    process: false,
    Promise: true,
  },
  settings: {
    // the src folder can be used as the resource root for imports
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

    // Don't require trailing commas for multi-line function calls
    // Airbnb config assumes you're transpiling with https://npmjs.com/babel-preset-airbnb
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

    // Stateless Functional components in React can easily cause this to trigger false positives
    // especially with hooks. Complexity of functions can be handled in code reviews.
    // https://eslint.org/docs/rules/complexity
    complexity: 'off',

    // Not all arrow functions need to return
    // https://eslint.org/docs/rules/consistent-return
    'consistent-return': 'off',

    // This rule isn't ready yet
    // Arrow functions are forced to put the return values on a new line, rather than inline
    // with the argument and fat arrow itself, which is awkward syntax
    // This rule, when fixing code will then cause problems with the max-length rule
    // https://github.com/airbnb/javascript/issues/1584#issuecomment-335676788
    'function-paren-newline': 'off',

    // Prettier handles this
    // https://eslint.org/docs/rules/implicit-arrow-linebreak
    'implicit-arrow-linebreak': 'off',

    // Prettier handles indent
    // https://eslint.org/docs/rules/indent
    indent: 'off',
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-indent.md
    'react/jsx-indent': 'off',

    // Functions that take many positional arguments can be difficult to work
    // with and produce less maintainable APIs. When more than three arguments
    // are needed, named arguments should be used.
    'max-params': ['error', 3],

    // Knowing how to use bitwise operators is rare and people who don't know how never will
    // For the few instances where they are useful, this rule is a nuisance, so it's unnecessary
    // https://eslint.org/docs/rules/no-bitwise
    'no-bitwise': 'off',

    // Simplifies code
    // https://eslint.org/docs/rules/no-lonely-if
    'no-lonely-if': ['error'],

    // Restrict certain modules from being used
    'no-restricted-modules': ['error', {paths: forbiddenModules}],
    'no-restricted-imports': ['error', {paths: forbiddenModules}],

    // Reduces careless typo mistakes
    // https://eslint.org/docs/rules/no-return-assign
    'no-return-assign': ['error'],

    // Prettier handles this
    // https://eslint.org/docs/rules/object-curly-spacing
    'object-curly-spacing': 'off',

    // Spreading is better than complex Object.assign
    // https://eslint.org/docs/rules/prefer-object-spread
    'prefer-object-spread': ['error'],

    // Alphabetical sorting is the most reliable way to make code consistently readable
    // This goes for imports, props, objects, etc.

    // This one is warn so it isn't disruptive during development
    // https://eslint.org/docs/rules/sort-imports
    'sort-imports': [
      'warn',
      {
        ignoreCase: true,
        memberSyntaxSortOrder: ['multiple', 'single', 'all', 'none'],
      },
    ],

    // This enforces props are alphabetical on <Components />
    // Reserved props should be sorted first (key, ref, etc.)
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-sort-props.md
    'react/jsx-sort-props': [
      'error',
      {
        ignoreCase: true,
        reservedFirst: true,
      },
    ],

    // This ensures deconstructed props/state, etc. are alphabetical
    // https://github.com/mthadley/eslint-plugin-sort-destructure-keys
    'sort-destructure-keys/sort-destructure-keys': 'error',

    // Use the sort-imports rule
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/order.md
    'import/order': 'off',

    // This rule is problematic in JSX
    // https://eslint.org/docs/rules/spaced-comment
    'spaced-comment': 'off',

    // This expands the acceptable boolean names to include:
    // "is", "has", "can", "show" and "hide", as well as "show" and "hide" on their own
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/boolean-prop-naming.md
    'react/boolean-prop-naming': [
      'error',
      {
        propTypeNames: ['bool', 'mutuallyExclusiveTrueProps'],
        rule: '^((is|has|can|show|hide)[A-Z]([A-Za-z0-9]?)+|(show|hide))',
      },
    ],

    // In theory this is a good idea, but as a rule it is too onerous
    // 'style' is just one example of a prop that is an object with unknown keys
    // Prefer handling this in code reviews on a case-by-case basis
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/forbid-prop-types.md
    'react/forbid-prop-types': 'off',

    // https://github.com/facebook/jsx/issues/23
    // The future is that props given with no value will work like object shorthand
    // notation instead of evaluating to true.
    // Currently our rules forbid adding a value of true, which will
    // add more refactoring for us in the future.
    // Requiring true to be set as the value will help future-proof our code.
    'react/jsx-boolean-value': ['error', 'always'],

    // React fragment syntax requires Babel 7.x but this preset needs to still support Babel 6.x
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-fragments.md
    'react/jsx-fragments': 'off',

    // It is common practice to use .js for React
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-filename-extension.md
    'react/jsx-filename-extension': 'off',

    // Disabling this rule until this is resolved https://github.com/yannickcr/eslint-plugin-react/issues/1848
    // at the moment the fix makes the code look messy and at times unreadable
    'react/jsx-one-expression-per-line': 'off',

    // AirBnB uses 'error' but it's too disruptive during development
    // and we shouldn't prevent compilation because of it
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-unused-prop-types.md
    'react/no-unused-prop-types': ['warn'],

    // THIS IS A CONTROVERSIAL RULE THAT WE SHOULD DISCUSS
    // With React heading towards concurrent mode and hooks becoming the preferred
    // way of building React apps now, we should try to avoid using class components
    // People can always disable the eslint rule inline case-by-case
    // or at the project level in an .eslintrc if they need to
    'react/prefer-stateless-function': ['error'],

    // The only thing these AirBnB-enabled rules do is create unnecessary boilerplate
    'react/require-default-props': 'off',
    'react/default-props-match-prop-types': 'off',

    // This is better managed by other rules
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/function-component-definition.md
    'react/function-component-definition': 'off',

    // This rule forces anchor tags to include an "href" attribute; however,
    // the Link component uses the "to" attribute instead. To prevent this
    // from causing linter errors, the below configuration specifies that
    // for Link components, the "to" attribute is also acceptable.
    // https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/anchor-is-valid.md
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

    // This rule is onerous in React functional components and has been debated
    // by the community and proven as an unnecessary premature optimization
    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/consistent-function-scoping.md
    'unicorn/consistent-function-scoping': 'off',

    // We shouldn't enforce filename casing to always be the same.  e.g. We may
    // prefer kebab-case for bin files, PascalCase for React components, etc.
    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/filename-case.md
    'unicorn/filename-case': 'off',

    // Nested ternaries are formatted well with Prettier and are commonly used in JSX
    // https://eslint.org/docs/rules/no-nested-ternary
    'no-nested-ternary': 'off',
    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/no-nested-ternary.md
    'unicorn/no-nested-ternary': 'off',

    // This rule is incompatible with React
    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/no-null.md
    'unicorn/no-null': 'off',

    // Preventing abbreviations is too opinionated for linting and is not
    // particularly compatible with React development
    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/prevent-abbreviations.md
    'unicorn/prevent-abbreviations': 'off',

    // This rule is overly burdensome in and is premature optimization, at best
    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/prefer-set-has.md
    'unicorn/prefer-set-has': 'off',

    // When an anonymous function is the default export of a module, your stack traces
    // and performance profiles become littered with anonymous functions which aren't
    // helpful with debugging.
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-anonymous-default-export.md
    'import/no-anonymous-default-export': [
      'error',
      {
        allowArray: true,
        allowLiteral: true,
        allowObject: true,
      },
    ],

    // Disruptive to development and can be problematic with Redux
    // Also, some people prefer named exports over default ones and there's
    // nothing better or worse about each choice that should be forced
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/prefer-default-export.md
    'import/prefer-default-export': 'off',

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
