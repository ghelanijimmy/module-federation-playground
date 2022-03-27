const cracoModuleFederation = require("craco-module-federation");
const path = require("path");

module.exports = {
  devServer: {
    liveReload: true,
    watchFiles: [
      path.resolve(__dirname, "..", "app2", "build"),
      path.resolve(__dirname, "..", "root-app", "build"),
    ],
  },
  plugins: [
    {
      plugin: cracoModuleFederation,
    },
  ],
};
