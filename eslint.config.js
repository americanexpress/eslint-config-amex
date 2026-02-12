import { fileURLToPath } from "node:url";
import { defineConfig } from "eslint/config";
import { includeIgnoreFile } from "@eslint/compat";
import basicConfig from "./index.js";
import testConfig from "./test-config.js";
import browserTestConfig from "./browser-test-config.js";
import prettierTurnedOffConfig from "./prettier/index.js";

const gitignorePath = fileURLToPath(new URL(".gitignore", import.meta.url));

export default defineConfig([
  includeIgnoreFile(gitignorePath),
  {
    ignores: ["test_results/"],
  },
  basicConfig,
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
    files: ["**/*.js", "**/*.mjs", "**/*.cjs", "**/*.jsx", "**/*.snap"],
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
  prettierTurnedOffConfig,
]);
