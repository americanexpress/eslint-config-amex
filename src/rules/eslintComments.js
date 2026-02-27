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
 * This file contains all rules for the `@eslint-community/eslint-comments` plugin.
 *
 * These rules were migrated from https://github.com/americanexpress/eslint-config-amex/blob/16.x/index.js.
 *
 * For a complete list of rules, see https://github.com/eslint-community/eslint-plugin-eslint-comments/tree/v4.6.0/docs/rules.
 */

export default {
  // https://github.com/eslint-community/eslint-plugin-eslint-comments/blob/v4.6.0/docs/rules/require-description.md
  "@eslint-community/eslint-comments/require-description": [
    "error",
    {
      ignore: ["eslint-enable"],
    },
  ],

  // https://github.com/eslint-community/eslint-plugin-eslint-comments/blob/main/docs/rules/no-unused-disable.md
  "@eslint-community/eslint-comments/no-unused-disable": ["error"],
};
