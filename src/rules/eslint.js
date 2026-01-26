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

/**
 * This file contains all rules for the `@eslint/js` plugin.
 *
 * The rules in this file were migrated from the following:
 *  - https://github.com/airbnb/javascript/blob/eslint-config-airbnb-v19.0.4/packages/eslint-config-airbnb-base/rules/best-practices.js
 *  - https://github.com/airbnb/javascript/blob/eslint-config-airbnb-v19.0.4/packages/eslint-config-airbnb-base/rules/errors.js
 *  - https://github.com/airbnb/javascript/blob/eslint-config-airbnb-v19.0.4/packages/eslint-config-airbnb-base/rules/es6.js
 *  - https://github.com/airbnb/javascript/blob/eslint-config-airbnb-v19.0.4/packages/eslint-config-airbnb-base/rules/variables.js
 *  - https://github.com/airbnb/javascript/blob/eslint-config-airbnb-v19.0.4/packages/eslint-config-airbnb-base/rules/style.js
 *
 * Additionally, some rule updates were migrated from https://github.com/americanexpress/eslint-config-amex/blob/main/index.js.
 *
 * For a complete list of rules for this plugin, see https://eslint.org/docs/latest/rules.
 */

export default {
  /**
   * below migrated from https://github.com/airbnb/javascript/blob/eslint-config-airbnb-v19.0.4/packages/eslint-config-airbnb-base/rules/best-practices.js
   */

  // enforces getter/setter pairs in objects
  // https://eslint.org/docs/rules/accessor-pairs
  "accessor-pairs": "off",

  // enforces return statements in callbacks of array's methods
  // https://eslint.org/docs/rules/array-callback-return
  "array-callback-return": ["error", { allowImplicit: true }],

  // treat var statements as if they were block scoped
  // https://eslint.org/docs/rules/block-scoped-var
  "block-scoped-var": "error",

  // specify the maximum cyclomatic complexity allowed in a program
  // https://eslint.org/docs/rules/complexity
  // migrated from https://github.com/americanexpress/eslint-config-amex/blob/main/index.js#L126
  complexity: ["error", 20],

  // enforce that class methods use "this"
  // https://eslint.org/docs/rules/class-methods-use-this
  "class-methods-use-this": [
    "error",
    {
      exceptMethods: [],
    },
  ],

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

  // Require grouped accessor pairs in object literals and classes
  // https://eslint.org/docs/rules/grouped-accessor-pairs
  "grouped-accessor-pairs": "error",

  // make sure for-in loops have an if statement
  // https://eslint.org/docs/rules/guard-for-in
  "guard-for-in": "error",

  // enforce a maximum number of classes per file
  // https://eslint.org/docs/rules/max-classes-per-file
  "max-classes-per-file": ["error", 1],

  // disallow the use of alert, confirm, and prompt
  // https://eslint.org/docs/rules/no-alert
  "no-alert": "warn",

  // disallow use of arguments.caller or arguments.callee
  // https://eslint.org/docs/rules/no-caller
  "no-caller": "error",

  // disallow lexical declarations in case/default clauses
  // https://eslint.org/docs/rules/no-case-declarations
  "no-case-declarations": "error",

  // Disallow returning value in constructor
  // https://eslint.org/docs/rules/no-constructor-return
  "no-constructor-return": "error",

  // disallow division operators explicitly at beginning of regular expression
  // https://eslint.org/docs/rules/no-div-regex
  "no-div-regex": "off",

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

  // disallow empty destructuring patterns
  // https://eslint.org/docs/rules/no-empty-pattern
  "no-empty-pattern": "error",

  // disallow comparisons to null without a type-checking operator
  // https://eslint.org/docs/rules/no-eq-null
  "no-eq-null": "off",

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

  // disallow fallthrough of case statements
  // https://eslint.org/docs/rules/no-fallthrough
  "no-fallthrough": "error",

  // disallow the use of leading or trailing decimal points in numeric literals
  // https://eslint.org/docs/rules/no-floating-decimal
  "no-floating-decimal": "error",

  // disallow reassignments of native objects or read-only globals
  // https://eslint.org/docs/rules/no-global-assign
  "no-global-assign": ["error", { exceptions: [] }],

  // disallow implicit type conversions
  // https://eslint.org/docs/rules/no-implicit-coercion
  "no-implicit-coercion": [
    "off",
    {
      boolean: false,
      number: true,
      string: true,
      allow: [],
    },
  ],

  // disallow var and named functions in global scope
  // https://eslint.org/docs/rules/no-implicit-globals
  "no-implicit-globals": "off",

  // disallow use of eval()-like methods
  // https://eslint.org/docs/rules/no-implied-eval
  "no-implied-eval": "error",

  // disallow this keywords outside of classes or class-like objects
  // https://eslint.org/docs/rules/no-invalid-this
  "no-invalid-this": "off",

  // disallow usage of __iterator__ property
  // https://eslint.org/docs/rules/no-iterator
  "no-iterator": "error",

  // disallow use of labels for anything other than loops and switches
  // https://eslint.org/docs/rules/no-labels
  "no-labels": ["error", { allowLoop: false, allowSwitch: false }],

  // disallow unnecessary nested blocks
  // https://eslint.org/docs/rules/no-lone-blocks
  "no-lone-blocks": "error",

  // disallow creation of functions within loops
  // https://eslint.org/docs/rules/no-loop-func
  "no-loop-func": "error",

  // disallow magic numbers
  // https://eslint.org/docs/rules/no-magic-numbers
  "no-magic-numbers": [
    "off",
    {
      ignore: [],
      ignoreArrayIndexes: true,
      enforceConst: true,
      detectObjects: false,
    },
  ],

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

  // Disallow \8 and \9 escape sequences in string literals
  // https://eslint.org/docs/rules/no-nonoctal-decimal-escape
  "no-nonoctal-decimal-escape": "error",

  // disallow use of (old style) octal literals
  // https://eslint.org/docs/rules/no-octal
  "no-octal": "error",

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

  // disallow usage of __proto__ property
  // https://eslint.org/docs/rules/no-proto
  "no-proto": "error",

  // disallow declaring the same variable more than once
  // https://eslint.org/docs/rules/no-redeclare
  "no-redeclare": "error",

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

  // disallow use of assignment in return statement
  // https://eslint.org/docs/rules/no-return-assign
  "no-return-assign": ["error", "always"],

  // disallow use of `javascript:` urls.
  // https://eslint.org/docs/rules/no-script-url
  "no-script-url": "error",

  // disallow self assignment
  // https://eslint.org/docs/rules/no-self-assign
  "no-self-assign": [
    "error",
    {
      props: true,
    },
  ],

  // disallow comparisons where both sides are exactly the same
  // https://eslint.org/docs/rules/no-self-compare
  "no-self-compare": "error",

  // disallow use of comma operator
  // https://eslint.org/docs/rules/no-sequences
  "no-sequences": "error",

  // restrict what can be thrown as an exception
  // https://eslint.org/docs/rules/no-throw-literal
  "no-throw-literal": "error",

  // disallow unmodified conditions of loops
  // https://eslint.org/docs/rules/no-unmodified-loop-condition
  "no-unmodified-loop-condition": "off",

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

  // disallow unused labels
  // https://eslint.org/docs/rules/no-unused-labels
  "no-unused-labels": "error",

  // disallow unnecessary .call() and .apply()
  // https://eslint.org/docs/rules/no-useless-call
  "no-useless-call": "off",

  // Disallow unnecessary catch clauses
  // https://eslint.org/docs/rules/no-useless-catch
  "no-useless-catch": "error",

  // disallow useless string concatenation
  // https://eslint.org/docs/rules/no-useless-concat
  "no-useless-concat": "error",

  // disallow unnecessary string escaping
  // https://eslint.org/docs/rules/no-useless-escape
  "no-useless-escape": "error",

  // disallow redundant return; keywords
  // https://eslint.org/docs/rules/no-useless-return
  "no-useless-return": "error",

  // disallow use of void operator
  // https://eslint.org/docs/rules/no-void
  "no-void": "error",

  // disallow usage of configurable warning terms in comments: e.g. todo
  // https://eslint.org/docs/rules/no-warning-comments
  "no-warning-comments": [
    "off",
    { terms: ["todo", "fixme", "xxx"], location: "start" },
  ],

  // disallow use of the with statement
  // https://eslint.org/docs/rules/no-with
  "no-with": "error",

  // require using Error objects as Promise rejection reasons
  // https://eslint.org/docs/rules/prefer-promise-reject-errors
  "prefer-promise-reject-errors": ["error", { allowEmptyReject: true }],

  // Suggest using named capture group in regular expression
  // https://eslint.org/docs/rules/prefer-named-capture-group
  "prefer-named-capture-group": "off",

  // Prefer Object.hasOwn() over Object.prototype.hasOwnProperty.call()
  // https://eslint.org/docs/rules/prefer-object-has-own
  // TODO: semver-major: enable thus rule, once eslint v8.5.0 is required
  "prefer-object-has-own": "off",

  // https://eslint.org/docs/rules/prefer-regex-literals
  "prefer-regex-literals": [
    "error",
    {
      disallowRedundantWrapping: true,
    },
  ],

  // require use of the second argument for parseInt()
  // https://eslint.org/docs/rules/radix
  radix: "error",

  // require `await` in `async function` (note: this is a horrible rule that should never be used)
  // https://eslint.org/docs/rules/require-await
  "require-await": "off",

  // Enforce the use of u flag on RegExp
  // https://eslint.org/docs/rules/require-unicode-regexp
  "require-unicode-regexp": "off",

  // requires to declare all vars on top of their containing scope
  // https://eslint.org/docs/rules/vars-on-top
  "vars-on-top": "error",

  // require or disallow Yoda conditions
  // https://eslint.org/docs/rules/yoda
  yoda: "error",

  /*
   * below migrated from https://github.com/airbnb/javascript/blob/eslint-config-airbnb-v19.0.4/packages/eslint-config-airbnb-base/rules/errors.js
   */

  // Enforce “for” loop update clause moving the counter in the right direction
  // https://eslint.org/docs/rules/for-direction
  "for-direction": "error",

  // Enforces that a return statement is present in property getters
  // https://eslint.org/docs/rules/getter-return
  "getter-return": ["error", { allowImplicit: true }],

  // disallow using an async function as a Promise executor
  // https://eslint.org/docs/rules/no-async-promise-executor
  "no-async-promise-executor": "error",

  // Disallow await inside of loops
  // https://eslint.org/docs/rules/no-await-in-loop
  "no-await-in-loop": "error",

  // Disallow comparisons to negative zero
  // https://eslint.org/docs/rules/no-compare-neg-zero
  "no-compare-neg-zero": "error",

  // disallow assignment in conditional expressions
  // https://eslint.org/docs/rules/no-cond-assign
  "no-cond-assign": ["error", "always"],

  // disallow use of console
  // https://eslint.org/docs/rules/no-console
  "no-console": "warn",

  // disallow use of constant expressions in conditions
  // https://eslint.org/docs/rules/no-constant-condition
  "no-constant-condition": "warn",

  // disallow control characters in regular expressions
  // https://eslint.org/docs/rules/no-control-regex
  "no-control-regex": "error",

  // disallow use of debugger
  // https://eslint.org/docs/rules/no-debugger
  "no-debugger": "error",

  // disallow duplicate arguments in functions
  // https://eslint.org/docs/rules/no-dupe-args
  "no-dupe-args": "error",

  // Disallow duplicate conditions in if-else-if chains
  // https://eslint.org/docs/rules/no-dupe-else-if
  "no-dupe-else-if": "error",

  // disallow duplicate keys when creating object literals
  // https://eslint.org/docs/rules/no-dupe-keys
  "no-dupe-keys": "error",

  // disallow a duplicate case label.
  // https://eslint.org/docs/rules/no-duplicate-case
  "no-duplicate-case": "error",

  // disallow empty statements
  // https://eslint.org/docs/rules/no-empty
  "no-empty": "error",

  // disallow the use of empty character classes in regular expressions
  // https://eslint.org/docs/rules/no-empty-character-class
  "no-empty-character-class": "error",

  // disallow assigning to the exception in a catch block
  // https://eslint.org/docs/rules/no-ex-assign
  "no-ex-assign": "error",

  // disallow double-negation boolean casts in a boolean context
  // https://eslint.org/docs/rules/no-extra-boolean-cast
  "no-extra-boolean-cast": "error",

  // disallow overwriting functions written as function declarations
  // https://eslint.org/docs/rules/no-func-assign
  "no-func-assign": "error",

  // disallow assigning to imported bindings
  // https://eslint.org/docs/rules/no-import-assign
  "no-import-assign": "error",

  // disallow function or variable declarations in nested blocks
  // https://eslint.org/docs/rules/no-inner-declarations
  "no-inner-declarations": "error",

  // disallow invalid regular expression strings in the RegExp constructor
  // https://eslint.org/docs/rules/no-invalid-regexp
  "no-invalid-regexp": "error",

  // disallow irregular whitespace outside of strings and comments
  // https://eslint.org/docs/rules/no-irregular-whitespace
  "no-irregular-whitespace": "error",

  // Disallow Number Literals That Lose Precision
  // https://eslint.org/docs/rules/no-loss-of-precision
  "no-loss-of-precision": "error",

  // Disallow characters which are made with multiple code points in character class syntax
  // https://eslint.org/docs/rules/no-misleading-character-class
  "no-misleading-character-class": "error",

  // disallow the use of object properties of the global object (Math and JSON) as functions
  // https://eslint.org/docs/rules/no-obj-calls
  "no-obj-calls": "error",

  // Disallow returning values from Promise executor functions
  // https://eslint.org/docs/rules/no-promise-executor-return
  "no-promise-executor-return": "error",

  // disallow use of Object.prototypes builtins directly
  // https://eslint.org/docs/rules/no-prototype-builtins
  "no-prototype-builtins": "error",

  // disallow multiple spaces in a regular expression literal
  // https://eslint.org/docs/rules/no-regex-spaces
  "no-regex-spaces": "error",

  // Disallow returning values from setters
  // https://eslint.org/docs/rules/no-setter-return
  "no-setter-return": "error",

  // disallow sparse arrays
  // https://eslint.org/docs/rules/no-sparse-arrays
  "no-sparse-arrays": "error",

  // Disallow template literal placeholder syntax in regular strings
  // https://eslint.org/docs/rules/no-template-curly-in-string
  "no-template-curly-in-string": "error",

  // Avoid code that looks like two expressions but is actually one
  // https://eslint.org/docs/rules/no-unexpected-multiline
  "no-unexpected-multiline": "error",

  // disallow unreachable statements after a return, throw, continue, or break statement
  // https://eslint.org/docs/rules/no-unreachable
  "no-unreachable": "error",

  // Disallow loops with a body that allows only one iteration
  // https://eslint.org/docs/rules/no-unreachable-loop
  "no-unreachable-loop": [
    "error",
    {
      ignore: [], // WhileStatement, DoWhileStatement, ForStatement, ForInStatement, ForOfStatement
    },
  ],

  // disallow return/throw/break/continue inside finally blocks
  // https://eslint.org/docs/rules/no-unsafe-finally
  "no-unsafe-finally": "error",

  // disallow negating the left operand of relational operators
  // https://eslint.org/docs/rules/no-unsafe-negation
  "no-unsafe-negation": "error",

  // disallow use of optional chaining in contexts where the undefined value is not allowed
  // https://eslint.org/docs/rules/no-unsafe-optional-chaining
  "no-unsafe-optional-chaining": [
    "error",
    { disallowArithmeticOperators: true },
  ],

  // Disallow Unused Private Class Members
  // https://eslint.org/docs/rules/no-unused-private-class-members
  // TODO: enable once eslint 7 is dropped (which is semver-major)
  "no-unused-private-class-members": "off",

  // Disallow useless backreferences in regular expressions
  // https://eslint.org/docs/rules/no-useless-backreference
  "no-useless-backreference": "error",

  // Disallow assignments that can lead to race conditions due to usage of await or yield
  // https://eslint.org/docs/rules/require-atomic-updates
  // note: not enabled because it is very buggy
  "require-atomic-updates": "off",

  // disallow comparisons with the value NaN
  // https://eslint.org/docs/rules/use-isnan
  "use-isnan": "error",

  // ensure that the results of typeof are compared against a valid string
  // https://eslint.org/docs/rules/valid-typeof
  "valid-typeof": ["error", { requireStringLiterals: true }],

  /*
   * below migrated from https://github.com/airbnb/javascript/blob/eslint-config-airbnb-v19.0.4/packages/eslint-config-airbnb-base/rules/es6.js
   */

  // enforces no braces where they can be omitted
  // https://eslint.org/docs/rules/arrow-body-style
  // TODO: enable requireReturnForObjectLiteral?
  "arrow-body-style": [
    "error",
    "as-needed",
    {
      requireReturnForObjectLiteral: false,
    },
  ],

  // verify super() callings in constructors
  // https://eslint.org/docs/rules/constructor-super
  "constructor-super": "error",

  // disallow modifying variables of class declarations
  // https://eslint.org/docs/rules/no-class-assign
  "no-class-assign": "error",

  // disallow modifying variables that are declared using const
  // https://eslint.org/docs/rules/no-const-assign
  "no-const-assign": "error",

  // disallow duplicate class members
  // https://eslint.org/docs/rules/no-dupe-class-members
  "no-dupe-class-members": "error",

  // disallow importing from the same path more than once
  // https://eslint.org/docs/rules/no-duplicate-imports
  "no-duplicate-imports": "off",

  // disallow symbol constructor
  // https://eslint.org/docs/latest/rules/no-new-native-nonconstructor
  "no-new-native-nonconstructor": "error",

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

  // disallow specific imports
  // https://eslint.org/docs/rules/no-restricted-imports
  "no-restricted-imports": [
    "error",
    {
      // migrated from https://github.com/americanexpress/eslint-config-amex/blob/main/index.js#L159
      paths: [momentRestrictedModule],
      patterns: [],
    },
  ],

  // disallow to use this/super before super() calling in constructors.
  // https://eslint.org/docs/rules/no-this-before-super
  "no-this-before-super": "error",

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

  // require let or const instead of var
  // https://eslint.org/docs/rules/no-var
  "no-var": "error",

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

  // disallow parseInt() in favor of binary, octal, and hexadecimal literals
  // https://eslint.org/docs/rules/prefer-numeric-literals
  "prefer-numeric-literals": "error",

  // use rest parameters instead of arguments
  // https://eslint.org/docs/rules/prefer-rest-params
  "prefer-rest-params": "error",

  // suggest using the spread syntax instead of .apply()
  // https://eslint.org/docs/rules/prefer-spread
  "prefer-spread": "error",

  // suggest using template literals instead of string concatenation
  // https://eslint.org/docs/rules/prefer-template
  "prefer-template": "error",

  // disallow generator functions that do not have yield
  // https://eslint.org/docs/rules/require-yield
  "require-yield": "error",

  // import sorting
  // https://eslint.org/docs/rules/sort-imports
  "sort-imports": [
    "off",
    {
      ignoreCase: false,
      ignoreDeclarationSort: false,
      ignoreMemberSort: false,
      memberSyntaxSortOrder: ["none", "all", "multiple", "single"],
    },
  ],

  // require a Symbol description
  // https://eslint.org/docs/rules/symbol-description
  "symbol-description": "error",

  /**
   * Below imported from https://github.com/airbnb/javascript/blob/eslint-config-airbnb-v19.0.4/packages/eslint-config-airbnb-base/rules/strict.js
   */

  // https://eslint.org/docs/rules/strict
  strict: ["error", "never"],

  /**
   * Below migrated from https://github.com/airbnb/javascript/blob/eslint-config-airbnb-v19.0.4/packages/eslint-config-airbnb-base/rules/variables.js
   */

  // enforce or disallow variable initializations at definition
  // https://eslint.org/docs/rules/init-declarations
  "init-declarations": "off",

  // disallow deletion of variables
  // https://eslint.org/docs/rules/no-delete-var
  "no-delete-var": "error",

  // disallow labels that share a name with a variable
  // https://eslint.org/docs/rules/no-label-var
  "no-label-var": "error",

  // disallow specific globals
  // https://eslint.org/docs/rules/no-restricted-globals
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

  // disallow declaration of variables already declared in the outer scope
  // https://eslint.org/docs/rules/no-shadow
  "no-shadow": "error",

  // disallow shadowing of names such as arguments
  // https://eslint.org/docs/rules/no-shadow-restricted-names
  "no-shadow-restricted-names": "error",

  // disallow use of undeclared variables unless mentioned in a /*global */ block
  // https://eslint.org/docs/rules/no-undef
  "no-undef": "error",

  // disallow use of undefined when initializing variables
  // https://eslint.org/docs/rules/no-undef-init
  "no-undef-init": "error",

  // disallow use of undefined variable
  // https://eslint.org/docs/rules/no-undefined
  // TODO: enable?
  "no-undefined": "off",

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

  /**
   * below migrated from https://github.com/airbnb/javascript/blob/eslint-config-airbnb-v19.0.4/packages/eslint-config-airbnb-base/rules/style.js
   */

  // require camel case names
  // https://eslint.org/docs/latest/rules/camelcase
  camelcase: ["error", { properties: "never", ignoreDestructuring: false }],

  // enforce or disallow capitalization of the first letter of a comment
  // https://eslint.org/docs/rules/capitalized-comments
  "capitalized-comments": [
    "off",
    "never",
    {
      line: {
        ignorePattern: ".*",
        ignoreInlineComments: true,
        ignoreConsecutiveComments: true,
      },
      block: {
        ignorePattern: ".*",
        ignoreInlineComments: true,
        ignoreConsecutiveComments: true,
      },
    },
  ],

  // enforces consistent naming when capturing the current execution context
  // https://eslint.org/docs/latest/rules/consistent-this
  "consistent-this": "off",

  // requires function names to match the name of the variable or property to which they are
  // assigned
  // https://eslint.org/docs/rules/func-name-matching
  "func-name-matching": [
    "off",
    "always",
    {
      includeCommonJSModuleExports: false,
      considerPropertyDescriptor: true,
    },
  ],

  // require function expressions to have a name
  // https://eslint.org/docs/rules/func-names
  "func-names": "warn",

  // enforces use of function declarations or expressions
  // https://eslint.org/docs/rules/func-style
  // TODO: enable
  "func-style": ["off", "expression"],

  // disallow specified identifiers
  // https://eslint.org/docs/rules/id-denylist
  "id-denylist": "off",

  // this option enforces minimum and maximum identifier lengths
  // (variable names, property names etc.)
  // https://eslint.org/docs/latest/rules/id-length
  "id-length": "off",

  // require identifiers to match the provided regular expression
  // https://eslint.org/docs/latest/rules/id-match
  "id-match": "off",

  // specify the maximum depth that blocks can be nested
  // https://eslint.org/docs/latest/rules/max-depth
  "max-depth": ["off", 4],

  // specify the max number of lines in a file
  // https://eslint.org/docs/rules/max-lines
  "max-lines": [
    "off",
    {
      max: 300,
      skipBlankLines: true,
      skipComments: true,
    },
  ],

  // enforce a maximum function length
  // https://eslint.org/docs/rules/max-lines-per-function
  "max-lines-per-function": [
    "off",
    {
      max: 50,
      skipBlankLines: true,
      skipComments: true,
      IIFEs: true,
    },
  ],

  // specify the maximum depth callbacks can be nested
  // https://eslint.org/docs/latest/rules/max-nested-callbacks
  "max-nested-callbacks": "off",

  // limits the number of parameters that can be used in the function declaration.
  // https://eslint.org/docs/latest/rules/max-params
  // migrated from https://github.com/americanexpress/eslint-config-amex/blob/main/index.js#L164
  "max-params": ["error", 3],

  // specify the maximum number of statement allowed in a function
  // https://eslint.org/docs/latest/rules/max-statements
  "max-statements": ["off", 10],

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

  // disallow use of the Array constructor
  // https://eslint.org/docs/latest/rules/no-array-constructor
  "no-array-constructor": "error",

  // disallow use of bitwise operators
  // https://eslint.org/docs/rules/no-bitwise
  "no-bitwise": "error",

  // disallow use of the continue statement
  // https://eslint.org/docs/rules/no-continue
  "no-continue": "error",

  // disallow comments inline after code
  // https://eslint.org/docs/latest/rules/no-inline-comments
  "no-inline-comments": "off",

  // disallow if as the only statement in an else block
  // https://eslint.org/docs/rules/no-lonely-if
  "no-lonely-if": "error",

  // disallow use of chained assignment expressions
  // https://eslint.org/docs/rules/no-multi-assign
  "no-multi-assign": ["error"],

  // disallow negated conditions
  // https://eslint.org/docs/rules/no-negated-condition
  "no-negated-condition": "off",

  // disallow nested ternary expressions
  // https://eslint.org/docs/latest/rules/no-nested-ternary
  "no-nested-ternary": "error",

  // disallow use of the Object constructor
  // https://eslint.org/docs/latest/rules/no-object-constructor
  "no-object-constructor": "error",

  // disallow use of unary operators, ++ and --
  // https://eslint.org/docs/rules/no-plusplus
  "no-plusplus": "error",

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

  // disallow the use of ternary operators
  // https://eslint.org/docs/latest/rules/no-ternary
  "no-ternary": "off",

  // disallow dangling underscores in identifiers
  // https://eslint.org/docs/rules/no-underscore-dangle
  "no-underscore-dangle": [
    "error",
    {
      // migrated from https://github.com/airbnb/javascript/blob/eslint-config-airbnb-v19.0.4/packages/eslint-config-airbnb/rules/react.js#L20
      allow: ["__REDUX_DEVTOOLS_EXTENSION_COMPOSE__"],
      allowAfterThis: false,
      allowAfterSuper: false,
      enforceInMethodNames: true,
    },
  ],

  // disallow the use of Boolean literals in conditional expressions
  // also, prefer `a || b` over `a ? a : b`
  // https://eslint.org/docs/rules/no-unneeded-ternary
  "no-unneeded-ternary": ["error", { defaultAssignment: false }],

  // allow just one var statement per function
  // https://eslint.org/docs/latest/rules/one-var
  "one-var": ["error", "never"],

  // require assignment operator shorthand where possible or prohibit it entirely
  // https://eslint.org/docs/rules/operator-assignment
  "operator-assignment": ["error", "always"],

  // Disallow the use of Math.pow in favor of the ** operator
  // https://eslint.org/docs/rules/prefer-exponentiation-operator
  "prefer-exponentiation-operator": "error",

  // Prefer use of an object spread over Object.assign
  // https://eslint.org/docs/rules/prefer-object-spread
  "prefer-object-spread": "error",

  // requires object keys to be sorted
  // https://eslint.org/docs/latest/rules/sort-keys
  "sort-keys": ["off", "asc", { caseSensitive: false, natural: true }],

  // sort variables within the same declaration block
  // https://eslint.org/docs/latest/rules/sort-vars
  "sort-vars": "off",

  // require or disallow the Unicode Byte Order Mark
  // https://eslint.org/docs/rules/unicode-bom
  "unicode-bom": ["error", "never"],
};
