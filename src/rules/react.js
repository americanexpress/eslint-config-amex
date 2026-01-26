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
 * This file contains all rules for the `eslint-plugin-react` plugin.
 * For a complete list of rules, see https://github.com/jsx-eslint/eslint-plugin-react/tree/v7.37.5/docs/rules.
 */

export default {
  // Enforces consistent naming for boolean props
  // https://github.com/jsx-eslint/eslint-plugin-react/blob/v7.37.5/docs/rules/boolean-prop-naming.md
  "react/boolean-prop-naming": [
    "error",
    {
      propTypeNames: ["bool", "mutuallyExclusiveTrueProps"],
      rule: "^((is|has|can|show|hide|should)[A-Z]([A-Za-z0-9]?)+|(show|hide))",
    },
  ],

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

  // Enforce all defaultProps have a corresponding non-required PropType
  // https://github.com/jsx-eslint/eslint-plugin-react/blob/v7.37.5/docs/rules/default-props-match-prop-types.md
  "react/default-props-match-prop-types": [
    "error",
    { allowRequiredDefaults: false },
  ],

  // Enforce consistent usage of destructuring assignment of props, state, and context
  // https://github.com/yannickcr/eslint-plugin-react/blob/843d71a432baf0f01f598d7cf1eea75ad6896e4b/docs/rules/destructuring-assignment.md
  "react/destructuring-assignment": ["error", "always"],

  // Forbids using non-exported propTypes
  // https://github.com/yannickcr/eslint-plugin-react/blob/v7.37.5/docs/rules/forbid-foreign-prop-types.md
  // this is intentionally set to "warn". it would be "error",
  // but it's only critical if you're stripping propTypes in production.
  "react/forbid-foreign-prop-types": ["warn", { allowInPropTypes: true }],

  // Forbid certain propTypes (any, array, object)
  // https://github.com/yannickcr/eslint-plugin-react/blob/v7.37.5/docs/rules/forbid-prop-types.md
  "react/forbid-prop-types": [
    "error",
    {
      forbid: ["any", "array", "object"],
      checkContextTypes: true,
      checkChildContextTypes: true,
    },
  ],

  // Enforce boolean attributes notation in JSX
  // https://github.com/yannickcr/eslint-plugin-react/blob/v7.37.5/docs/rules/jsx-boolean-value.md
  "react/jsx-boolean-value": ["error", "always"],

  // Validate closing bracket location in JSX
  // https://github.com/yannickcr/eslint-plugin-react/blob/v7.37.5/docs/rules/jsx-closing-bracket-location.md
  "react/jsx-closing-bracket-location": ["error", "line-aligned"],

  // Validate closing tag location in JSX
  // https://github.com/yannickcr/eslint-plugin-react/blob/v7.37.5/docs/rules/jsx-closing-tag-location.md
  "react/jsx-closing-tag-location": "error",

  // Enforce curly braces or disallow unnecessary curly braces in JSX props and/or children
  // https://github.com/yannickcr/eslint-plugin-react/blob/v7.37.5/docs/rules/jsx-curly-brace-presence.md
  "react/jsx-curly-brace-presence": [
    "error",
    { props: "never", children: "never" },
  ],

  // Enforce linebreaks in curly braces in JSX attributes and expressions.
  // https://github.com/yannickcr/eslint-plugin-react/blob/v7.37.5/docs/rules/jsx-curly-newline.md
  "react/jsx-curly-newline": [
    "error",
    {
      multiline: "consistent",
      singleline: "consistent",
    },
  ],

  // Enforce or disallow spaces inside of curly braces in JSX attributes
  // https://github.com/yannickcr/eslint-plugin-react/blob/v7.37.5/docs/rules/jsx-curly-spacing.md
  "react/jsx-curly-spacing": ["error", "never", { allowMultiline: true }],

  // Enforce spacing around jsx equals signs
  // https://github.com/yannickcr/eslint-plugin-react/blob/v7.37.5/docs/rules/jsx-equals-spacing.md
  "react/jsx-equals-spacing": ["error", "never"],

  // only .jsx files may have JSX
  // https://github.com/yannickcr/eslint-plugin-react/blob/v7.37.5/docs/rules/jsx-filename-extension.md
  "react/jsx-filename-extension": ["error", { extensions: [".jsx"] }],

  // Require that the first prop in a JSX element be on a new line when the element is multiline
  // https://github.com/yannickcr/eslint-plugin-react/blob/v7.37.5/docs/rules/jsx-first-prop-new-line.md
  "react/jsx-first-prop-new-line": ["error", "multiline-multiprop"],

  // Enforce JSX indentation
  // https://github.com/yannickcr/eslint-plugin-react/blob/v7.37.5/docs/rules/jsx-indent.md
  "react/jsx-indent": ["error", 2],

  // Validate props indentation in JSX
  // https://github.com/yannickcr/eslint-plugin-react/blob/v7.37.5/docs/rules/jsx-indent-props.md
  "react/jsx-indent-props": ["error", 2],

  // Limit maximum of props on a single line in JSX
  // https://github.com/yannickcr/eslint-plugin-react/blob/v7.37.5/docs/rules/jsx-max-props-per-line.md
  "react/jsx-max-props-per-line": ["error", { maximum: 1, when: "multiline" }],

  // Prevent usage of .bind() in JSX props
  // https://github.com/yannickcr/eslint-plugin-react/blob/v7.37.5/docs/rules/jsx-no-bind.md
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

  // Prevent react contexts from taking non-stable values
  // https://github.com/yannickcr/eslint-plugin-react/blob/v7.37.5/docs/rules/jsx-no-constructed-context-values.md
  "react/jsx-no-constructed-context-values": "error",

  // Prevent usage of `javascript:` URLs
  // https://github.com/yannickcr/eslint-plugin-react/blob/v7.37.5/docs/rules/jsx-no-script-url.md
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
  // https://github.com/yannickcr/eslint-plugin-react/blob/v7.37.5/docs/rules/jsx-no-useless-fragment.md
  "react/jsx-no-useless-fragment": "error",

  // Enforce PascalCase for user-defined JSX components
  // https://github.com/yannickcr/eslint-plugin-react/blob/v7.37.5/docs/rules/jsx-pascal-case.md
  "react/jsx-pascal-case": [
    "error",
    {
      allowAllCaps: true,
      ignore: [],
    },
  ],

  // Disallow multiple spaces between inline JSX props
  // https://github.com/yannickcr/eslint-plugin-react/blob/v7.37.5/docs/rules/jsx-props-no-multi-spaces.md
  "react/jsx-props-no-multi-spaces": "error",

  // Disallow JSX props spreading
  // https://github.com/yannickcr/eslint-plugin-react/blob/v7.37.5/docs/rules/jsx-props-no-spreading.md
  "react/jsx-props-no-spreading": [
    "error",
    {
      html: "enforce",
      custom: "enforce",
      explicitSpread: "ignore",
      exceptions: [],
    },
  ],

  // Validate whitespace in and around the JSX opening and closing brackets
  // https://github.com/yannickcr/eslint-plugin-react/blob/v7.37.5/docs/rules/jsx-tag-spacing.md
  "react/jsx-tag-spacing": [
    "error",
    {
      closingSlash: "never",
      beforeSelfClosing: "always",
      afterOpening: "never",
      beforeClosing: "never",
    },
  ],

  // Prevent missing parentheses around multilines JSX
  // https://github.com/yannickcr/eslint-plugin-react/blob/v7.37.5/docs/rules/jsx-wrap-multilines.md
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

  // Prevent using this.state within a this.setState
  // https://github.com/yannickcr/eslint-plugin-react/blob/v7.37.5/docs/rules/no-access-state-in-setstate.md
  "react/no-access-state-in-setstate": "error",

  // Prevent usage of Array index in keys
  // https://github.com/yannickcr/eslint-plugin-react/blob/v7.37.5/docs/rules/no-array-index-key.md
  "react/no-array-index-key": "error",

  // Lifecycle methods should be methods on the prototype, not class fields
  // https://github.com/yannickcr/eslint-plugin-react/blob/v7.37.5/docs/rules/no-arrow-function-lifecycle.md
  "react/no-arrow-function-lifecycle": "error",

  // Prevent usage of dangerous JSX properties
  // https://github.com/yannickcr/eslint-plugin-react/blob/v7.37.5/docs/rules/no-danger.md
  "react/no-danger": "warn",

  // Prevent usage of setState in componentDidUpdate
  // https://github.com/yannickcr/eslint-plugin-react/blob/v7.37.5/docs/rules/no-did-update-set-state.md
  "react/no-did-update-set-state": "error",

  // Prevent usage of invalid attributes
  // https://github.com/yannickcr/eslint-plugin-react/blob/v7.37.5/docs/rules/no-invalid-html-attribute.md
  "react/no-invalid-html-attribute": "error",

  // Enforce that namespaces are not used in React elements
  // https://github.com/yannickcr/eslint-plugin-react/blob/v7.37.5/docs/rules/no-namespace.md
  "react/no-namespace": "error",

  // Prevent usage of shouldComponentUpdate when extending React.PureComponent
  // https://github.com/yannickcr/eslint-plugin-react/blob/v7.37.5/docs/rules/no-redundant-should-component-update.md
  "react/no-redundant-should-component-update": "error",

  // Prevent this from being used in stateless functional components
  // https://github.com/yannickcr/eslint-plugin-react/blob/v7.37.5/docs/rules/no-this-in-sfc.md
  "react/no-this-in-sfc": "error",

  // Prevents common casing typos
  // https://github.com/yannickcr/eslint-plugin-react/blob/v7.37.5/docs/rules/no-typos.md
  "react/no-typos": "error",

  // Prevent creating unstable components inside components
  // https://github.com/yannickcr/eslint-plugin-react/blob/v7.37.5/docs/rules/no-unstable-nested-components.md
  "react/no-unstable-nested-components": "error",

  // Prevent declaring unused methods of component class
  // https://github.com/yannickcr/eslint-plugin-react/blob/v7.37.5/docs/rules/no-unused-class-component-methods.md
  "react/no-unused-class-component-methods": "error",

  // Prevent unused propType definitions
  // https://github.com/yannickcr/eslint-plugin-react/blob/v7.37.5/docs/rules/no-unused-prop-types.md
  "react/no-unused-prop-types": [
    "error",
    {
      customValidators: [],
      skipShapeProps: true,
    },
  ],

  // Prevent unused state values
  // https://github.com/yannickcr/eslint-plugin-react/blob/v7.37.5/docs/rules/no-unused-state.md
  "react/no-unused-state": "error",

  // Prevent usage of setState in componentWillUpdate
  // https://github.com/yannickcr/eslint-plugin-react/blob/v7.37.5/docs/rules/no-will-update-set-state.md
  "react/no-will-update-set-state": "error",

  // Require ES6 class declarations over React.createClass
  // https://github.com/yannickcr/eslint-plugin-react/blob/v7.37.5/docs/rules/prefer-es6-class.md
  "react/prefer-es6-class": ["error", "always"],

  // Prefer exact proptype definitions
  // https://github.com/yannickcr/eslint-plugin-react/blob/v7.37.5/docs/rules/prefer-exact-props.md
  "react/prefer-exact-props": "error",

  // Require stateless functions when not using lifecycle methods, setState or ref
  // https://github.com/yannickcr/eslint-plugin-react/blob/v7.37.5/docs/rules/prefer-stateless-function.md
  "react/prefer-stateless-function": ["error", { ignorePureComponents: true }],

  // Prevent extra closing tags for components without children
  // https://github.com/yannickcr/eslint-plugin-react/blob/v7.37.5/docs/rules/self-closing-comp.md
  "react/self-closing-comp": "error",

  // Enforce component methods order
  // https://github.com/yannickcr/eslint-plugin-react/blob/v7.37.5/docs/rules/sort-comp.md
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

  // Enforce state initialization style
  // https://github.com/yannickcr/eslint-plugin-react/blob/v7.37.5/docs/rules/state-in-constructor.md
  // TODO: set to "never" once babel-preset-airbnb supports public class fields
  "react/state-in-constructor": ["error", "always"],

  // Enforces where React component static properties should be positioned
  // https://github.com/yannickcr/eslint-plugin-react/blob/v7.37.5/docs/rules/static-property-placement.md
  // TODO: set to "static public field" once babel-preset-airbnb supports public class fields
  "react/static-property-placement": ["error", "property assignment"],

  // Require style prop value be an object or var
  // https://github.com/yannickcr/eslint-plugin-react/blob/v7.37.5/docs/rules/style-prop-object.md
  "react/style-prop-object": "error",

  // Prevent void DOM elements from receiving children
  // https://github.com/yannickcr/eslint-plugin-react/blob/v7.37.5/docs/rules/void-dom-elements-no-children.md
  "react/void-dom-elements-no-children": "error",
};
