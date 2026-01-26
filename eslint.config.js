/* istanbul ignore file */
import { fileURLToPath } from "node:url";
import { defineConfig } from "eslint/config";
import { includeIgnoreFile } from "@eslint/compat";
import baseConfig from "./src/index.js";
import testConfig from "./src/test-config.js";
import browserTestConfig from "./src/browser-test-config.js";
import ignorePrettierRulesConfig from "./src/ignore-prettier-rules-config.js";

const gitignorePath = fileURLToPath(new URL(".gitignore", import.meta.url));

export default defineConfig([
  includeIgnoreFile(gitignorePath),
  {
    ignores: ["test_results/"],
  },
  baseConfig,
  {
    files: ["**/__tests__/**", "**/__mocks__/**"],
    extends: [testConfig],
  },
  {
    files: ["__tests__/browser/**"],
    extends: [browserTestConfig],
  },
  // needed for this repo but not One App module repos
  {
    files: ["**/*.js"],
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
  ignorePrettierRulesConfig,
]);
