module.exports = {
  preset: "ts-jest",
  testEnvironment: "jsdom",
  rootDir: "./",
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1",
  },
};
