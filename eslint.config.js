import { fileURLToPath } from "node:url";
import { defineConfig } from "eslint/config";
import { includeIgnoreFile } from "@eslint/compat";
import amexConfig from "./src/index.js";
import amexTestConfig from "./src/test-config.js";
import amexBrowserTestConfig from "./src/browser-test-config.js";
import amexPrettierTurnedOffConfig from "./src/prettier-config.js";

const gitignorePath = fileURLToPath(new URL(".gitignore", import.meta.url));

export default defineConfig([
  includeIgnoreFile(gitignorePath),
  {
    ignores: ["test_results/"],
  },
  amexConfig,
  {
    files: ["**/__tests__/**", "**/__mocks__/**"],
    extends: [amexTestConfig],
  },
  {
    files: ["__tests__/browser/**"],
    extends: [amexBrowserTestConfig],
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
  amexPrettierTurnedOffConfig,
]);
