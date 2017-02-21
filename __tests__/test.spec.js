describe('test.js', () => {
  it('should be import/require-able', () => {
    let configImportable = true;
    try {
      // require is part of the test
      require('../test.js'); // eslint-disable-line global-require
    } catch (error) {
      configImportable = false;
    }

    expect(configImportable).toBe(true);
  });
});
