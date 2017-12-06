const HtmlWebpackPlugin = require("html-webpack-plugin")
const { config, htmlTemplate } = require("./base")
const merge = require("webpack-merge")
const webpack = require("webpack")

module.exports = merge(config, {
  plugins: [
    new HtmlWebpackPlugin({
      inject: "head",
      minify: {
        collapseWhitespace: true
      },
      template: htmlTemplate
    }),
    new webpack.optimize.UglifyJsPlugin()
  ]
})
