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
 * This file contains all rules for the `eslint-plugin-react` plugin.
 *
 * These rules were migrated from https://github.com/airbnb/javascript/blob/eslint-config-airbnb-v19.0.4/packages/eslint-config-airbnb/rules/react.js.
 *
 * Additionally, some rule updates were migrated from https://github.com/americanexpress/eslint-config-amex/blob/16.x/index.js.
 *
 * For a complete list of rules, see https://github.com/jsx-eslint/eslint-plugin-react/tree/v7.37.5/docs/rules.
 */

export default {
  // Specify whether double or single quotes should be used in JSX attributes
  // https://eslint.style/rules/jsx-quotes
  "@stylistic/jsx-quotes": ["error", "prefer-double"],

  // https://eslint.org/docs/latest/rules/class-methods-use-this
  "class-methods-use-this": [
    "error",
    {
      exceptMethods: [
        "render",
        "getInitialState",
        "getDefaultProps",
        "getChildContext",
        "componentWillMount",
        "UNSAFE_componentWillMount",
        "componentDidMount",
        "componentWillReceiveProps",
        "UNSAFE_componentWillReceiveProps",
        "shouldComponentUpdate",
        "componentWillUpdate",
        "UNSAFE_componentWillUpdate",
        "componentDidUpdate",
        "componentWillUnmount",
        "componentDidCatch",
        "getSnapshotBeforeUpdate",
      ],
    },
  ],

  // Prevent missing displayName in a React component definition
  // https://github.com/jsx-eslint/eslint-plugin-react/blob/v7.37.5/docs/rules/display-name.md
  "react/display-name": ["off", { ignoreTranspilerName: false }],

  // Forbid certain propTypes (any, array, object)
  // https://github.com/jsx-eslint/eslint-plugin-react/blob/v7.37.5/docs/rules/forbid-prop-types.md
  "react/forbid-prop-types": [
    "error",
    {
      forbid: ["any", "array", "object"],
      checkContextTypes: true,
      checkChildContextTypes: true,
    },
  ],

  // Forbid certain props on DOM Nodes
  // https://github.com/jsx-eslint/eslint-plugin-react/blob/v7.37.5/docs/rules/forbid-dom-props.md
  "react/forbid-dom-props": ["off", { forbid: [] }],

  // Enforce boolean attributes notation in JSX
  // https://github.com/jsx-eslint/eslint-plugin-react/blob/v7.37.5/docs/rules/jsx-boolean-value.md
  // migrated from https://github.com/americanexpress/eslint-config-amex/blob/16.x/index.js#L97
  "react/jsx-boolean-value": ["error", "always"],

  // Validate closing bracket location in JSX
  // https://github.com/jsx-eslint/eslint-plugin-react/blob/v7.37.5/docs/rules/jsx-closing-bracket-location.md
  "react/jsx-closing-bracket-location": ["error", "line-aligned"],

  // Validate closing tag location in JSX
  // https://github.com/jsx-eslint/eslint-plugin-react/blob/v7.37.5/docs/rules/jsx-closing-tag-location.md
  "react/jsx-closing-tag-location": "error",

  // Enforce or disallow spaces inside of curly braces in JSX attributes
  // https://github.com/jsx-eslint/eslint-plugin-react/blob/v7.37.5/docs/rules/jsx-curly-spacing.md
  "react/jsx-curly-spacing": ["error", "never", { allowMultiline: true }],

  // Enforce event handler naming conventions in JSX
  // https://github.com/jsx-eslint/eslint-plugin-react/blob/v7.37.5/docs/rules/jsx-handler-names.md
  "react/jsx-handler-names": [
    "off",
    {
      eventHandlerPrefix: "handle",
      eventHandlerPropPrefix: "on",
    },
  ],

  // Validate props indentation in JSX
  // https://github.com/jsx-eslint/eslint-plugin-react/blob/v7.37.5/docs/rules/jsx-indent-props.md
  "react/jsx-indent-props": ["error", 2],

  // Validate JSX has key prop when in array or iterator
  // https://github.com/jsx-eslint/eslint-plugin-react/blob/v7.37.5/docs/rules/jsx-key.md
  // Turned off because it has too many false positives
  "react/jsx-key": "off",

  // Limit maximum of props on a single line in JSX
  // https://github.com/jsx-eslint/eslint-plugin-react/blob/v7.37.5/docs/rules/jsx-max-props-per-line.md
  "react/jsx-max-props-per-line": ["error", { maximum: 1, when: "multiline" }],

  // Prevent usage of .bind() in JSX props
  // https://github.com/jsx-eslint/eslint-plugin-react/blob/v7.37.5/docs/rules/jsx-no-bind.md
  "react/jsx-no-bind": [
    "error",
    {
      ignoreRefs: true,
      allowArrowFunctions: true,
      allowFunctions: false,
      allowBind: false,
      ignoreDOMComponents: true,
    },
  ],

  // Prevent duplicate props in JSX
  // https://github.com/jsx-eslint/eslint-plugin-react/blob/v7.37.5/docs/rules/jsx-no-duplicate-props.md
  "react/jsx-no-duplicate-props": ["error", { ignoreCase: true }],

  // Prevent usage of unwrapped JSX strings
  // https://github.com/jsx-eslint/eslint-plugin-react/blob/v7.37.5/docs/rules/jsx-no-literals.md
  "react/jsx-no-literals": ["off", { noStrings: true }],

  // Disallow undeclared variables in JSX
  // https://github.com/jsx-eslint/eslint-plugin-react/blob/v7.37.5/docs/rules/jsx-no-undef.md
  "react/jsx-no-undef": "error",

  // Enforce PascalCase for user-defined JSX components
  // https://github.com/jsx-eslint/eslint-plugin-react/blob/v7.37.5/docs/rules/jsx-pascal-case.md
  "react/jsx-pascal-case": [
    "error",
    {
      allowAllCaps: true,
      ignore: [],
    },
  ],

  // Enforce propTypes declarations alphabetical sorting
  // https://github.com/jsx-eslint/eslint-plugin-react/blob/v7.37.5/docs/rules/sort-prop-types.md
  "react/sort-prop-types": [
    "off",
    {
      ignoreCase: true,
      callbacksLast: false,
      requiredFirst: false,
      sortShapeProp: true,
    },
  ],

  // Enforce props alphabetical sorting
  // https://github.com/jsx-eslint/eslint-plugin-react/blob/v7.37.5/docs/rules/jsx-sort-props.md
  "react/jsx-sort-props": [
    "off",
    {
      ignoreCase: true,
      callbacksLast: false,
      shorthandFirst: false,
      shorthandLast: false,
      noSortAlphabetically: false,
      reservedFirst: true,
    },
  ],

  // Enforce defaultProps declarations alphabetical sorting
  // https://github.com/jsx-eslint/eslint-plugin-react/blob/v7.37.5/docs/rules/sort-default-props.md
  "react/sort-default-props": [
    "off",
    {
      ignoreCase: true,
    },
  ],

  // Prevent React to be incorrectly marked as unused
  // https://github.com/jsx-eslint/eslint-plugin-react/blob/v7.37.5/docs/rules/jsx-uses-react.md
  "react/jsx-uses-react": ["error"],

  // Prevent variables used in JSX to be incorrectly marked as unused
  // https://github.com/jsx-eslint/eslint-plugin-react/blob/v7.37.5/docs/rules/jsx-uses-vars.md
  "react/jsx-uses-vars": "error",

  // Prevent usage of dangerous JSX properties
  // https://github.com/jsx-eslint/eslint-plugin-react/blob/v7.37.5/docs/rules/no-danger.md
  "react/no-danger": "warn",

  // Prevent usage of deprecated methods
  // https://github.com/jsx-eslint/eslint-plugin-react/blob/v7.37.5/docs/rules/no-deprecated.md
  "react/no-deprecated": ["error"],

  // Prevent usage of setState in componentDidMount
  // https://github.com/jsx-eslint/eslint-plugin-react/blob/v7.37.5/docs/rules/no-did-mount-set-state.md
  // this is necessary for server-rendering
  "react/no-did-mount-set-state": "off",

  // Prevent usage of setState in componentDidUpdate
  // https://github.com/jsx-eslint/eslint-plugin-react/blob/v7.37.5/docs/rules/no-did-update-set-state.md
  "react/no-did-update-set-state": "error",

  // Prevent usage of setState in componentWillUpdate
  // https://github.com/jsx-eslint/eslint-plugin-react/blob/v7.37.5/docs/rules/no-will-update-set-state.md
  "react/no-will-update-set-state": "error",

  // Prevent direct mutation of this.state
  // https://github.com/jsx-eslint/eslint-plugin-react/blob/v7.37.5/docs/rules/no-direct-mutation-state.md
  "react/no-direct-mutation-state": "off",

  // Prevent usage of isMounted
  // https://github.com/jsx-eslint/eslint-plugin-react/blob/v7.37.5/docs/rules/no-is-mounted.md
  "react/no-is-mounted": "error",

  // Prevent multiple component definition per file
  // https://github.com/jsx-eslint/eslint-plugin-react/blob/v7.37.5/docs/rules/no-multi-comp.md
  "react/no-multi-comp": "off",

  // Prevent usage of setState
  // https://github.com/jsx-eslint/eslint-plugin-react/blob/v7.37.5/docs/rules/no-set-state.md
  "react/no-set-state": "off",

  // Prevent using string references
  // https://github.com/jsx-eslint/eslint-plugin-react/blob/v7.37.5/docs/rules/no-string-refs.md
  "react/no-string-refs": "error",

  // Prevent usage of unknown DOM property
  // https://github.com/jsx-eslint/eslint-plugin-react/blob/v7.37.5/docs/rules/no-unknown-property.md
  "react/no-unknown-property": "error",

  // Require ES6 class declarations over React.createClass
  // https://github.com/jsx-eslint/eslint-plugin-react/blob/v7.37.5/docs/rules/prefer-es6-class.md
  "react/prefer-es6-class": ["error", "always"],

  // Require stateless functions when not using lifecycle methods, setState or ref
  // https://github.com/jsx-eslint/eslint-plugin-react/blob/v7.37.5/docs/rules/prefer-stateless-function.md
  "react/prefer-stateless-function": ["error", { ignorePureComponents: true }],

  // Prevent missing props validation in a React component definition
  // https://github.com/jsx-eslint/eslint-plugin-react/blob/v7.37.5/docs/rules/prop-types.md
  "react/prop-types": [
    "error",
    {
      ignore: [],
      customValidators: [],
      skipUndeclared: false,
    },
  ],

  // Prevent missing React when using JSX
  // https://github.com/jsx-eslint/eslint-plugin-react/blob/v7.37.5/docs/rules/react-in-jsx-scope.md
  "react/react-in-jsx-scope": "error",

  // Require render() methods to return something
  // https://github.com/jsx-eslint/eslint-plugin-react/blob/v7.37.5/docs/rules/require-render-return.md
  "react/require-render-return": "error",

  // Prevent extra closing tags for components without children
  // https://github.com/jsx-eslint/eslint-plugin-react/blob/v7.37.5/docs/rules/self-closing-comp.md
  "react/self-closing-comp": "error",

  // Enforce component methods order
  // https://github.com/jsx-eslint/eslint-plugin-react/blob/v7.37.5/docs/rules/sort-comp.md
  "react/sort-comp": [
    "error",
    {
      order: [
        "static-variables",
        "static-methods",
        "instance-variables",
        "lifecycle",
        "/^handle.+$/",
        "/^on.+$/",
        "getters",
        "setters",
        "/^(get|set)(?!(InitialState$|DefaultProps$|ChildContext$)).+$/",
        "instance-methods",
        "everything-else",
        "rendering",
      ],
      groups: {
        lifecycle: [
          "displayName",
          "propTypes",
          "contextTypes",
          "childContextTypes",
          "mixins",
          "statics",
          "defaultProps",
          "constructor",
          "getDefaultProps",
          "getInitialState",
          "state",
          "getChildContext",
          "getDerivedStateFromProps",
          "componentWillMount",
          "UNSAFE_componentWillMount",
          "componentDidMount",
          "componentWillReceiveProps",
          "UNSAFE_componentWillReceiveProps",
          "shouldComponentUpdate",
          "componentWillUpdate",
          "UNSAFE_componentWillUpdate",
          "getSnapshotBeforeUpdate",
          "componentDidUpdate",
          "componentDidCatch",
          "componentWillUnmount",
        ],
        rendering: ["/^render.+$/", "render"],
      },
    },
  ],

  // Prevent missing parentheses around multilines JSX
  // https://github.com/jsx-eslint/eslint-plugin-react/blob/v7.37.5/docs/rules/jsx-wrap-multilines.md
  "react/jsx-wrap-multilines": [
    "error",
    {
      declaration: "parens-new-line",
      assignment: "parens-new-line",
      return: "parens-new-line",
      arrow: "parens-new-line",
      condition: "parens-new-line",
      logical: "parens-new-line",
      prop: "parens-new-line",
    },
  ],

  // Require that the first prop in a JSX element be on a new line when the element is multiline
  // https://github.com/jsx-eslint/eslint-plugin-react/blob/v7.37.5/docs/rules/jsx-first-prop-new-line.md
  "react/jsx-first-prop-new-line": ["error", "multiline-multiprop"],

  // Enforce spacing around jsx equals signs
  // https://github.com/jsx-eslint/eslint-plugin-react/blob/v7.37.5/docs/rules/jsx-equals-spacing.md
  "react/jsx-equals-spacing": ["error", "never"],

  // Enforce JSX indentation
  // https://github.com/jsx-eslint/eslint-plugin-react/blob/v7.37.5/docs/rules/jsx-indent.md
  "react/jsx-indent": ["error", 2],

  // Disallow target="_blank" on links
  // https://github.com/jsx-eslint/eslint-plugin-react/blob/v7.37.5/docs/rules/jsx-no-target-blank.md
  "react/jsx-no-target-blank": ["error", { enforceDynamicLinks: "always" }],

  // only .jsx files may have JSX
  // https://github.com/jsx-eslint/eslint-plugin-react/blob/v7.37.5/docs/rules/jsx-filename-extension.md
  "react/jsx-filename-extension": ["error", { extensions: [".jsx"] }],

  // prevent accidental JS comments from being injected into JSX as text
  // https://github.com/jsx-eslint/eslint-plugin-react/blob/v7.37.5/docs/rules/jsx-no-comment-textnodes.md
  "react/jsx-no-comment-textnodes": "error",

  // disallow using React.render/ReactDOM.render's return value
  // https://github.com/jsx-eslint/eslint-plugin-react/blob/v7.37.5/docs/rules/no-render-return-value.md
  "react/no-render-return-value": "error",

  // require a shouldComponentUpdate method, or PureRenderMixin
  // https://github.com/jsx-eslint/eslint-plugin-react/blob/v7.37.5/docs/rules/require-optimization.md
  "react/require-optimization": ["off", { allowDecorators: [] }],

  // warn against using findDOMNode()
  // https://github.com/jsx-eslint/eslint-plugin-react/blob/v7.37.5/docs/rules/no-find-dom-node.md
  "react/no-find-dom-node": "error",

  // Forbid certain props on Components
  // https://github.com/jsx-eslint/eslint-plugin-react/blob/v7.37.5/docs/rules/forbid-component-props.md
  "react/forbid-component-props": ["off", { forbid: [] }],

  // Forbid certain elements
  // https://github.com/jsx-eslint/eslint-plugin-react/blob/v7.37.5/docs/rules/forbid-elements.md
  "react/forbid-elements": ["off", { forbid: [] }],

  // Prevent problem with children and props.dangerouslySetInnerHTML
  // https://github.com/jsx-eslint/eslint-plugin-react/blob/v7.37.5/docs/rules/no-danger-with-children.md
  "react/no-danger-with-children": "error",

  // Prevent unused propType definitions
  // https://github.com/jsx-eslint/eslint-plugin-react/blob/v7.37.5/docs/rules/no-unused-prop-types.md
  "react/no-unused-prop-types": [
    "error",
    {
      customValidators: [],
      skipShapeProps: true,
    },
  ],

  // Require style prop value be an object or var
  // https://github.com/jsx-eslint/eslint-plugin-react/blob/v7.37.5/docs/rules/style-prop-object.md
  "react/style-prop-object": "error",

  // Prevent invalid characters from appearing in markup
  // https://github.com/jsx-eslint/eslint-plugin-react/blob/v7.37.5/docs/rules/no-unescaped-entities.md
  "react/no-unescaped-entities": "error",

  // Prevent passing of children as props
  // https://github.com/jsx-eslint/eslint-plugin-react/blob/v7.37.5/docs/rules/no-children-prop.md
  "react/no-children-prop": "error",

  // Validate whitespace in and around the JSX opening and closing brackets
  // https://github.com/jsx-eslint/eslint-plugin-react/blob/v7.37.5/docs/rules/jsx-tag-spacing.md
  "react/jsx-tag-spacing": [
    "error",
    {
      closingSlash: "never",
      beforeSelfClosing: "always",
      afterOpening: "never",
      beforeClosing: "never",
    },
  ],

  // Prevent usage of Array index in keys
  // https://github.com/jsx-eslint/eslint-plugin-react/blob/v7.37.5/docs/rules/no-array-index-key.md
  "react/no-array-index-key": "error",

  // Enforce a defaultProps definition for every prop that is not a required prop
  // https://github.com/jsx-eslint/eslint-plugin-react/blob/v7.37.5/docs/rules/require-default-props.md
  // migrated from https://github.com/americanexpress/eslint-config-amex/blob/16.x/index.js#L240
  "react/require-default-props": [
    "off",
    {
      forbidDefaultForRequired: true,
    },
  ],

  // Forbids using non-exported propTypes
  // this is intentionally set to "warn". it would be "error",
  // but it's only critical if you're stripping propTypes in production.
  // https://github.com/jsx-eslint/eslint-plugin-react/blob/v7.37.5/docs/rules/forbid-foreign-prop-types.md
  "react/forbid-foreign-prop-types": ["warn", { allowInPropTypes: true }],

  // Prevent void DOM elements from receiving children
  // https://github.com/jsx-eslint/eslint-plugin-react/blob/v7.37.5/docs/rules/void-dom-elements-no-children.md
  "react/void-dom-elements-no-children": "error",

  // Enforce all defaultProps have a corresponding non-required PropType
  // https://github.com/jsx-eslint/eslint-plugin-react/blob/v7.37.5/docs/rules/default-props-match-prop-types.md
  "react/default-props-match-prop-types": [
    "error",
    { allowRequiredDefaults: false },
  ],

  // Prevent usage of shouldComponentUpdate when extending React.PureComponent
  // https://github.com/jsx-eslint/eslint-plugin-react/blob/v7.37.5/docs/rules/no-redundant-should-component-update.md
  "react/no-redundant-should-component-update": "error",

  // Prevent unused state values
  // https://github.com/jsx-eslint/eslint-plugin-react/blob/v7.37.5/docs/rules/no-unused-state.md
  "react/no-unused-state": "error",

  // Enforces consistent naming for boolean props
  // https://github.com/jsx-eslint/eslint-plugin-react/blob/v7.37.5/docs/rules/boolean-prop-naming.md
  // migrated from https://github.com/americanexpress/eslint-config-amex/blob/16.x/index.js#L102
  "react/boolean-prop-naming": [
    "error",
    {
      propTypeNames: ["bool", "mutuallyExclusiveTrueProps"],
      rule: "^((is|has|can|show|hide|should)[A-Z]([A-Za-z0-9]?)+|(show|hide))",
    },
  ],

  // Prevents common casing typos
  // https://github.com/jsx-eslint/eslint-plugin-react/blob/v7.37.5/docs/rules/no-typos.md
  "react/no-typos": "error",

  // Enforce curly braces or disallow unnecessary curly braces in JSX props and/or children
  // https://github.com/jsx-eslint/eslint-plugin-react/blob/v7.37.5/docs/rules/jsx-curly-brace-presence.md
  "react/jsx-curly-brace-presence": [
    "error",
    { props: "never", children: "never" },
  ],

  // One JSX Element Per Line
  // https://github.com/jsx-eslint/eslint-plugin-react/blob/v7.37.5/docs/rules/jsx-one-expression-per-line.md
  // migrated from https://github.com/americanexpress/eslint-config-amex/blob/16.x/index.js#L236
  "react/jsx-one-expression-per-line": ["off", { allow: "single-child" }],

  // Enforce consistent usage of destructuring assignment of props, state, and context
  // https://github.com/jsx-eslint/eslint-plugin-react/blob/v7.37.5/docs/rules/destructuring-assignment.md
  "react/destructuring-assignment": ["error", "always"],

  // Prevent using this.state within a this.setState
  // https://github.com/jsx-eslint/eslint-plugin-react/blob/v7.37.5/docs/rules/no-access-state-in-setstate.md
  "react/no-access-state-in-setstate": "error",

  // Prevent usage of button elements without an explicit type attribute
  // https://github.com/jsx-eslint/eslint-plugin-react/blob/v7.37.5/docs/rules/button-has-type.md
  "react/button-has-type": [
    "error",
    {
      button: true,
      submit: true,
      reset: false,
    },
  ],

  // Ensures inline tags are not rendered without spaces between them
  // https://github.com/jsx-eslint/eslint-plugin-react/blob/v7.37.5/docs/rules/jsx-child-element-spacing.md
  "react/jsx-child-element-spacing": "off",

  // Prevent this from being used in stateless functional components
  // https://github.com/jsx-eslint/eslint-plugin-react/blob/v7.37.5/docs/rules/no-this-in-sfc.md
  "react/no-this-in-sfc": "error",

  // Validate JSX maximum depth
  // https://github.com/jsx-eslint/eslint-plugin-react/blob/v7.37.5/docs/rules/jsx-max-depth.md
  "react/jsx-max-depth": "off",

  // Disallow multiple spaces between inline JSX props
  // https://github.com/jsx-eslint/eslint-plugin-react/blob/v7.37.5/docs/rules/jsx-props-no-multi-spaces.md
  "react/jsx-props-no-multi-spaces": "error",

  // Prevent usage of UNSAFE_ methods
  // https://github.com/jsx-eslint/eslint-plugin-react/blob/v7.37.5/docs/rules/no-unsafe.md
  "react/no-unsafe": "off",

  // Enforce shorthand or standard form for React fragments
  // https://github.com/jsx-eslint/eslint-plugin-react/blob/v7.37.5/docs/rules/jsx-fragments.md
  // migrated from https://github.com/americanexpress/eslint-config-amex/blob/16.x/index.js#L229
  "react/jsx-fragments": ["off", "syntax"],

  // Enforce linebreaks in curly braces in JSX attributes and expressions.
  // https://github.com/jsx-eslint/eslint-plugin-react/blob/v7.37.5/docs/rules/jsx-curly-newline.md
  "react/jsx-curly-newline": [
    "error",
    {
      multiline: "consistent",
      singleline: "consistent",
    },
  ],

  // Enforce state initialization style
  // https://github.com/jsx-eslint/eslint-plugin-react/blob/v7.37.5/docs/rules/state-in-constructor.md
  // TODO: set to "never" once babel-preset-airbnb supports public class fields
  "react/state-in-constructor": ["error", "always"],

  // Enforces where React component static properties should be positioned
  // https://github.com/jsx-eslint/eslint-plugin-react/blob/v7.37.5/docs/rules/static-property-placement.md
  // TODO: set to "static public field" once babel-preset-airbnb supports public class fields
  "react/static-property-placement": ["error", "property assignment"],

  // Disallow JSX props spreading
  // https://github.com/jsx-eslint/eslint-plugin-react/blob/v7.37.5/docs/rules/jsx-props-no-spreading.md
  "react/jsx-props-no-spreading": [
    "error",
    {
      html: "enforce",
      custom: "enforce",
      explicitSpread: "ignore",
      exceptions: [],
    },
  ],

  // Enforce that props are read-only
  // https://github.com/jsx-eslint/eslint-plugin-react/blob/v7.37.5/docs/rules/prefer-read-only-props.md
  "react/prefer-read-only-props": "off",

  // Prevent usage of `javascript:` URLs
  // https://github.com/jsx-eslint/eslint-plugin-react/blob/v7.37.5/docs/rules/jsx-no-script-url.md
  "react/jsx-no-script-url": [
    "error",
    [
      {
        name: "Link",
        props: ["to"],
      },
    ],
  ],

  // Disallow unnecessary fragments
  // https://github.com/jsx-eslint/eslint-plugin-react/blob/v7.37.5/docs/rules/jsx-no-useless-fragment.md
  "react/jsx-no-useless-fragment": "error",

  // Prevent adjacent inline elements not separated by whitespace
  // https://github.com/jsx-eslint/eslint-plugin-react/blob/v7.37.5/docs/rules/no-adjacent-inline-elements.md
  // TODO: enable? semver-major
  "react/no-adjacent-inline-elements": "off",

  // Enforce a specific function type for function components
  // https://github.com/jsx-eslint/eslint-plugin-react/blob/v7.37.5/docs/rules/function-component-definition.md
  // migrated from https://github.com/americanexpress/eslint-config-amex/blob/16.x/index.js#L177
  "react/function-component-definition": [
    "off",
    {
      namedComponents: ["function-declaration", "function-expression"],
      unnamedComponents: "function-expression",
    },
  ],

  // Enforce a new line after jsx elements and expressions
  // https://github.com/jsx-eslint/eslint-plugin-react/blob/v7.37.5/docs/rules/jsx-newline.md
  "react/jsx-newline": "off",

  // Prevent react contexts from taking non-stable values
  // https://github.com/jsx-eslint/eslint-plugin-react/blob/v7.37.5/docs/rules/jsx-no-constructed-context-values.md
  "react/jsx-no-constructed-context-values": "error",

  // Prevent creating unstable components inside components
  // https://github.com/jsx-eslint/eslint-plugin-react/blob/v7.37.5/docs/rules/no-unstable-nested-components.md
  "react/no-unstable-nested-components": "error",

  // Enforce that namespaces are not used in React elements
  // https://github.com/jsx-eslint/eslint-plugin-react/blob/v7.37.5/docs/rules/no-namespace.md
  "react/no-namespace": "error",

  // Prefer exact proptype definitions
  // https://github.com/jsx-eslint/eslint-plugin-react/blob/v7.37.5/docs/rules/prefer-exact-props.md
  "react/prefer-exact-props": "error",

  // Lifecycle methods should be methods on the prototype, not class fields
  // https://github.com/jsx-eslint/eslint-plugin-react/blob/v7.37.5/docs/rules/no-arrow-function-lifecycle.md
  "react/no-arrow-function-lifecycle": "error",

  // Prevent usage of invalid attributes
  // https://github.com/jsx-eslint/eslint-plugin-react/blob/v7.37.5/docs/rules/no-invalid-html-attribute.md
  "react/no-invalid-html-attribute": "error",

  // Prevent declaring unused methods of component class
  // https://github.com/jsx-eslint/eslint-plugin-react/blob/v7.37.5/docs/rules/no-unused-class-component-methods.md
  "react/no-unused-class-component-methods": "error",
};
