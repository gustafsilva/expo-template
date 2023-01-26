module.exports = function (api) {
  api.cache(true);
  return {
    presets: [
      "babel-preset-expo",
    "@babel/preset-typescript",
    ],
    plugins: [
      [
        "module-resolver",
        {
          alias: {
            core: "./src/core",
            features: "./src/features",
            assets: "./assets"
          },
        },
      ],
    ],
  };
};
