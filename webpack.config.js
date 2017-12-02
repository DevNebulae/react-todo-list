const path = require("path")
const webpack = require("webpack")
const HtmlWebpackPlugin = require("html-webpack-plugin")

const dist = path.resolve(process.cwd(), "dist/")
const src = path.resolve(process.cwd(), "src/")

module.exports = {
  devtool: "#cheap-module-eval-source-map",
  devServer: {
    port: 3000
  },
  entry: {
    app: path.resolve(src, "index.js")
  },
  module: {
    rules: [
      {
        test: /css$/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /jsx?$/,
        use: ["babel-loader"],
        exclude: /node_modules/
      }
    ]
  },
  output: {
    filename: "[name].min.js",
    path: dist
  },
  plugins: [
    new HtmlWebpackPlugin({ template: path.resolve(src, "index.html") }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
  ],
  resolve: {
    extensions: [".js", ".jsx"]
  }
}
