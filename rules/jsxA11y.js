export default {
  // https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/v6.10.2/docs/rules/anchor-is-valid.md
  "jsx-a11y/anchor-is-valid": [
    "error",
    {
      components: ["Link"],
      specialLink: ["to"],
    },
  ],

  // https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/v6.10.2/docs/rules/label-has-for.md
  // "jsx-a11y/label-has-for": "off", // unncessary

  // https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/v6.10.2/docs/rules/label-has-associated-control.md
  "jsx-a11y/label-has-associated-control": [
    "error",
    {
      assert: "htmlFor",
    },
  ],
};
