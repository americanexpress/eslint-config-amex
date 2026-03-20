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

// eslint-disable-next-line import/no-unresolved -- see https://github.com/import-js/eslint-plugin-import/issues/1810
import { defineConfig } from "eslint/config";
// eslint-disable-next-line import/no-unresolved -- see https://github.com/import-js/eslint-plugin-import/issues/1810
import typescriptEslint from "typescript-eslint";
import eslintPluginReact from "eslint-plugin-react";
import eslintPluginImport from "eslint-plugin-import";

export default defineConfig([
  ...typescriptEslint.configs.recommended,
  {
    // these plugins need to be defined because some of their rules are overrides below
    plugins: {
      react: eslintPluginReact,
      import: eslintPluginImport,
    },
    settings: { "import/resolver": { typescript: {} } },
    rules: {
      // prevent using the `any` type explicitly, as it negates the benefits of TS
      "@typescript-eslint/no-explicit-any": "error",

      // props should be typed with TS, so proptypes will not exist
      "react/prop-types": "off",

      // Use TS rather than eslint to check these rules, as eslint often get them wrong
      "no-use-before-define": "off",
      "@typescript-eslint/no-use-before-define": ["error"],
      "no-shadow": "off",
      "@typescript-eslint/no-shadow": "error",

      // Ensure we are allowed to write 'jsx' code in tsx files
      "react/jsx-filename-extension": [2, { extensions: [".jsx", ".tsx"] }],

      // Backwards compatibility with older typescript-eslint/recommended config
      "@typescript-eslint/no-unused-vars": ["error", { 
        caughtErrors: "none",
        // this rule will be ignored for all variables starting with leading underscore
        // this is helpful for arguments in event handlers that are not used
        argsIgnorePattern: '^_',
        caughtErrorsIgnorePattern: '^_',
        destructuredArrayIgnorePattern: '^_',
        varsIgnorePattern: '^_',
      }],

      // allow implicit extensions when importing files for .ts and .tsx
      "import/extensions": [
        "error",
        "ignorePackages",
        {
          ts: "never",
          tsx: "never",
          js: "never",
          jsx: "never",
        },
      ],
    },
  },
  {
    files: ["*.js", "*.jsx"],
    rules: {
      // allow use of require in order to support non-transpiled javascript files with node 16
      "@typescript-eslint/no-require-imports": "off",
      // default props are not marked as optional in typescript
      "react/default-props-match-prop-types": [
        "error",
        { allowRequiredDefaults: true },
      ],
    },
  },
]);