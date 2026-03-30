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

Create a `eslint.config.js` file (or `eslint.config.mjs` if your package.json does not have `"type": "module"`). This Flat Config file is the new configuration format as of `eslint@9`. See https://eslint.org/docs/v9.x/use/configure/configuration-files for more details.

#### JavaScript

If working in JavaScript, your `eslint.config.js` should be:

```js
import { fileURLToPath } from 'node:url';
import { defineConfig } from 'eslint/config';
import { includeIgnoreFile } from '@eslint/compat';
import amexJsConfig from 'eslint-config-amex';
import amexJsTestConfig from 'eslint-config-amex/test-config';
import amexBrowserTestConfig from 'eslint-config-amex/browser-test-config';
import amexIgnorePrettierRulesConfig from 'eslint-config-amex/ignore-prettier-rules-config';

const gitignorePath = fileURLToPath(new URL('.gitignore', import.meta.url));

export default defineConfig([
  includeIgnoreFile(gitignorePath),
  amexJsConfig(),
  amexJsTestConfig(),
  amexBrowserTestConfig(),
  amexIgnorePrettierRulesConfig(), // include if using Prettier in your project
]);
```

#### TypeScript

If working in TypeScript, your `eslint.config.js` should be:

```js
import { fileURLToPath } from 'node:url';
import { defineConfig } from 'eslint/config';
import { includeIgnoreFile } from '@eslint/compat';
import amexTsConfig from 'eslint-config-amex/ts-config';
import amexTsTestConfig from 'eslint-config-amex/ts-test-config';
import amexBrowserTestConfig from 'eslint-config-amex/browser-test-config';
import amexIgnorePrettierRulesConfig from 'eslint-config-amex/ignore-prettier-rules-config';

const gitignorePath = fileURLToPath(new URL('.gitignore', import.meta.url));

export default defineConfig([
  includeIgnoreFile(gitignorePath),
  amexTsConfig(),
  amexTsTestConfig(),
  amexBrowserTestConfig(),
  amexIgnorePrettierRulesConfig(), // include if using Prettier in your project
]);
```

### Overrides

Each of the config functions can be customized by supplying an object with the `files`, `ignores`, and `rules` properties, as defined in the [ESLint docs](https://eslint.org/docs/v9.x/use/configure/configuration-files#configuration-objects). The `files` and `ignores` properties will completely override the default values for those configs, whereas the `rules` property will be merged with the existing rules for that config. For convenience, `JS_FILES` and `JS_AND_TS_FILES` constants are exported from `eslint-config-amex/constants`.

```js
import amexJsConfig from 'eslint-config-amex';
import amexJsTestConfig from 'eslint-config-amex/test-config';
import { JS_FILES } from 'eslint-config-amex/constants';

export default defineConfig([
  // other configs
  amexJsConfig({
    ignores: [`**/src/ignore-directory/**/${JS_FILES}`],
  })
  amexJsTestConfig({
    files: [`**/custom-test-directory/**/${JS_FILES}`],
    rules: {
      'jest/no-large-snapshots': ['error', { maxSize: 100 }],
    }
  })
]);
```

For reference, these are the default `files` for each config.

| Config                                            | Default Files Applied To                                                |
| ------------------------------------------------- | ----------------------------------------------------------------------- |
| `eslint-config-amex`                              | `**/*.{js,jsx,mjs,cjs,snap}`                                            |
| `eslint-config-amex/test-config`                  | `**/__{tests,mocks}__/**/*.{js,jsx,mjs,cjs,snap}`                       |
| `eslint-config-amex/ts-config`                    | `**/*.{js,jsx,mjs,cjs,ts,tsx,mts,cts,snap}`                             |
| `eslint-config-amex/ts-test-config`               | `**/__{tests,mocks}__/**/*.{js,jsx,mjs,cjs,ts,tsx,mts,cts,snap}`        |
| `eslint-config-amex/browser-test-config`          | `**/__tests__/{browser,a11y}/**/*.{js,jsx,mjs,cjs,ts,tsx,mts,cts,snap}` |
| `eslint-config-amex/ignore-prettier-rules-config` | `**/*.{js,jsx,mjs,cjs,ts,tsx,mts,cts,snap}`                             |

### Linting vs Formatting

|                  | Linting                                     | Formatting                      |
| ---------------- | ------------------------------------------- | ------------------------------- |
| Purpose          | Used to improve code quality and catch bugs | Used to format and stylize code |
| Recommended Tool | ESLint                                      | Prettier                        |

Previously, formatting was done as _part of_ linting by using `eslint-plugin-prettier`. However, this is [no longer recommended](https://prettier.io/docs/integrating-with-linters#notes).

If you want formatting in your repo, [install Prettier](https://prettier.io/docs/install) and use the `eslint-config-amex/ignore-prettier-rules-config` config (see above) in order to disable any ESLint rules which may conflict with Prettier.

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
