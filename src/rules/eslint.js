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
import confusingBrowserGlobals from "confusing-browser-globals";
import { momentRestrictedModule } from "../utils/restricted-modules.js";

/*
 * This file contains all rules for the `@eslint/js` plugin.
 * For a complete list of rules, see https://eslint.org/docs/latest/rules.
 */

export default {
  // enforces return statements in callbacks of array's methods
  // https://eslint.org/docs/rules/array-callback-return
  "array-callback-return": ["error", { allowImplicit: true }],

  // enforces no braces where they can be omitted
  // https://eslint.org/docs/rules/arrow-body-style
  "arrow-body-style": [
    "error",
    "as-needed",
    {
      requireReturnForObjectLiteral: false,
    },
  ],

  // treat var statements as if they were block scoped
  // https://eslint.org/docs/rules/block-scoped-var
  "block-scoped-var": "error",

  // enforce that class methods use "this"
  // https://eslint.org/docs/rules/class-methods-use-this
  "class-methods-use-this": [
    "error",
    {
      exceptMethods: [],
    },
  ],

  // specify the maximum cyclomatic complexity allowed in a program
  // https://eslint.org/docs/rules/complexity
  complexity: ["error", 20],

  // require return statements to either always or never specify values
  // https://eslint.org/docs/rules/consistent-return
  "consistent-return": "error",

  // specify curly brace conventions for all control statements
  // https://eslint.org/docs/rules/curly
  curly: ["error", "multi-line"], // multiline

  // require default case in switch statements
  // https://eslint.org/docs/rules/default-case
  "default-case": ["error", { commentPattern: "^no default$" }],

  // Enforce default clauses in switch statements to be last
  // https://eslint.org/docs/rules/default-case-last
  "default-case-last": "error",

  // https://eslint.org/docs/rules/default-param-last
  "default-param-last": "error",

  // encourages use of dot notation whenever possible
  // https://eslint.org/docs/rules/dot-notation
  "dot-notation": ["error", { allowKeywords: true }],

  // require the use of === and !==
  // https://eslint.org/docs/rules/eqeqeq
  eqeqeq: ["error", "always", { null: "ignore" }],

  // require function expressions to have a name
  // https://eslint.org/docs/rules/func-names
  "func-names": "warn",

  // Require grouped accessor pairs in object literals and classes
  // https://eslint.org/docs/rules/grouped-accessor-pairs
  "grouped-accessor-pairs": "error",

  // make sure for-in loops have an if statement
  // https://eslint.org/docs/rules/guard-for-in
  "guard-for-in": "error",

  // enforce a maximum number of classes per file
  // https://eslint.org/docs/rules/max-classes-per-file
  "max-classes-per-file": ["error", 1],

  // limits the number of parameters that can be used in the function declaration.
  // https://eslint.org/docs/latest/rules/max-params
  "max-params": ["error", 3],

  // require a capital letter for constructors
  // https://eslint.org/docs/latest/rules/new-cap
  "new-cap": [
    "error",
    {
      newIsCap: true,
      newIsCapExceptions: [],
      capIsNew: false,
      capIsNewExceptions: ["Immutable.Map", "Immutable.Set", "Immutable.List"],
    },
  ],

  // disallow the use of alert, confirm, and prompt
  // https://eslint.org/docs/rules/no-alert
  "no-alert": "warn",

  // disallow use of the Array constructor
  // https://eslint.org/docs/latest/rules/no-array-constructor
  "no-array-constructor": "error",

  // Disallow await inside of loops
  // https://eslint.org/docs/rules/no-await-in-loop
  "no-await-in-loop": "error",

  // disallow use of bitwise operators
  // https://eslint.org/docs/rules/no-bitwise
  "no-bitwise": "error",

  // disallow use of arguments.caller or arguments.callee
  // https://eslint.org/docs/rules/no-caller
  "no-caller": "error",

  // disallow use of console
  "no-console": "warn",

  // disallow use of the continue statement
  // https://eslint.org/docs/rules/no-continue
  "no-continue": "error",

  // disallow else after a return in an if
  // https://eslint.org/docs/rules/no-else-return
  "no-else-return": ["error", { allowElseIf: false }],

  // disallow empty functions, except for standalone funcs/arrows
  // https://eslint.org/docs/rules/no-empty-function
  "no-empty-function": [
    "error",
    {
      allow: ["arrowFunctions", "functions", "methods"],
    },
  ],

  // disallow use of eval()
  // https://eslint.org/docs/rules/no-eval
  "no-eval": "error",

  // disallow adding to native types
  // https://eslint.org/docs/rules/no-extend-native
  "no-extend-native": "error",

  // disallow unnecessary function binding
  // https://eslint.org/docs/rules/no-extra-bind
  "no-extra-bind": "error",

  // disallow Unnecessary Labels
  // https://eslint.org/docs/rules/no-extra-label
  "no-extra-label": "error",

  // disallow use of eval()-like methods
  // https://eslint.org/docs/rules/no-implied-eval
  "no-implied-eval": "error",

  // disallow function or variable declarations in nested blocks
  // https://eslint.org/docs/rules/no-inner-declarations
  "no-inner-declarations": "error",

  // disallow usage of __iterator__ property
  // https://eslint.org/docs/rules/no-iterator
  "no-iterator": "error",

  // disallow labels that share a name with a variable
  // https://eslint.org/docs/rules/no-label-var
  "no-label-var": "error",

  // disallow use of labels for anything other than loops and switches
  // https://eslint.org/docs/rules/no-labels
  "no-labels": ["error", { allowLoop: false, allowSwitch: false }],

  // disallow unnecessary nested blocks
  // https://eslint.org/docs/rules/no-lone-blocks
  "no-lone-blocks": "error",

  // disallow if as the only statement in an else block
  // https://eslint.org/docs/rules/no-lonely-if
  "no-lonely-if": "error",

  // disallow creation of functions within loops
  // https://eslint.org/docs/rules/no-loop-func
  "no-loop-func": "error",

  // disallow use of chained assignment expressions
  // https://eslint.org/docs/rules/no-multi-assign
  "no-multi-assign": ["error"],

  // disallow use of multiline strings
  // https://eslint.org/docs/rules/no-multi-str
  "no-multi-str": "error",

  // disallow use of new operator when not part of the assignment or comparison
  // https://eslint.org/docs/rules/no-new
  "no-new": "error",

  // disallow use of new operator for Function object
  // https://eslint.org/docs/rules/no-new-func
  "no-new-func": "error",

  // disallows creating new instances of String, Number, and Boolean
  // https://eslint.org/docs/rules/no-new-wrappers
  "no-new-wrappers": "error",

  // disallow use of the Object constructor
  // https://eslint.org/docs/rules/no-object-constructor
  "no-object-constructor": "error",

  // disallow use of octal escape sequences in string literals, such as
  // var foo = 'Copyright \251';
  // https://eslint.org/docs/rules/no-octal-escape
  "no-octal-escape": "error",

  // disallow reassignment of function parameters
  // disallow parameter object manipulation except for specific exclusions
  // rule: https://eslint.org/docs/rules/no-param-reassign.html
  "no-param-reassign": [
    "error",
    {
      props: true,
      ignorePropertyModificationsFor: [
        "acc", // for reduce accumulators
        "accumulator", // for reduce accumulators
        "e", // for e.returnvalue
        "ctx", // for Koa routing
        "context", // for Koa routing
        "req", // for Express requests
        "request", // for Express requests
        "res", // for Express responses
        "response", // for Express responses
        "$scope", // for Angular 1 scopes
        "staticContext", // for ReactRouter context
      ],
    },
  ],

  // disallow use of unary operators, ++ and --
  // https://eslint.org/docs/rules/no-plusplus
  "no-plusplus": "error",

  // Disallow returning values from Promise executor functions
  // https://eslint.org/docs/rules/no-promise-executor-return
  "no-promise-executor-return": "error",

  // disallow usage of __proto__ property
  // https://eslint.org/docs/rules/no-proto
  "no-proto": "error",

  // Disallow specified names in exports
  // https://eslint.org/docs/rules/no-restricted-exports
  "no-restricted-exports": [
    "error",
    {
      restrictedNamedExports: [
        "default", // use `export default` to provide a default export
        "then", // this will cause tons of confusion when your module is dynamically `import()`ed, and will break in most node ESM versions
      ],
    },
  ],

  // disallow specific globals
  "no-restricted-globals": [
    "error",
    {
      name: "isFinite",
      message:
        "Use Number.isFinite instead https://github.com/airbnb/javascript#standard-library--isfinite",
    },
    {
      name: "isNaN",
      message:
        "Use Number.isNaN instead https://github.com/airbnb/javascript#standard-library--isnan",
    },
    ...confusingBrowserGlobals,
  ],

  // disallow specific imports
  // https://eslint.org/docs/rules/no-restricted-imports
  "no-restricted-imports": ["error", momentRestrictedModule],

  // disallow certain object properties
  // https://eslint.org/docs/rules/no-restricted-properties
  "no-restricted-properties": [
    "error",
    {
      object: "arguments",
      property: "callee",
      message: "arguments.callee is deprecated",
    },
    {
      object: "global",
      property: "isFinite",
      message: "Please use Number.isFinite instead",
    },
    {
      object: "self",
      property: "isFinite",
      message: "Please use Number.isFinite instead",
    },
    {
      object: "window",
      property: "isFinite",
      message: "Please use Number.isFinite instead",
    },
    {
      object: "global",
      property: "isNaN",
      message: "Please use Number.isNaN instead",
    },
    {
      object: "self",
      property: "isNaN",
      message: "Please use Number.isNaN instead",
    },
    {
      object: "window",
      property: "isNaN",
      message: "Please use Number.isNaN instead",
    },
    {
      property: "__defineGetter__",
      message: "Please use Object.defineProperty instead.",
    },
    {
      property: "__defineSetter__",
      message: "Please use Object.defineProperty instead.",
    },
    {
      object: "Math",
      property: "pow",
      message: "Use the exponentiation operator (**) instead.",
    },
  ],

  // disallow certain syntax forms
  // https://eslint.org/docs/rules/no-restricted-syntax
  "no-restricted-syntax": [
    "error",
    {
      selector: "ForInStatement",
      message:
        "for..in loops iterate over the entire prototype chain, which is virtually never what you want. Use Object.{keys,values,entries}, and iterate over the resulting array.",
    },
    {
      selector: "ForOfStatement",
      message:
        "iterators/generators require regenerator-runtime, which is too heavyweight for this guide to allow them. Separately, loops should be avoided in favor of array iterations.",
    },
    {
      selector: "LabeledStatement",
      message:
        "Labels are a form of GOTO; using them makes code confusing and hard to maintain and understand.",
    },
    {
      selector: "WithStatement",
      message:
        "`with` is disallowed in strict mode because it makes code impossible to predict and optimize.",
    },
  ],

  // disallow use of assignment in return statement
  // https://eslint.org/docs/rules/no-return-assign
  "no-return-assign": ["error", "always"],

  // disallow use of `javascript:` urls.
  // https://eslint.org/docs/rules/no-script-url
  "no-script-url": "error",

  // disallow comparisons where both sides are exactly the same
  // https://eslint.org/docs/rules/no-self-compare
  "no-self-compare": "error",

  // disallow use of comma operator
  // https://eslint.org/docs/rules/no-sequences
  "no-sequences": "error",

  // disallow declaration of variables already declared in the outer scope
  // https://eslint.org/docs/latest/rules/no-shadow
  "no-shadow": "error",

  // Disallow template literal placeholder syntax in regular strings
  // https://eslint.org/docs/rules/no-template-curly-in-string
  "no-template-curly-in-string": "error",

  // restrict what can be thrown as an exception
  // https://eslint.org/docs/rules/no-throw-literal
  "no-throw-literal": "error",

  // disallow use of undefined when initializing variables
  // https://eslint.org/docs/rules/no-undef-init
  "no-undef-init": "error",

  // disallow dangling underscores in identifiers
  // https://eslint.org/docs/rules/no-underscore-dangle
  "no-underscore-dangle": [
    "error",
    {
      allow: [],
      allowAfterThis: false,
      allowAfterSuper: false,
      enforceInMethodNames: true,
    },
  ],

  // disallow the use of Boolean literals in conditional expressions
  // also, prefer `a || b` over `a ? a : b`
  // https://eslint.org/docs/rules/no-unneeded-ternary
  "no-unneeded-ternary": ["error", { defaultAssignment: false }],

  // Disallow loops with a body that allows only one iteration
  // https://eslint.org/docs/rules/no-unreachable-loop
  "no-unreachable-loop": [
    "error",
    {
      ignore: [], // WhileStatement, DoWhileStatement, ForStatement, ForInStatement, ForOfStatement
    },
  ],

  // disallow use of optional chaining in contexts where the undefined value is not allowed
  // https://eslint.org/docs/rules/no-unsafe-optional-chaining
  "no-unsafe-optional-chaining": [
    "error",
    { disallowArithmeticOperators: true },
  ],

  // disallow usage of expressions in statement position
  // https://eslint.org/docs/rules/no-unused-expressions
  "no-unused-expressions": [
    "error",
    {
      allowShortCircuit: false,
      allowTernary: false,
      allowTaggedTemplates: false,
    },
  ],

  // disallow declaration of variables that are not used in the code
  // https://eslint.org/docs/rules/no-unused-vars
  "no-unused-vars": [
    "error",
    { vars: "all", args: "after-used", ignoreRestSiblings: true },
  ],

  // disallow use of variables before they are defined
  // https://eslint.org/docs/rules/no-use-before-define
  "no-use-before-define": [
    "error",
    { functions: true, classes: true, variables: true },
  ],

  // disallow useless computed property keys
  // https://eslint.org/docs/rules/no-useless-computed-key
  "no-useless-computed-key": "error",

  // disallow unnecessary constructor
  // https://eslint.org/docs/rules/no-useless-constructor
  "no-useless-constructor": "error",

  // disallow renaming import, export, and destructured assignments to the same name
  // https://eslint.org/docs/rules/no-useless-rename
  "no-useless-rename": [
    "error",
    {
      ignoreDestructuring: false,
      ignoreImport: false,
      ignoreExport: false,
    },
  ],

  // disallow redundant return; keywords
  // https://eslint.org/docs/rules/no-useless-return
  "no-useless-return": "error",

  // require let or const instead of var
  "no-var": "error",

  // disallow use of void operator
  // https://eslint.org/docs/rules/no-void
  "no-void": "error",

  // require method and property shorthand syntax for object literals
  // https://eslint.org/docs/rules/object-shorthand
  "object-shorthand": [
    "error",
    "always",
    {
      ignoreConstructors: false,
      avoidQuotes: true,
    },
  ],

  // allow just one var statement per function
  // https://eslint.org/docs/rules/one-var
  "one-var": ["error", "never"],

  // require assignment operator shorthand where possible or prohibit it entirely
  // https://eslint.org/docs/rules/operator-assignment
  "operator-assignment": ["error", "always"],

  // suggest using arrow functions as callbacks
  // https://eslint.org/docs/rules/prefer-arrow-callback
  "prefer-arrow-callback": [
    "error",
    {
      allowNamedFunctions: false,
      allowUnboundThis: true,
    },
  ],

  // suggest using of const declaration for variables that are never modified after declared
  // https://eslint.org/docs/rules/prefer-const
  "prefer-const": [
    "error",
    {
      destructuring: "any",
      ignoreReadBeforeAssign: true,
    },
  ],

  // Prefer destructuring from arrays and objects
  // https://eslint.org/docs/rules/prefer-destructuring
  "prefer-destructuring": [
    "error",
    {
      VariableDeclarator: {
        array: false,
        object: true,
      },
      AssignmentExpression: {
        array: true,
        object: false,
      },
    },
    {
      enforceForRenamedProperties: false,
    },
  ],

  // Disallow the use of Math.pow in favor of the ** operator
  // https://eslint.org/docs/rules/prefer-exponentiation-operator
  "prefer-exponentiation-operator": "error",

  // disallow parseInt() in favor of binary, octal, and hexadecimal literals
  // https://eslint.org/docs/rules/prefer-numeric-literals
  "prefer-numeric-literals": "error",

  // Prefer use of an object spread over Object.assign
  // https://eslint.org/docs/rules/prefer-object-spread
  "prefer-object-spread": "error",

  // require using Error objects as Promise rejection reasons
  // https://eslint.org/docs/rules/prefer-promise-reject-errors
  "prefer-promise-reject-errors": ["error", { allowEmptyReject: true }],

  // https://eslint.org/docs/rules/prefer-regex-literals
  "prefer-regex-literals": [
    "error",
    {
      disallowRedundantWrapping: true,
    },
  ],

  // use rest parameters instead of arguments
  // https://eslint.org/docs/rules/prefer-rest-params
  "prefer-rest-params": "error",

  // suggest using the spread syntax instead of .apply()
  // https://eslint.org/docs/rules/prefer-spread
  "prefer-spread": "error",

  // suggest using template literals instead of string concatenation
  // https://eslint.org/docs/rules/prefer-template
  "prefer-template": "error",

  // require use of the second argument for parseInt()
  // https://eslint.org/docs/rules/radix
  radix: "error",

  // build process inserts `'use strict';`
  // https://eslint.org/docs/rules/strict
  strict: ["error", "never"],

  // require a Symbol description
  // https://eslint.org/docs/rules/symbol-description
  "symbol-description": "error",

  // require or disallow the Unicode Byte Order Mark
  // https://eslint.org/docs/rules/unicode-bom
  "unicode-bom": ["error", "never"],

  // requires to declare all vars on top of their containing scope
  // https://eslint.org/docs/rules/vars-on-top
  "vars-on-top": "error",

  // require or disallow Yoda conditions
  // https://eslint.org/docs/rules/yoda
  yoda: "error",
};
