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
 * This file contains all rules for the `eslint-plugin-inclusive-language` plugin.
 * For a complete list of rules, see https://github.com/muenzpraeger/eslint-plugin-inclusive-language/tree/2.2.1/docs/rules.
 */

export default {
  /* eslint-disable inclusive-language/use-inclusive-words 
        -- config must specify non-inclusive words */
  "inclusive-language/use-inclusive-words": [
    "warn",
    {
      words: [
        {
          word: "blacklist",
          suggestions: ["blocklist", "denylist", "deny", "block", "unapproved"],
        },
        {
          word: "whitelist",
          suggestions: ["allowlist", "passlist", "allow", "permit", "approved"],
        },
        {
          word: "master",
          suggestions: ["main", "primary", "host", "leader"],
        },
        {
          word: "slave",
          suggestions: ["secondary", "replica", "client", "follower"],
        },
      ],

      lintStrings: true,
    },
  ],
  /* eslint-enable inclusive-language/use-inclusive-words 
            -- config must specify non-inclusive words */
};
