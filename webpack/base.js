const path = require("path")
const webpack = require("webpack")
const HtmlWebpackPlugin = require("html-webpack-plugin")

const dist = path.resolve(process.cwd(), "dist/")
const src = path.resolve(process.cwd(), "src/")
const htmlTemplate = path.resolve(src, "index.html")

module.exports["dist"] = dist
module.exports["src"] = src
module.exports["htmlTemplate"] = htmlTemplate
module.exports["config"] = {
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
    new HtmlWebpackPlugin({
      inject: "head",
      template: htmlTemplate
    }),
    new webpack.NoEmitOnErrorsPlugin()
  ],
  resolve: {
    extensions: [".js", ".jsx"]
  }
}
