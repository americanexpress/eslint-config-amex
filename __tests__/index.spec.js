/*
 * Copyright (c) 2017 American Express Travel Related Services Company, Inc.
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

describe('index.js', () => {
  it('should be import/require-able', () => {
    let configImportable = true;
    try {
      // require is part of the test
      require('..'); // eslint-disable-line global-require
    } catch (error) {
      configImportable = false;
    }

    expect(configImportable).toBe(true);
  });

  describe('rules which differ per NODE_ENV', () => {
    let eslintConfig;
    const { NODE_ENV } = process.env;

    describe('when production', () => {
      beforeAll(() => {
        jest.resetModules();
        process.env.NODE_ENV = 'production';
        eslintConfig = require('..');// eslint-disable-line global-require
      });

      afterAll(() => {
        process.env.NODE_ENV = NODE_ENV;
      });

      it('returns error for no-unused-vars', () => {
        expect(eslintConfig.rules['no-unused-vars']).toEqual('error');
      });
    });

    describe('when development', () => {
      beforeAll(() => {
        jest.resetModules();
        process.env.NODE_ENV = 'development';
        eslintConfig = require('..');// eslint-disable-line global-require
      });

      afterAll(() => {
        process.env.NODE_ENV = NODE_ENV;
      });

      it('returns warn for no-unused-vars', () => {
        expect(eslintConfig.rules['no-unused-vars']).toEqual('warn');
      });
    });
  });
});
