/*
 * Copyright (c) 2026 American Express Travel Related Services Company, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except
 * in compliance with the License. You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under the License
 * is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express
 * or implied. See the License for the specific language governing permissions and limitations under
 * the License.
 */

/*
 * This file contains all settings for the `eslint-plugin-react` plugin.
 * For a complete list of settings, see https://github.com/jsx-eslint/eslint-plugin-react/blob/v7.37.5/README.md.
 * These settings were migrated from https://github.com/airbnb/javascript/blob/eslint-config-airbnb-v19.0.4/packages/eslint-config-airbnb/rules/react.js.
 */

export default {
  react: {
    pragma: "React",
    version: "detect",
  },
  propWrapperFunctions: [
    "forbidExtraProps", // https://www.npmjs.com/package/airbnb-prop-types
    "exact", // https://www.npmjs.com/package/prop-types-exact
    "Object.freeze", // https://tc39.github.io/ecma262/#sec-object.freeze
  ],
};
