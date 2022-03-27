const deps = require("./package.json").dependencies;
module.exports = {
  name: "app1",
  filename: "remoteEntry.js",
  remotes: {
    app2: "app2@http://localhost:3001/remoteEntry.js",
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
