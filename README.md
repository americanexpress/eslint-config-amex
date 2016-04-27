eslint-config-axp
=================

package AExp's .eslintrc as a shared config.

Use
---

Edit your `package.json` to include:

```json
  "devDependencies": {
    ...
    "eslint": "^2.2.0",
    "eslint-config-axp": "git+ssh:****.com/uie/eslint-config-axp.git#develop",
    ...
  }
```

Alter Rules
-----------

We extend [airbnb's eslint config](https://www.npmjs.com/package/eslint-config-airbnb). Each of their rules has [reasoning behind them](https://github.com/airbnb/javascript/blob/master/README.md).

If you feel that one or more of these rules affects code **beauty** < **readability** < **maintainability** then please:

1. [Fork this repo](****.com/stash/projects/UIE/repos/eslint-config-axp?fork) (probably into [your personal space](****.com/stash/profile))
2. Create **one** branch per **one** rule change (bonus points for naming the branch after the rule)
3. Edit the rule in that branch, with a comment above the rule with a short, one liner why it's useful/needed
4. Commit the rule change, **with your objective, clear reasons** why the change is needed in the commit message
5. Open a PR to merge your branch into our repo. Keep your reason(s) in the description, and (please) expound upon them.

A discussion will then ensue. Airbnb has reasons for why they chose the rule settings they did; be sure to address why they're not helpful for our purposes at AExp.

Unhelpful supporting arguments like "___ is dumb" will incline us to decline your PR. Styles can turn into Holy Wars too easily, please stay objective and meet the requirements for more than one developer for the goals stated above.
