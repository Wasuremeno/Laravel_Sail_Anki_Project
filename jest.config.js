export default {
  preset: "ts-jest",
  testEnvironment: "jsdom",   // ✅ works after installing jest-environment-jsdom
  roots: ["<rootDir>/resources/js"],
  moduleFileExtensions: ["ts", "tsx", "js", "jsx"],
  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest",
  },
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
};