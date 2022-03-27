const deps = require("./package.json").dependencies;
module.exports = {
  name: "app2",
  filename: "remoteEntry.js",
  exposes: {
    "./App": "./src/App.js",
  },
  remotes: {
    app3: "store@http://localhost:3002/remoteEntry.js",
  },
  shared: [
    {
      react: {
        singleton: true,
        eager: true,
        requiredVersion: deps["react"],
      },
      "react-dom": {
        singleton: true,
        eager: true,
        requiredVersion: deps["react-dom"],
      },
    },
  ],
};
