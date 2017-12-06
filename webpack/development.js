const { config, htmlTemplate } = require("./base")
const merge = require("webpack-merge")
const webpack = require("webpack")

module.exports = merge(config, {
  devServer: {
    overlay: true,
    port: 3000
  },
  devtool: "#cheap-module-eval-source-map",
  plugins: [new webpack.HotModuleReplacementPlugin(), new HtmlWebpackPlugin({
    template: htmlTemplate
  }),]
})
