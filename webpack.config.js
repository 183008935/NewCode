const path = require("path");
// 导入在内存中生成的HTML插件  只要是插件都一定要放在plugin插件中去
const htmlWebpackPlugin = require("html-webpack-plugin");
// 提取分离打包css
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
module.exports = {
  // mode: "production",
  entry: "./src/index.js",
  output: {
    filename: "build.js",
    path: path.join(__dirname, "dist")
  },
  devServer: {
    contentBase: "./dist",
    port: 3000,
    hot: true
  },
  module: {
    rules: [
      {
        test: /\.(css|less)$/i,
        use: [
          "style-loader",
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: {
              sourceMap: true
            }
          },

          {
            loader: "postcss-loader",
            options: {
              // 如果没有options这个选项将会报错 No PostCSS Config found
              plugins: [
                require("autoprefixer") //CSS浏览器兼容
              ]
            }
          },
          {
            loader: "less-loader",
            options: {
              sourceMap: true
            }
          }
        ],
        exclude: /node_modules/ //node_modules中的模块不会执行，加快打包
      },
      {
        test: /\.(js|jsx)$/i,
        exclude: /node_modules/, //node_modules中的模块不会执行，加快打包
        use: {
          loader: "babel-loader",
          options: {
            cacheDirectory: true, //防止二次编译
            presets: [
              ["@babel/preset-env", { modules: false }],
              "@babel/preset-react"
            ]
          }
        }
      }
    ]
  },
  plugins: [
    new htmlWebpackPlugin({
      //创建一个在内存中生成html插件
      template: path.join(__dirname, "/index.html"), // 指定模板页面, 将来会根据指定的页面路径, 去生成内存中的页面
      filename: "index.html" // 指定生成内存中的页面
    }),
    new MiniCssExtractPlugin({
      filename: "[name].[chunkhash:8].css",
      chunkFilename: "[id].css"
    })
  ]
};
