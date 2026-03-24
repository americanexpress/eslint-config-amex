/* istanbul ignore file */
import { fileURLToPath } from "node:url";
// eslint-disable-next-line import/no-unresolved -- see https://github.com/import-js/eslint-plugin-import/issues/1810
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
  includeIgnoreFile(gitignorePath),
  {
    files: ["**/*.{js,jsx,mjs,cjs,snap}"],
    ignores: ["**/__fixtures__/**"], // dummy files for testing
    extends: [baseConfig],
  },
  {
    files: ["**/__tests__/**"],
    ignores: ["**/__fixtures__/**"], // dummy files for testing
    extends: [testConfig],
    rules: {
      "jest/no-large-snapshots": ["off"], // for snapshot of eslint config
      "inclusive-language/use-inclusive-words": ["off"], // for snapshot of eslint config
    },
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
    files: ["**/*.{js,jsx,mjs,cjs,snap}"],
    ignores: ["**/__fixtures__/**"], // dummy files for testing
    extends: [ignorePrettierRulesConfig],
  },
  // apply to dummy file so we can take snapshot of calculated config
  {
    files: ['__fixtures__/index.input.js'],
    extends: [baseConfig],
  },
  // apply to dummy file so we can take snapshot of calculated config
  {
    files: ['__fixtures__/test-config.input.js'],
    extends: [testConfig],
  },
  // apply to dummy file so we can take snapshot of calculated config
  {
    files: ["__fixtures__/ts-config.input.ts"],
    extends: [tsConfig],
  },
  // apply to dummy file so we can take snapshot of calculated config
  {
    files: ["__fixtures__/ts-test-config.input.ts"],
    extends: [tsTestConfig],
  },
  // apply to dummy file so we can take snapshot of calculated config
  {
    files: ["__fixtures__/browser-test-config.input.js"],
    extends: [browserTestConfig],
  },
  // apply to dummy file so we can take snapshot of calculated config
  {
    files: ["__fixtures__/ignore-prettier-rules-config.input.js"],
    extends: [ignorePrettierRulesConfig],
  },  
]);
