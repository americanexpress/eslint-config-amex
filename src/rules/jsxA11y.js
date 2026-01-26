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

/**
 * This file contains all rules for the `eslint-plugin-jsx-a11y` plugin.
 *
 * These rules were migrated from https://github.com/americanexpress/eslint-config-amex/blob/main/index.js.
 *
 * For a complete list of rules, see https://github.com/muenzpraeger/eslint-plugin-inclusive-language/tree/2.2.1/docs/rules.
 */

export default {
  // https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/v6.10.2/docs/rules/anchor-is-valid.md
  // migrated from https://github.com/americanexpress/eslint-config-amex/blob/main/index.js#L132
  "jsx-a11y/anchor-is-valid": [
    "error",
    {
      components: ["Link"],
      specialLink: ["to"],
    },
  ],

  // https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/v6.10.2/docs/rules/label-has-for.md
  // migrated from https://github.com/americanexpress/eslint-config-amex/blob/main/index.js#L141
  "jsx-a11y/label-has-for": "off",

  // https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/v6.10.2/docs/rules/label-has-associated-control.md
  // migrated from https://github.com/americanexpress/eslint-config-amex/blob/main/index.js#L146
  "jsx-a11y/label-has-associated-control": [
    "error",
    {
      assert: "htmlFor",
    },
  ],
};
