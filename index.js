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

import path from "node:path";
import { fileURLToPath } from "node:url";

// eslint utilities
import { defineConfig } from "eslint/config";
import { fixupPluginRules, includeIgnoreFile } from "@eslint/compat";
import { FlatCompat } from "@eslint/eslintrc";

// eslint core plugins
import eslintJs from "@eslint/js";
import eslintMarkdown from "@eslint/markdown";

// eslint open source plugins
import globals from "globals";
import eslintPluginEslintCommentsConfig from "@eslint-community/eslint-plugin-eslint-comments/configs";
import eslintPluginImport from "eslint-plugin-import";
import eslintPluginInclusiveLanguage from "eslint-plugin-inclusive-language";
import eslintPluginJsxA11Y from "eslint-plugin-jsx-a11y";
import eslintPluginReact from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import eslintPluginJest from "eslint-plugin-jest";
import eslintPluginJestDom from "eslint-plugin-jest-dom";
import stylisticEslintPlugin from "@stylistic/eslint-plugin";
import eslintPluginN from "eslint-plugin-n";
import eslintPluginUnicorn from "eslint-plugin-unicorn";
import eslintPluginYouDontNeedLodashUnderscore from "eslint-plugin-you-dont-need-lodash-underscore";

// eslint config defined in a separate file
import unicornConfig from "./unicorn.js";

// eslint parser for babel syntax
import babelParser from "@babel/eslint-parser";

const gitignorePath = fileURLToPath(new URL(".gitignore", import.meta.url));

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: eslintJs.configs.recommended,
  allConfig: eslintJs.configs.all,
});

const momentRestrictedModule = {
  name: "moment/moment",
  message: "Import only from 'moment' instead.",
};

