const path = require('path');
const exec = require('child_process').exec;

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
});
