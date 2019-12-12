<h1>
  <center>
    <br />
    <img src="./eslint-config-amex.png" alt="eslint-config-amex - Eslint Config Amex" width="50%" />
    <br /><br />
  </center>
</h1>

[![npm version](https://badge.fury.io/js/eslint-config-amex.svg)](https://badge.fury.io/js/eslint-config-amex)
[![Build Status](https://travis-ci.org/americanexpress/eslint-config-amex.svg?branch=master)](https://travis-ci.org/americanexpress/eslint-config-amex)

> American Express' eslint config.

## 👩‍💻 Hiring 👨‍💻

Want to get paid for your contributions to `eslint-config-amex`?
> Send your resume to oneamex.careers@aexp.com

## 📖 Table of Contents

* [Usage](#-usage)
* [Available Scripts](#-available-scripts)
* [Contributing](#-contributing)
* [License](#-license)
* [Code of Conduct](#-code-of-conduct)

## 🤹‍ Usage

### Installation

```bash
npm install --save-dev eslint-config-amex
```

### Extend your `.eslintrc`

```json
{
    "extends": "amex"
}
```

### (Optionally) Create an `.eslintrc` file in your test directory

```json
{
    "extends": "amex/test"
}
```

This gives you the `jest` global and some `jest` specific rules.

## 📜 Available Scripts

**`npm run test:lint`**

Verifies that your code matches the American Express code style defined in this config.

**`npm test`**

Runs unit tests.

**`npm run test:git-history`**

Verifies the format of all commit messages on the current branch.

**`npm posttest`**

Runs linting on the current branch **and** verifies the format of all commit messages on the current branch.

## 🏆 Contributing

We welcome Your interest in the American Express Open Source Community on Github.
Any Contributor to any Open Source Project managed by the American Express Open
Source Community must accept and sign an Agreement indicating agreement to the
terms below. Except for the rights granted in this Agreement to American Express
and to recipients of software distributed by American Express, You reserve all
right, title, and interest, if any, in and to Your Contributions. Please [fill
out the Agreement](https://cla-assistant.io/americanexpress/eslint-config-amex).

Please feel free to open pull requests and see [CONTRIBUTING.md](./CONTRIBUTING.md) for commit formatting details.

## 🗝️ License

Any contributions made under this project will be governed by the [Apache License 2.0](./LICENSE.txt).

## 🗣️ Code of Conduct

This project adheres to the [American Express Community Guidelines](./CODE_OF_CONDUCT.md).
By participating, you are expected to honor these guidelines.
