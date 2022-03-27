const deps = require("./package.json").dependencies;
module.exports = {
  name: "store",
  filename: "remoteEntry.js",
  exposes: {
    "./Store": "./src/bootstrap.js",
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

//shared: [
//         "react",
//         "react-dom",
//         {
//           "@shared-context/shared-library": {
//             import: "@shared-context/shared-library",
//             requiredVersion: require("../shared-library/package.json").version,
//           },
//         },
//       ],
