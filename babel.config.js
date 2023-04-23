module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      require.resolve("expo-router/babel"),
      ["module-resolver", {
        "root": [
          "./src"
        ],
        "extensions": [
          ".ios.ts",
          ".android.ts",
          ".ts",
          ".ios.tsx",
          ".android.tsx",
          ".tsx",
          ".jsx",
          ".js",
          ".json"
        ],
        "alias": {
          "@components": "./src/components",
          "@contexts": "./src/contexts",
          "@services": "./src/services",
          "@configs": "./src/configs",
          "@themes": "./src/themes",
          "@validations": "./src/validations"
        }
      }]
    ]
  };
};