export default defineConfig([
  includeIgnoreFile(gitignorePath), // behavior from https://github.aexp.com/amex-eng/one-app-dependencies/blob/main/packages/cli/amex-one-app-module-template/js-template/package.json.ejs#L28
  {
    name: "js, mjs, cjs, jsx, and snap files",
    // js, mjs, cjs are included by default: https://eslint.org/docs/latest/use/command-line-interface#--ext
    // add jsx and snap files
    // files: ["**/*.js", "**/*.mjs", "**/*.cjs", "**/*.jsx", "**/*.snap"], // // this should be defined in module eslint.config.js
    languageOptions: {
      parser: babelParser,
      ecmaVersion: 2020,
      sourceType: "module",
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
        requireConfigFile: false,
      },
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
    plugins: {
      "@eslint/js": eslintJs.configs.recommended,
      // see https://github.com/eslint-community/eslint-plugin-eslint-comments/issues/215
      "@eslint-community/eslint-comments":
        eslintPluginEslintCommentsConfig.recommended.plugins[
          "@eslint-community/eslint-comments"
        ],
      "@stylistic": stylisticEslintPlugin,
      import: eslintPluginImport,
      // this plugin does not support ESLint 9 yet, use `fixupPluginRules` to make compatible
      "inclusive-language": fixupPluginRules(eslintPluginInclusiveLanguage),
      "jsx-a11y": eslintPluginJsxA11Y,
      markdown: eslintMarkdown,
      n: eslintPluginN,
      react: eslintPluginReact,
      "react-hooks": reactHooks,
      unicorn: eslintPluginUnicorn,
      // this plugin does not support ESLint 9 yet, use `fixupPluginRules` to make compatible
      "you-dont-need-lodash-underscore": fixupPluginRules(
        eslintPluginYouDontNeedLodashUnderscore
      ),
    },
    settings: {
      "import/resolver": {
        node: {
          paths: ["src"],
        },
      },
      react: {
        version: "detect",
      },
    },

    rules: {
      // `@eslint-community/eslint-comments` rules
      ...eslintPluginEslintCommentsConfig.recommended.rules,
      "@eslint-community/eslint-comments/require-description": [
        "error",
        {
          ignore: ["eslint-enable"],
        },
      ],
      "@eslint-community/eslint-comments/no-unused-disable": ["error"],

      // `eslint/js` rules
      "no-lonely-if": ["error"],
      "no-return-assign": ["error"],
      "prefer-object-spread": ["error"],
      "no-bitwise": ["error"],
      complexity: ["error"],
      "max-params": ["error", 3],
      "no-restricted-imports": ["error", momentRestrictedModule],

      // `@stylistic` rules
      // ...stylisticEslintPlugin.configs.recommended.rules,
      "@stylistic/function-paren-newline": "off",
      "@stylistic/comma-dangle": [
        "error",
        {
          arrays: "always-multiline",
          objects: "always-multiline",
          imports: "always-multiline",
          exports: "always-multiline",
          functions: "never",
        },
      ],
      "@stylistic/max-len": [
        "error",
        100,
        2,
        {
          ignoreUrls: true,
          ignoreComments: false,
          ignoreRegExpLiterals: true,
          ignoreStrings: true,
          ignoreTemplateLiterals: true,
          ignorePattern: "^\\s*// eslint-disable-next-line.*?--",
        },
      ],
      "@stylistic/no-extra-parens": "error",

      // `import` rules
      "import/no-anonymous-default-export": [
        "error",
        {
          allowArray: true,
          allowLiteral: true,
          allowObject: true,
        },
      ],
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
      "import/prefer-default-export": "off",

      // `inclusive-language` rules
      /* eslint-disable inclusive-language/use-inclusive-words 
        -- config must specify non-inclusive words */
      "inclusive-language/use-inclusive-words": [
        "warn",
        {
          words: [
            {
              word: "blacklist",
              suggestions: [
                "blocklist",
                "denylist",
                "deny",
                "block",
                "unapproved",
              ],
            },
            {
              word: "whitelist",
              suggestions: [
                "allowlist",
                "passlist",
                "allow",
                "permit",
                "approved",
              ],
            },
            {
              word: "master",
              suggestions: ["main", "primary", "host", "leader"],
            },
            {
              word: "slave",
              suggestions: ["secondary", "replica", "client", "follower"],
            },
          ],

          lintStrings: true,
        },
      ],
      /* eslint-enable inclusive-language/use-inclusive-words 
        -- config must specify non-inclusive words */

      // `jsx-a11y` rules
      // ...jsxA11Y.flatConfigs.recommended.rules, // TODO: this was not included originally, should we include?
      "jsx-a11y/anchor-is-valid": [
        "error",
        {
          components: ["Link"],
          specialLink: ["to"],
        },
      ],
      // "jsx-a11y/label-has-for": "off", // unncessary
      "jsx-a11y/label-has-associated-control": [
        "error",
        {
          assert: "htmlFor",
        },
      ],

      // `n` rules
      "n/no-restricted-require": ["error", [momentRestrictedModule]],

      // `react` rules
      "react/jsx-boolean-value": ["error", "always"],
      "react/boolean-prop-naming": [
        "error",
        {
          propTypeNames: ["bool", "mutuallyExclusiveTrueProps"],
          rule: "^((is|has|can|show|hide|should)[A-Z]([A-Za-z0-9]?)+|(show|hide))",
        },
      ],
      "react/function-component-definition": "off",
      "react/jsx-fragments": "off",
      "react/jsx-one-expression-per-line": "off",
      "react/require-default-props": "off",

      // `react-hooks` rules
      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "warn",

      // `unicorn` rules
      ...unicornConfig.rules,

      // `you-dont-need-lodash-underscore` rules
      ...eslintPluginYouDontNeedLodashUnderscore.configs.compatible.rules,
    },
  },
  {
    name: "jsx files",
    files: ["**/*.jsx"],
    rules: {
      // It is common to comment JSX during normal development, so 'warn' is least disruptive
      "@stylistic/spaced-comment": "warn",
    },
  },
  {
    name: "markdown files",
    files: ["**/*.{md,mkdn,mdown,markdown}"],
    plugins: {
      markdown: eslintMarkdown,
    },
    language: "markdown/gfm",
    rules: {
      ...eslintMarkdown.configs.recommended.at(0).rules,
      "markdown/heading-increment": "off", // this might be annoying
    },
  },
  {
    // ```js -fenced code blocks inside .md files
    // Certain rules need to be disabled when we are linting markdown files,
    // since they will often be snippets in documentation that cannot be run on
    // their own.
    name: "markdown files with fenced code blocks",
    files: ["**/*.{md,mkdn,mdown,markdown}/*.{js,javascript,jsx,node}"],
    rules: {
      "no-unused-expressions": "off",
      "no-unused-vars": "off",
      "no-undef": "off",
      "react/jsx-no-undef": "off",
      "import/extensions": "off",
      "import/no-unresolved": "off",
      "import/prefer-default-export": "off",
      "import/no-extraneous-dependencies": "off",
      "react/react-in-jsx-scope": "off",
      "react/jsx-filename-extension": "off",
      "react/prop-types": "off",
      "react/require-default-props": "off",
    },
  }
]);

