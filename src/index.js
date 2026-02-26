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

// eslint utilities
import { defineConfig } from "eslint/config";
import { fixupPluginRules } from "@eslint/compat";
import globals from "globals";

// eslint parser for babel syntax
import babelParser from "@babel/eslint-parser";

// eslint open source plugins
import eslintJs from "@eslint/js";
import eslintMarkdown from "@eslint/markdown";
import eslintPluginEslintCommentsConfig from "@eslint-community/eslint-plugin-eslint-comments/configs";
import eslintPluginImport from "eslint-plugin-import";
import eslintPluginInclusiveLanguage from "eslint-plugin-inclusive-language";
import eslintPluginJsxA11Y from "eslint-plugin-jsx-a11y";
import eslintPluginReact from "eslint-plugin-react";
import eslintPluginReactHooks from "eslint-plugin-react-hooks";
import stylisticEslintPlugin from "@stylistic/eslint-plugin";
import eslintPluginN from "eslint-plugin-n";
import eslintPluginUnicorn from "eslint-plugin-unicorn";
import eslintPluginYouDontNeedLodashUnderscore from "eslint-plugin-you-dont-need-lodash-underscore";

/*
 * The rules imported from the `rules` directory are either:
 *
 * a) Migrated from `eslint-config-airbnb`.
 *    `eslint-config-airbnb` is not actively maintained and has not been updated to support ESLint >= 9.
 *    See https://github.com/airbnb/javascript/tree/eslint-config-airbnb-v19.0.4/packages/eslint-config-airbnb/rules.
 *    See https://github.com/airbnb/javascript/tree/eslint-config-airbnb-v19.0.4/packages/eslint-config-airbnb-base/rules.
 *
 *
 * b) Migrated from `eslint-config-amex@16` (the previous major version of this config).
 *    See https://github.com/americanexpress/eslint-config-amex/blob/v16.6.1/index.js.
 *
 * c) Added as of `eslint-config-amex` >= 17.
 */
import unicornRules from "./rules/unicorn.js";
import eslintRules from "./rules/eslint.js";
import reactRules from "./rules/react.js";
import importRules from "./rules/import.js";
import stylisticRules from "./rules/stylistic.js";
import eslintCommentsRules from "./rules/eslintComments.js";
import inclusiveLanguageRules from "./rules/inclusiveLanguage.js";
import jsxA11yRules from "./rules/jsxA11y.js";
import nRules from "./rules/n.js";

import reactSettings from "./settings/react.js";
import importSettings from "./settings/import.js";

export default defineConfig([
  {
    name: "js, mjs, cjs, jsx, and snap files",
    // js, mjs, cjs are included by default: https://eslint.org/docs/latest/use/command-line-interface#--ext
    // add jsx and snap files
    files: ["**/*.js", "**/*.mjs", "**/*.cjs", "**/*.jsx", "**/*.snap"],
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
      "@eslint/js": eslintJs,
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
      "react-hooks": eslintPluginReactHooks,
      unicorn: eslintPluginUnicorn,
      // this plugin does not support ESLint 9 yet, use `fixupPluginRules` to make compatible
      "you-dont-need-lodash-underscore": fixupPluginRules(
        eslintPluginYouDontNeedLodashUnderscore,
      ),
    },
    settings: {
      ...reactSettings,
      ...importSettings,
    },
    extends: ["@eslint/js/recommended"],
    rules: {
      // `@eslint-community/eslint-comments` rules
      ...eslintPluginEslintCommentsConfig.recommended.rules,
      ...eslintCommentsRules,

      // `eslint/js` rules
      ...eslintRules,

      // `@stylistic` rules
      ...stylisticEslintPlugin.configs.recommended.rules,
      ...stylisticRules,

      // `import` rules
      ...importRules,

      // `inclusive-language` rules
      ...inclusiveLanguageRules,

      // `jsx-a11y` rules
      // TODO: should we eventually include `eslint-plugin-jsx-a11y` recommended rules?
      // ...jsxA11Y.flatConfigs.recommended.rules,
      ...jsxA11yRules,

      // `n` (Node) rules
      // TODO: should we eventually include `eslint-plugin-n` recommended rules?
      // ...eslintPluginN.configs["flat/recommended"].rules,
      ...nRules,

      // `react` rules
      ...eslintPluginReact.configs.flat.recommended.rules,
      ...reactRules,

      // `react-hooks` rules
      ...eslintPluginReactHooks.configs.flat.recommended.rules,

      // `unicorn` rules
      ...unicornRules,

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
      "markdown/heading-increment": "off", // disabled as this might be annoying
      "markdown/no-multiple-h1": "off", // disabled as this might be annoying
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
  },
]);
