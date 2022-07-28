const path = require("path");
const webpack = require("webpack");
/**
 * placeholders available in webpack
 * [hash]
 * [chunkhash]
 * [name]
 * [id]
 * [query]
 * [contenthash]
 */
module.exports = {
  mode: "development",
  entry: {
    myfile: "./src/index.js",
  },
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "js/main.js", // js/1.js (node_module) ; js/2.js (you wrote) js/3.js (node_module)
    publicPath: "/assets/", // https://sever.com/assets/js/1.js
    //  libraryTarget: "umd", //"commonjs" ,"amd", 'var',
    //  library: "myFirstLibrary",
  },
  devServer: {
    port: 1234,
    static: path.join(__dirname, "dist"),
    //writeToDisk: true,
    hot: true,
  },
  plugins: [new webpack.HotModuleReplacementPlugin()],
};
