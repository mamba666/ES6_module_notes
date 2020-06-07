const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")

const htmlPlugin = new HtmlWebpackPlugin({
  // 指定要用到的模板文件
  template: "./src/index.html",
  // 指定生成的文件名称
  filename: "index.html"
})

const VueLoaderPlugin = require("vue-loader/lib/plugin")

module.exports = {
  mode: "development",  //指定构建模式
  // __dirname为webpack.config.js的绝对路径
  entry: path.join(__dirname, "./src/index.js"),
  output: {
    path: path.join(__dirname, "./dist"),
    filename: "bundle.js"
  },
  // webpack打包期间会用到的插件
  plugins: [
    htmlPlugin,
    new VueLoaderPlugin()
  ],
  module: {
    rules: [
      { test: /\.css$/, use: ["style-loader", "css-loader", "postcss-loader"] },
      { test: /\.less$/, use: ["style-loader", "css-loader", "less-loader", "postcss-loader"] },
      { test: /\.sass$/, use: ["style-loader", "css-loader", "sass-loader", "postcss-loader"] },
      {
        test: /\.(jpg|png|gif|bmp|ttf|eot|svg|woff|woff2)$/i, use: [{
          loader: "url-loader",
          options: {
            // 如果图片大小小于limit的值，就会转成base64,会让图片加载更快
            // 儒过图片大于等于limit的值，就不会转成base64
            limit: 31428550
          }
        }]
      },
      { test: /\.js$/, use: "babel-loader", exclude: /node_modules/ },
      { test: /\.vue$/, use: "vue-loader" }
    ]
  }
}