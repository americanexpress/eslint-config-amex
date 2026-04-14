/* istanbul ignore file */
import { fileURLToPath } from "node:url";
import { defineConfig } from "eslint/config";
import { includeIgnoreFile } from "@eslint/compat";
import baseConfig from "./src/index.js";
import testConfig from "./src/test-config.js";
import browserTestConfig from "./src/browser-test-config.js";
import tsConfig from "./src/ts-config.js";
import tsTestConfig from "./src/ts-test-config.js";
import ignorePrettierRulesConfig from "./src/ignore-prettier-rules-config.js";

const gitignorePath = fileURLToPath(new URL(".gitignore", import.meta.url));

export default defineConfig([
  {
    name: 'amex',
  },
  includeIgnoreFile(gitignorePath),
  {
    extends: [
      baseConfig({
        ignores: ["**/__fixtures__/**"], // dummy files for testing
      }),
      testConfig({
        ignores: ["**/__fixtures__/**"], // dummy files for testing
        rules: {
          "jest/no-large-snapshots": ["off"], // for snapshot of eslint config
          "inclusive-language/use-inclusive-words": ["off"], // for snapshot of eslint config
        },
      })
    ],
  },
  // needed for this repo but not One App module repos
  {
    files: ["**/*.js"],
    ignores: ["**/__fixtures__/**"], // dummy files for testing
    rules: {
      "import/extensions": [
        "error",
        "ignorePackages",
        {
          js: "always",
        },
      ],
    },
  },
  {
    extends: [ignorePrettierRulesConfig({
      ignores: ["**/__fixtures__/**"], // dummy files for testing
    })],
  },
  // apply to dummy file so we can take snapshot of calculated config
  {
    extends: [baseConfig({
      files: ['__fixtures__/index.input.js'],
    })],
  },
  // apply to dummy file so we can take snapshot of calculated config
  {
    extends: [testConfig({
      files: ['__fixtures__/test-config.input.js'],
    })],
  },
  // apply to dummy file so we can take snapshot of calculated config
  {
    extends: [tsConfig({
      files: ["__fixtures__/ts-config.input.ts"],
    })],
  },
  // apply to dummy file so we can take snapshot of calculated config
  {
    extends: [tsTestConfig({
      files: ["__fixtures__/ts-test-config.input.ts"],
    })],
  },
  // apply to dummy file so we can take snapshot of calculated config
  {
    extends: [browserTestConfig({
      files: ["__fixtures__/browser-test-config.input.js"],
    })],
  },
  // apply to dummy file so we can take snapshot of calculated config
  {
    extends: [ignorePrettierRulesConfig({
      files: ["__fixtures__/ignore-prettier-rules-config.input.js"],
    })],
  },  
]);
