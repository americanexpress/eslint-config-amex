<h1 align="center">
  <img src='https://github.com/americanexpress/eslint-config-amex/raw/master/eslint-config-amex.png' alt="Eslint Config Amex - One Amex" width='50%'/>
</h1>

[![npm](https://img.shields.io/npm/v/eslint-config-amex)](https://www.npmjs.com/package/eslint-config-amex)
[![Travis (.org) branch](https://img.shields.io/travis/americanexpress/eslint-config-amex/master)](https://travis-ci.org/americanexpress/eslint-config-amex)

> American Express' eslint config.

## 👩‍💻 Hiring 👨‍💻

Want to get paid for your contributions to `eslint-config-amex`?
> Send your resume to oneamex.careers@aexp.com

## 📖 Table of Contents

* [Usage](#-usage)
* [Contributing](#-contributing)
* [License](#-license)
* [Code of Conduct](#-code-of-conduct)

## 🤹‍ Usage

### Installation

```bash
npm install --save-dev eslint-config-amex
```

### Extend your `.eslintrc`

To use the base config:

```json
{
    "extends": "amex"
}
```

To use the Prettier compatible config:

```json
{
    "extends": "amex/prettier"
}
```

### (Optionally) Create an `.eslintrc` file in your test directory

```json
{
    "extends": "amex/test"
}
```

If you are using Prettier use the `prettier/test` config:

```json
{
    "extends": "amex/prettier/test"
}
```

This gives you the `jest` global and some `jest` specific rules.

## 🏆 Contributing

We welcome Your interest in the American Express Open Source Community on Github.
Any Contributor to any Open Source Project managed by the American Express Open
Source Community must accept and sign an Agreement indicating agreement to the
terms below. Except for the rights granted in this Agreement to American Express
and to recipients of software distributed by American Express, You reserve all
right, title, and interest, if any, in and to Your Contributions. Please [fill
out the Agreement](https://cla-assistant.io/americanexpress/eslint-config-amex).

Please feel free to open pull requests and see [CONTRIBUTING.md](./CONTRIBUTING.md) to learn how to get started contributing.

## 🗝️ License

Any contributions made under this project will be governed by the [Apache License 2.0](./LICENSE.txt).

## 🗣️ Code of Conduct

This project adheres to the [American Express Community Guidelines](./CODE_OF_CONDUCT.md).
By participating, you are expected to honor these guidelines.
