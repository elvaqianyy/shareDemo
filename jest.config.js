module.exports = {
  preset: '@vue/cli-plugin-unit-jest',
  testMatch: ["<rootDir>/test/**/*.(spec|test).js?(x)"],
    transform: {
      // 将.js后缀的文件使用babel-jest处理
      "^.+\\.js$": "babel-jest",
  },
  transformIgnorePatterns: ["<rootDir>/node_modules/(?!(lodash-es|other-es-lib))"],
  // 覆盖率
  // "collectCoverage": true,
  // "collectCoverageFrom": [
  //     "lib/**/*.{js,vue}"
  // ],
}
