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
 * This file contains all rules for the `eslint-plugin-import` plugin.
 * For a complete list of rules, see https://github.com/import-js/eslint-plugin-import/tree/v2.32.0/docs/rules.
 */

export default {
  // Ensure consistent use of file extension within the import path
  // https://github.com/benmosher/eslint-plugin-import/blob/v2.32.0/docs/rules/extensions.md
  "import/extensions": [
    "error",
    "ignorePackages",
    {
      js: "never",
      mjs: "never",
      jsx: "never",
    },
  ],

  // disallow non-import statements appearing before import statements
  // https://github.com/benmosher/eslint-plugin-import/blob/v2.32.0/docs/rules/first.md
  "import/first": "error",

  // Require a newline after the last import/require in a group
  // https://github.com/benmosher/eslint-plugin-import/blob/v2.32.0/docs/rules/newline-after-import.md
  "import/newline-after-import": "error",

  // Forbid import of modules using absolute paths
  // https://github.com/benmosher/eslint-plugin-import/blob/v2.32.0/docs/rules/no-absolute-path.md
  "import/no-absolute-path": "error",

  // disallow AMD require/define
  // https://github.com/benmosher/eslint-plugin-import/blob/v2.32.0/docs/rules/no-amd.md
  "import/no-amd": "error",

  // Reports if a module's default export is unnamed
  // https://github.com/benmosher/eslint-plugin-import/blob/d9b712ac7fd1fddc391f7b234827925c160d956f/docs/rules/no-anonymous-default-export.md
  "import/no-anonymous-default-export": [
    "error",
    {
      allowArray: true,
      allowLiteral: true,
      allowObject: true,
    },
  ],

  // Forbid cyclical dependencies between modules
  // https://github.com/benmosher/eslint-plugin-import/blob/d81f48a2506182738409805f5272eff4d77c9348/docs/rules/no-cycle.md
  "import/no-cycle": ["error", { maxDepth: "∞" }],

  // disallow duplicate imports
  // https://github.com/benmosher/eslint-plugin-import/blob/v2.32.0/docs/rules/no-duplicates.md
  "import/no-duplicates": "error",

  // Forbid require() calls with expressions
  // https://github.com/benmosher/eslint-plugin-import/blob/v2.32.0/docs/rules/no-dynamic-require.md
  "import/no-dynamic-require": "error",

  "import/no-extraneous-dependencies": [
    "error",
    {
      devDependencies: [
        "test/**",
        "tests/**",
        "spec/**",
        "**/__tests__/**",
        "**/__mocks__/**",
        "test.{js,jsx,ts,tsx}",
        "test-*.{js,jsx,ts,tsx}",
        "**/*{.,_}{test,spec}.{js,jsx,ts,tsx}",
        "**/jest.config.js",
        "**/jest.setup.js",
        "**/vue.config.js",
        "**/webpack.config.js",
        "**/webpack.config.*.js",
        "**/rollup.config.js",
        "**/rollup.config.*.js",
        "**/gulpfile.js",
        "**/gulpfile.*.js",
        "**/Gruntfile{,.js}",
        "**/protractor.conf.js",
        "**/protractor.conf.*.js",
        "dev.*.js",
        "mock{,s}/**",
        "**/vite.config.{ts,js}",
        "**/vitest.config.{ts,js}",
        "*.config.{js,mjs,cjs}", // added since this is a flat config file
      ],

      optionalDependencies: false,
    },
  ],

  // Reports the use of import declarations with CommonJS exports in any module except for the main module.
  // https://github.com/benmosher/eslint-plugin-import/blob/1012eb951767279ce3b540a4ec4f29236104bb5b/docs/rules/no-import-module-exports.md
  "import/no-import-module-exports": [
    "error",
    {
      exceptions: [],
    },
  ],

  // Forbid mutable exports
  // https://github.com/benmosher/eslint-plugin-import/blob/v2.32.0/docs/rules/no-mutable-exports.md
  "import/no-mutable-exports": "error",

  // do not allow a default import name to match a named export
  // https://github.com/benmosher/eslint-plugin-import/blob/v2.32.0/docs/rules/no-named-as-default.md
  "import/no-named-as-default": "error",

  // warn on accessing default export property names that are also named exports
  // https://github.com/benmosher/eslint-plugin-import/blob/v2.32.0/docs/rules/no-named-as-default-member.md
  "import/no-named-as-default-member": "error",

  // Prevent importing the default as if it were named
  // https://github.com/benmosher/eslint-plugin-import/blob/v2.32.0/docs/rules/no-named-default.md
  "import/no-named-default": "error",

  // Use this rule to prevent importing packages through relative paths.
  // https://github.com/benmosher/eslint-plugin-import/blob/1012eb951767279ce3b540a4ec4f29236104bb5b/docs/rules/no-relative-packages.md
  "import/no-relative-packages": "error",

  // Forbid a module from importing itself
  // https://github.com/benmosher/eslint-plugin-import/blob/44a038c06487964394b1e15b64f3bd34e5d40cde/docs/rules/no-self-import.md
  "import/no-self-import": "error",

  // Ensures that there are no useless path segments
  // https://github.com/benmosher/eslint-plugin-import/blob/ebafcbf59ec9f653b2ac2a0156ca3bcba0a7cf57/docs/rules/no-useless-path-segments.md
  "import/no-useless-path-segments": ["error", { commonjs: true }],

  // Forbid Webpack loader syntax in imports
  // https://github.com/benmosher/eslint-plugin-import/blob/v2.32.0/docs/rules/no-webpack-loader-syntax.md
  "import/no-webpack-loader-syntax": "error",

  // ensure absolute imports are above relative imports and that unassigned imports are ignored
  // https://github.com/benmosher/eslint-plugin-import/blob/v2.32.0/docs/rules/order.md
  // TODO: enforce a stricter convention in module import order?
  "import/order": ["error", { groups: [["builtin", "external", "internal"]] }],
};
