const path = require("path");
const package = require("./package.json");
const dev = process.env.NODE_ENV !== "production";

module.exports = {
  entry: [path.join(__dirname, "/src/index.ts")],
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: "babel-loader",
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"],
  },
  output: {
    filename: `${package.name}.js`,
    path: path.join(__dirname, "/lib"),
  },
  mode: dev ? "development" : "production",
};
