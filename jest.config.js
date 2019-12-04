// For a detailed explanation regarding each configuration property, visit:
// https://jestjs.io/docs/en/configuration.html

module.exports = {
  coverageDirectory: '../coverage',
  moduleNameMapper: {
    '\\.mdx$': '<rootDir>/__mocks__/fileMock.js',
  },
  rootDir: 'src',
  snapshotSerializers: ['jest-emotion'],
};
