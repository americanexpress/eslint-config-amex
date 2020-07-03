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
  { name: 'moment/moment', message: "Import only from 'moment' instead." },
];

module.exports = {
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  extends: [
    'eslint-config-airbnb',
  ].map(require.resolve).concat([
    // Some helpful rules that will prevent bugs
    'plugin:unicorn/recommended',
    // Use native JS instead of lodash
    'plugin:you-dont-need-lodash-underscore/compatible',
  ]),
  env: {
    browser: true,
    node: true,
    // we are using optional chaining and nullish coalescing
    es2020: true,
  },
  settings: {
    // the src folder can be used as the resource root for imports
    'import/resolver': {
      node: {
        paths: ['src'],
      },
    },
  },
  plugins: [
    'import',
    'jsx-a11y',
    'markdown',
    'react',
    'unicorn',
    'react-hooks',
    'you-dont-need-lodash-underscore',
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

    // Expand the acceptable boolean names to include
    // "is", "has", "can", "show" and "hide", as well as "show" and "hide" on their own
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/boolean-prop-naming.md
    'react/boolean-prop-naming': [
      'error',
      {
        propTypeNames: ['bool', 'mutuallyExclusiveTrueProps'],
        rule: '^((is|has|can|show|hide)[A-Z]([A-Za-z0-9]?)+|(show|hide))',
      },
    ],

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

    // This rule forces anchor tags to include an "href" attribute; however,
    // the Link component uses the "to" attribute instead. To prevent this
    // from causing linter errors, the below configuration specifies that
    // for Link components, the "to" attribute is also acceptable.
    'jsx-a11y/anchor-is-valid': ['error', {
      components: ['Link'],
      specialLink: ['to'],
    }],

    // This rule has been deprecated by jsx-a11y as of version 6.1.0
    // As we are past this version, and per the recommendations of the dev team,
    // we should turn this rule off.
    // https://github.com/evcohen/eslint-plugin-jsx-a11y/issues/455#issuecomment-403359963
    'jsx-a11y/label-has-for': 'off',

    // this rule isn't ready yet
    // arrow functions are forced to put the return values on a new line, rather than inline
    // with the argument and fat arrow itself, which is awkward syntax
    // this rule, when "fixing" code will then cause problems with the max-length rule
    // https://github.com/airbnb/javascript/issues/1584#issuecomment-335676788
    'function-paren-newline': 'off',

    // restrict certain modules from being used
    'no-restricted-modules': ['error', { paths: forbiddenModules }],
    'no-restricted-imports': ['error', { paths: forbiddenModules }],

    // We shouldn't enforce filename casing to always be the same.  e.g. We may
    // prefer kebab-case for bin files, PascalCase for React components, etc.
    'unicorn/filename-case': 'off',

    // Uses safe-regex to disallow potentially catastrophic exponential-time
    // regular expressions.
    'unicorn/no-unsafe-regex': 'error',

    // Array.includes() is consistent with String.includes()
    // the rule's performance claim is unsubstantiated and appears to be premature optimization
    // https://github.com/sindresorhus/eslint-plugin-unicorn/issues/495 and
    // https://github.com/sindresorhus/eslint-plugin-unicorn/issues/604
    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/prefer-set-has.md
    'unicorn/prefer-set-has': 'off',

    // This rule is incompatible with React where null must be returned
    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/no-null.md
    'unicorn/no-null': 'off',

    // Functions that take many positional arguments can be difficult to work
    // with and produce less maintainable APIs. When more than three arguments
    // are needed, named arguments should be used.
    'max-params': ['error', 3],

    // When an anonymous function is the default export of a module, your stack traces
    // and performance profiles become littered with Anoynmous functions which aren't
    // helpful with debugging.
    'import/no-anonymous-default-export': ['error', {
      allowArray: true,
      allowLiteral: true,
      allowObject: true,
    }],

    // React hooks were introduced in 16.8.0 and have two restrictions that are addressed
    // with this rule:
    // 1. Hooks must be called from React functions
    // 2. Hooks can only be called from the top level and not within loops, conditions,
    // or nested functions
    // https://reactjs.org/docs/hooks-rules.html#eslint-plugin
    'react-hooks/rules-of-hooks': 'error',

    // Forbid the use of extraneous packages
    'import/no-extraneous-dependencies': ['error', {
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
    }],

    // React fragment syntax requires Babel 7.x but this preset needs to still support Babel 6.x
    'react/jsx-fragments': 'off',

    // This rule restricts the use of parentheses to only where they are necessary.
    'no-extra-parens': 'error',

    // Disabling this rule until this is resolved https://github.com/yannickcr/eslint-plugin-react/issues/1848
    // at the moment the fix makes the code look messy and at times unreadable
    'react/jsx-one-expression-per-line': 'off',

    // reduces the unnecessary boilerplate of explicitly setting props to `undefined`
    // prevent false-confidence for those less experienced with how default props work
    'react/require-default-props': 'off',
  },
  overrides: [{
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
  }, {
    files: ['**/*.jsx'],
    rules: {
      // It is common to comment JSX during normal development, so 'warn' is least disruptive
      // https://eslint.org/docs/rules/spaced-comment
      'spaced-comment': 'warn',
    },
  }],
};
