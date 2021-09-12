const { merge } = require("webpack-merge");
const commonConfig = require("./webpack.common");
const webpack = require("webpack");

const config = {
  mode: "development",
  devServer: {
    // 告知 dev server，从什么位置查找文件
    static: "./bundle",
    // 服务启动后打开浏览器
    open: true,
    // 监听的端口号
    port: 8000,
    hot: true,
    // proxy: {
    //   "/api": "http://localhost:3000",
    // },
  },
  optimization: {
    usedExports: true,
  },
  plugins: [new webpack.HotModuleReplacementPlugin()],
};

module.exports = merge(commonConfig, config);
