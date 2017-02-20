eslint-config-one-amex
=================

This is One Amex's .eslintrc.json as a shared config.

Use
---

Run:
```bash
npm install --save-dev eslint-config-one-amex
```

Edit your `.eslintrc.json` to be:
```json
{
  "extends": "one-amex"
}
```

Alter Rules
-----------

We extend [airbnb's eslint config](https://www.npmjs.com/package/eslint-config-airbnb). Each of their rules has [reasoning behind them](https://github.com/airbnb/javascript/blob/master/README.md).

If you feel that one or more of these rules affects code **beauty** < **readability** < **maintainability** then please:

1. [Fork this repo](****.com/stash/projects/UIE/repos/eslint-config-one-amex?fork) (probably into [your personal space](****.com/stash/profile))
2. Create **one** branch per **one** rule change (bonus points for naming the branch after the rule)
3. Edit the rule in that branch, with a comment above the rule with a short, one liner why it's useful/needed
4. Commit the rule change, **with your objective, clear reasons** why the change is needed in the commit message
5. Open a PR to merge your branch into our repo. Keep your reason(s) in the description, and (please) expound upon them.

A discussion will then ensue. Airbnb has reasons for why they chose the rule settings they did; be sure to address why they're not helpful for our purposes within the One Amex ecosystem.

Unhelpful supporting arguments like "___ is dumb" will incline us to decline your PR. Styles can turn into Holy Wars too easily, please stay objective and meet the requirements for more than one developer for the goals stated above.
