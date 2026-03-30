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
import { loadESLint } from "eslint";
import amexJsTestConfig from "../src/test-config.js";

describe("amexJsTestConfig", () => {
  it("calculated eslint config should match snapshot", async () => {
    const DefaultESLint = await loadESLint({ useFlatConfig: true });
    const eslint = new DefaultESLint({ cwd: import.meta.dirname });
    const config = await eslint.calculateConfigForFile("./__fixtures__/test-config.input.js");
    expect(config).toMatchSnapshot();
  });

  it("should be defined", async () => {
    expect(amexJsTestConfig()).toBeDefined();
  });

  it("should accept overrides", async () => {
    expect(amexJsTestConfig({ files: ["**/custom-dir/**"], ignores: ["**/ignore-dir/**"] })).toBeDefined();
  });
});
