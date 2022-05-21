/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  // cacheDirectory: __dirname + '/.jest_cache',
  // roots: ["<rootDir>/src"],
  // testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.[jt]sx?$", // default
  // testMatch: [ "**/__tests__/**/*.[jt]s?(x)", "**/?(*.)+(spec|test).[jt]s?(x)" ] // default
  // moduleFileExtensions: ["ts", "js", "json"],
  // setupFiles: ['./src/testing/preRun.ts'],
  // preset: "ts-jest",
  // testEnvironment: "node", // default: node
  collectCoverage: true,
  collectCoverageFrom: ["src/**/*.{ts,js}"],
  // coverageThreshold: {
  //   global: {
  //     statements: 50,
  //     branches: 90,
  //     functions: 0,
  //     lines: 0,
  //   },
  // },
  // reporters: [],
  // coveragePathIgnorePatterns: [
  //   ".*test\\.data\\.ts$,migrations.*.ts$,(.*.(test|spec)).(jsx?|tsx?)$,(tests/.*.mock).(jsx?|tsx?)$",
  // ],
  // coverageReporters: ["json", "lcov", "text", "clover", "cobertura"],
  verbose: true,
};
