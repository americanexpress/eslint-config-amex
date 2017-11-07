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

const path = require('path');
const { exec } = require('child_process');
const packageJson = require('../package.json');

describe('package.json', () => {
  it('should not have peer dep warnings', (done) => {
    // ex:
    // npm ERR! peer dep missing: eslint@<2.3.0, required by babel-eslint@5.0.4
    exec('npm ls', { cwd: path.resolve(__dirname, '../') }, (stdout, stderr) => {
      // if there are no complaints from npm, stdout is null
      expect(stdout || '').not.toMatch('peer dep missing');
      expect(stderr || '').not.toMatch('peer dep missing');
      done();
    });
  });

  it('should have the same eslint version in devDependencies as in peerDependencies', () => {
    expect(packageJson.devDependencies.eslint).toEqual(packageJson.peerDependencies.eslint);
  });
});
