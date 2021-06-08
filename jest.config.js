module.exports = {
  testEnvironment: 'jsdom',
  setupFiles: ['<rootDir>/jest.setup.js'],
  moduleNameMapper: {
    // see: https://jestjs.io/docs/en/webpack.html#handling-static-assets
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga|css).*?$':
      '<rootDir>/fileMock.js'
  },
  testMatch: ['**/__tests__/**/*.[jt]s?(x)', '**/*.(spec|test).[jt]s?(x)'],
  testPathIgnorePatterns: ['<rootDir>/dist/', '<rootDir>/node_modules/'],
  coverageReporters: ['text', 'html'],

}