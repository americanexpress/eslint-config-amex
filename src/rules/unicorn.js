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
 * This file contains all rules for the `eslint-plugin-unicorn` plugin.
 *
 * The rules in this file were migrated from https://github.com/americanexpress/eslint-config-amex/blob/16.x/unicorn.js.
 *
 * For a complete list of rules, see https://github.com/sindresorhus/eslint-plugin-unicorn/tree/v62.0.0/docs/rules.
 */

export default {
  // Improve regexes by making them shorter, consistent, and safer
  // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v62.0.0/docs/rules/better-regex.md
  "unicorn/better-regex": "error",

  // Enforce passing a message value when throwing a built-in error
  // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v62.0.0/docs/rules/error-message.md
  "unicorn/error-message": "error",

  // Require escape sequences to use uppercase values
  // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v62.0.0/docs/rules/escape-case.md
  "unicorn/escape-case": "error",

  // Add expiration conditions to TODO comments
  // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v62.0.0/docs/rules/expiring-todo-comments.md
  "unicorn/expiring-todo-comments": "error",

  // Enforce explicitly comparing the length property of a value
  // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v62.0.0/docs/rules/explicit-length-check.md
  "unicorn/explicit-length-check": "error",

  // Enforce importing index files with .
  // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v62.0.0/docs/rules/import-index.md
  // "unicorn/import-index": "error",

  // Enforce the use of new for all builtins, except String, Number and Boolean
  // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v62.0.0/docs/rules/new-for-builtins.md
  "unicorn/new-for-builtins": "error",

  // Enforce specifying rules to disable in eslint-disable comments
  // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v62.0.0/docs/rules/no-abusive-eslint-disable.md
  "unicorn/no-abusive-eslint-disable": "error",

  // Require Array.isArray() instead of instanceof Array
  // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v62.0.0/docs/rules/no-array-instanceof.md
  "unicorn/no-instanceof-builtins": "error",

  // Do not use leading/trailing space between console.log parameters
  // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v62.0.0/docs/rules/no-console-spaces.md
  "unicorn/no-console-spaces": "error",

  // Do not use a for loop that can be replaced with a for-of loop
  // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v62.0.0/docs/rules/no-for-loop.md
  "unicorn/no-for-loop": "error",

  // Enforce the use of Unicode escapes instead of hexadecimal escapes
  // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v62.0.0/docs/rules/no-hex-escape.md
  "unicorn/no-hex-escape": "error",

  // Disallow identifiers starting with new or class
  // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v62.0.0/docs/rules/no-keyword-prefix.md
  "unicorn/no-keyword-prefix": "off",

  // Disallow nested ternary expressions
  // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v62.0.0/docs/rules/no-nested-ternary.md
  "unicorn/no-nested-ternary": "error",
  // Improved by 'unicorn/no-nested-ternary'
  // https://eslint.org/docs/rules/no-nested-ternary
  "no-nested-ternary": "off",

  // Enforce the use of Buffer.from() and Buffer.alloc() instead of the deprecated new Buffer().
  // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v62.0.0/docs/rules/no-new-buffer.md
  "unicorn/no-new-buffer": "error",

  // Disallow process.exit()
  // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v62.0.0/docs/rules/no-process-exit.md
  "unicorn/no-process-exit": "error",

  // Uses safe-regex to disallow potentially catastrophic exponential-time
  // regular expressions.
  // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v62.0.0/docs/rules/no-unsafe-regex.md
  // "unicorn/no-unsafe-regex": "error",

  // Disallow number literals with zero fractions or dangling dots
  // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v62.0.0/docs/rules/no-zero-fractions.md
  "unicorn/no-zero-fractions": "error",

  // Enforce proper case for numeric literals
  // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v62.0.0/docs/rules/number-literal-case.md
  "unicorn/number-literal-case": "error",

  // Prefer .addEventListener() and .removeEventListener() over on-functions
  // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v62.0.0/docs/rules/prefer-add-event-listener.md
  "unicorn/prefer-add-event-listener": "error",

  // Prefer using .dataset on DOM elements over .setAttribute(…)
  // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v62.0.0/docs/rules/prefer-dataset.md
  "unicorn/prefer-dom-node-dataset": "error",

  // Prefer KeyboardEvent#key over KeyboardEvent#keyCode
  // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v62.0.0/docs/rules/prefer-event-key.md
  "unicorn/prefer-keyboard-event-key": "error",

  // Prefer .flatMap(…) over .map(…).flat()
  // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v62.0.0/docs/rules/prefer-flat-map.md
  // TODO: Enable this by default when targeting Node.js 12.
  "unicorn/prefer-flat-map": "off",

  // Don't prefer .includes() over .indexOf() when checking for existence or non-existence.
  // Internet Explorer does not support .includes()
  // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v62.0.0/docs/rules/prefer-includes.md
  "unicorn/prefer-includes": "off",

  // Prefer modern DOM APIs
  // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v62.0.0/docs/rules/prefer-modern-dom-apis.md
  "unicorn/prefer-modern-dom-apis": "error",

  // Prefer negative index over .length - index for {String,Array,
  // TypedArray}#slice() and Array#splice()
  // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v62.0.0/docs/rules/prefer-negative-index.md
  "unicorn/prefer-negative-index": "error",

  // Prefer Node#append() over Node#appendChild()
  // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v62.0.0/docs/rules/prefer-node-append.md
  "unicorn/prefer-dom-node-append": "error",

  // Prefer childNode.remove() over parentNode.removeChild(childNode)
  // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v62.0.0/docs/rules/prefer-node-remove.md
  "unicorn/prefer-dom-node-remove": "error",

  // Prefer Number static properties over global ones.
  // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v62.0.0/docs/rules/prefer-number-properties.md
  "unicorn/prefer-number-properties": "error",

  // Prefer .querySelector() over .getElementById(), .querySelectorAll()
  // over .getElementsByClassName() and .getElementsByTagName()
  // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v62.0.0/docs/rules/prefer-query-selector.md
  "unicorn/prefer-query-selector": "error",

  // Prefer Reflect.apply() over Function#apply()
  // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v62.0.0/docs/rules/prefer-reflect-apply.md
  "unicorn/prefer-reflect-apply": "error",

  // Prefer String#replaceAll() over regex searches with the global flag
  // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v62.0.0/docs/rules/prefer-replace-all.md
  // TODO: Enable this by default when it's shipping in a Node.js LTS version.
  "unicorn/prefer-replace-all": "off",

  // Prefer the spread operator over Array.from()
  // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v62.0.0/docs/rules/prefer-spread.md
  "unicorn/prefer-spread": "error",

  // Prefer String#startsWith() & String#endsWith() over more complex alternatives
  // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v62.0.0/docs/rules/prefer-starts-ends-with.md
  "unicorn/prefer-string-starts-ends-with": "error",

  // Prefer String#slice() over String#substr() and String#substring()
  // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v62.0.0/docs/rules/prefer-string-slice.md
  "unicorn/prefer-string-slice": "error",

  // Prefer .textContent over .innerText
  // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v62.0.0/docs/rules/prefer-text-content.md
  "unicorn/prefer-dom-node-text-content": "error",

  // Prefer String#trimStart() / String#trimEnd() over String#trimLeft() / String#trimRight()
  // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v62.0.0/docs/rules/prefer-trim-start-end.md
  "unicorn/prefer-string-trim-start-end": "error",

  // Enforce throwing TypeError in type checking conditions
  // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v62.0.0/docs/rules/prefer-type-error.md
  "unicorn/prefer-type-error": "error",

  // Require new when throwing an error
  // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v62.0.0/docs/rules/throw-new-error.md
  "unicorn/throw-new-error": "error",
};
