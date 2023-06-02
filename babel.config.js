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
          "@themes": "./src/themes",
          "@validations": "./src/validations",
          "@images": "./assets/images",
          "@hooks": "./src/hooks",
          "@types": "./src/types",
          "@config": "./src/config",
        }
      }]
    ]
  };
};