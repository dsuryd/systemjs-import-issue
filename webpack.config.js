const path = require("path");

module.exports = {
  mode: "development",
  entry: {
    module1: "./module1.ts",
    module2: "./module2.ts"
  },
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "wwwroot"),
    libraryTarget: "umd"
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"]
  },
  module: {
    rules: [{ test: /\.tsx?$/, use: "ts-loader", exclude: /node_modules/ }]
  },
  devServer: {
    static: {
      directory: path.join(__dirname, "wwwroot")
    },
    compress: true,
    port: 9000
  }
};
