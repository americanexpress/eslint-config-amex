<h1 align="center">
  <img src='https://github.com/americanexpress/eslint-config-amex/raw/main/eslint-config-amex.png' alt="Eslint Config Amex - One Amex" width='50%'/>
</h1>

[![npm](https://img.shields.io/npm/v/eslint-config-amex)](https://www.npmjs.com/package/eslint-config-amex)
[![Health Check](https://github.com/americanexpress/eslint-config-amex/actions/workflows/ci.yml/badge.svg?branch=main)](https://github.com/americanexpress/eslint-config-amex/actions/workflows/ci.yml)

> ESLint configurations used at American Express.

## 👩‍💻 Hiring 👨‍💻

Want to get paid for your contributions to `eslint-config-amex`?

> Send your resume to oneamex.careers@aexp.com

## 📖 Table of Contents

- [Usage](#-usage)
- [Contributing](#-contributing)
- [License](#️-license)
- [Code of Conduct](#️-code-of-conduct)

## 🤹‍ Usage

This config is compatible with ESLint >= 9.

### Installation

```bash
npm install --save-dev eslint@^9.0.0 @eslint/compat@^2.0.0 eslint-config-amex
```

If using Jest for unit tests and browser tests

```bash
npm install --save-dev typescript eslint-plugin-jest@^29.0.0 eslint-plugin-jest-dom@^5.0.0
```

### Configuration

Create a `eslint.config.js` file. This "flat config" is the new configuration format as of `eslint@9`. See https://eslint.org/docs/latest/use/configure/configuration-files for more details.

```js
import { fileURLToPath } from "node:url";
import { defineConfig } from "eslint/config";
import { includeIgnoreFile } from "@eslint/compat";
import baseConfig from "eslint-config-amex";
import testConfig from "eslint-config-amex/test-config";
import browserTestConfig from "eslint-config-amex/browser-test-config";
import ignorePrettierRulesConfig from "eslint-config-amex/ignore-prettier-rules-config";

const gitignorePath = fileURLToPath(new URL(".gitignore", import.meta.url));

export default defineConfig([
  includeIgnoreFile(gitignorePath), // ignore files which are gitignored
  {
    extends: [baseConfig], // for JavaScript and React code
  },
  {
    files: ["**/__tests__/**", "**/__mocks__/**"],
    extends: [testConfig], // for Jest unit tests
  },
  {
    files: ["__tests__/browser/**"],
    extends: [browserTestConfig], // for Jest browser tests
  },
  ignorePrettierRulesConfig, // include if using Prettier in your project
]);
```

### Linting vs Formatting

|                  | Linting                                     | Formatting                      |
| ---------------- | ------------------------------------------- | ------------------------------- |
| Purpose          | Used to improve code quality and catch bugs | Used to format and stylize code |
| Recommended Tool | ESLint                                      | Prettier                        |

Previously, formatting was done as _part of_ linting by using `eslint-plugin-prettier`. However, this is [no longer recommended](https://prettier.io/docs/integrating-with-linters#notes).

If you want formatting in your repo, [install Prettier](https://prettier.io/docs/install) and use the `ignorePrettierRulesConfig` config (see above) in order to disable any ESLint rules which may conflict with Prettier.

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
