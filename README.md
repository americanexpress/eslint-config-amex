eslint-config-amex
==================

This is American Express' eslint config.

## Usage
1. Install:
```bash
npm install --save-dev eslint-config-amex
```

2. Extend your `.eslintrc`:
```json
{
    "extends": "amex"
}
```

3. (Optionally) Create an `.eslintrc` file at your test directory root and configure as follows:
```json
{
    "extends": "amex/test"
}
```
This gives you the `jest` global and some `jest` specific rules.

## Alter Rules
We extend [airbnb's eslint config](https://www.npmjs.com/package/eslint-config-airbnb). Each of their rules has [reasoning behind them](https://github.com/airbnb/javascript/blob/master/README.md).

If you feel that one or more of these rules affects code **beauty** < **readability** < **maintainability** then feel free to open a pull request:

1. Fork this repo (after filling out agreement as described below)
2. Create **one** branch per **one** rule change (bonus points for naming the branch after the rule)
3. Edit the rule in that branch, with a comment above the rule with a short, one liner why it's useful/needed
4. Commit the rule change, **with your objective, clear reasons** why the change is needed in the commit message
5. Open a PR to merge your branch into our repo. Keep your reason(s) in the description, and (please) expound upon them

A discussion will then ensue. Airbnb has reasons for why they chose the rule settings they did; be sure to address why they're not helpful.

Unhelpful supporting arguments like "___ is dumb" will incline us to decline your PR. Styles can turn into Holy Wars too easily, please stay objective and meet the requirements for more than one developer for the goals stated above.

## Contributing
We welcome Your interest in the American Express Open Source Community on Github.
Any Contributor to any Open Source Project managed by the American Express Open
Source Community must accept and sign an Agreement indicating agreement to the
terms below. Except for the rights granted in this Agreement to American Express
and to recipients of software distributed by American Express, You reserve all
right, title, and interest, if any, in and to Your Contributions. Please [fill
out the Agreement](http://goo.gl/forms/mIHWH1Dcuy).

## License
Any contributions made under this project will be governed by the [Apache License
2.0](https://github.com/americanexpress/eslint-config-amex/blob/master/LICENSE.txt).

## Code of Conduct
This project adheres to the [American Express Community Guidelines](https://github.com/americanexpress/eslint-config-amex/wiki/Code-of-Conduct).
By participating, you are expected to honor these guidelines.
