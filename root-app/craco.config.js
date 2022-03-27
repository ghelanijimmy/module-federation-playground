const cracoModuleFederation = require("craco-module-federation");

module.exports = {
  devServer: {
    devMiddleware: {
      writeToDisk: true,
    },
  },
  plugins: [
    {
      plugin: cracoModuleFederation,
    },
  ],
};
