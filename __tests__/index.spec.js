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
describe("config should be importable", () => {
  it("standard config", async () => {
    let configsImportable = true;
    try {
      await import("../src/index.js");
      await import("../src/test-config.js");
      await import("../src/browser-test-config.js");
      await import("../src/ignore-prettier-rules-config.js");
    } catch {
      configsImportable = false;
    }

    expect(configsImportable).toBe(true);
  });
});
