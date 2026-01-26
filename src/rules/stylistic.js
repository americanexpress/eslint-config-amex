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
 * This file contains all rules for the `@stylistic/eslint-plugin` plugin.
 * For a complete list of rules, see https://github.com/eslint-stylistic/eslint-stylistic/tree/v5.7.0/packages/eslint-plugin/rules.
 */

export default {
  // https://eslint.style/rules/comma-dangle
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

  // https://eslint.style/rules/no-extra-parens
  "@stylistic/no-extra-parens": [
    "off",
    "all",
    {
      conditionalAssign: true,
      nestedBinaryExpressions: false,
      returnAssign: false,
      ignoreJSX: "all", // delegate to eslint-plugin-react
      enforceForArrowConditionals: false,
    },
  ],

  // https://eslint.style/rules/function-call-argument-newline
  "@stylistic/function-call-argument-newline": ["error", "consistent"],

  // enforce spacing between functions and their invocations
  // https://eslint.style/rules/function-call-spacing
  "@stylistic/function-call-spacing": ["error", "never"],

  // Enforce the location of arrow function bodies with implicit returns
  // https://eslint.style/rules/implicit-arrow-linebreak
  "@stylistic/implicit-arrow-linebreak": ["error", "beside"],

  // disallow mixed 'LF' and 'CRLF' as linebreaks
  // https://eslint.style/rules/linebreak-style
  "@stylistic/linebreak-style": ["error", "unix"],

  // specify the maximum length of a line in your program
  // https://eslint.style/rules/max-len
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

  // enforces new line after each method call in the chain to make it
  // more readable and easy to maintain
  // https://eslint.style/rules/newline-per-chained-call
  "@stylistic/newline-per-chained-call": ["error", { ignoreChainWithDepth: 4 }],

  // disallow arrow functions where they could be confused with comparisons
  // https://eslint.style/rules/newline-per-chained-call
  "@stylistic/no-confusing-arrow": [
    "error",
    {
      allowParens: true,
    },
  ],

  // disallow unnecessary semicolons
  // https://eslint.style/rules/no-extra-semi
  "@stylistic/no-extra-semi": "error",

  // enforce the location of single-line statements
  // https://eslint.style/rules/nonblock-statement-body-position
  "@stylistic/nonblock-statement-body-position": [
    "error",
    "beside",
    { overrides: {} },
  ],

  // enforce line breaks between braces
  // https://eslint.style/rules/object-curly-newline
  "@stylistic/object-curly-newline": [
    "error",
    {
      ObjectExpression: { minProperties: 4, multiline: true, consistent: true },
      ObjectPattern: { minProperties: 4, multiline: true, consistent: true },
      ImportDeclaration: {
        minProperties: 4,
        multiline: true,
        consistent: true,
      },
      ExportDeclaration: {
        minProperties: 4,
        multiline: true,
        consistent: true,
      },
    },
  ],

  // enforce "same line" or "multiple line" on object properties.
  // https://eslint.org/docs/rules/object-property-newline
  "@stylistic/object-property-newline": [
    "error",
    {
      allowAllPropertiesOnSameLine: true,
    },
  ],

  // require a newline around variable declaration
  // https://eslint.style/rules/one-var-declaration-per-line
  "@stylistic/one-var-declaration-per-line": ["error", "always"],

  // require or disallow newlines around directives
  // https://eslint.style/rules/padding-line-between-statements
  "@stylistic/padding-line-between-statements": [
    "error",
    { blankLine: "always", prev: "directive", next: "*" },
    { blankLine: "any", prev: "directive", next: "directive" },
  ],

  // Enforce spacing around colons of switch statements
  // https://eslint.style/rules/switch-colon-spacing
  "@stylistic/switch-colon-spacing": ["error", { after: true, before: false }],
};
