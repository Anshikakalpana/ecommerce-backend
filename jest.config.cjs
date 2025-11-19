// const { createDefaultPreset } = require("ts-jest");

// const tsJestTransformCfg = createDefaultPreset().transform;

// /** @type {import("jest").Config} **/
// export default {
//   testEnvironment: "node",
//   transform: {
//     ...tsJestTransformCfg,
//   },
// };
module.exports = {
  preset: "ts-jest/presets/default-esm",
  testEnvironment: "node",

  transform: {
    "^.+\\.ts$": ["ts-jest", { useESM: true }],
  },

  extensionsToTreatAsEsm: [".ts"],

  moduleNameMapper: {
    "^(\\.{1,2}/.*)\\.js$": "$1",
  },

  testMatch: ["**/src/tests/**/*.test.ts"],
};
