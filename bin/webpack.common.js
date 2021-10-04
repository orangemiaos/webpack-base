const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: path.resolve(__dirname, "../src/index.js"),
  output: {
    path: path.resolve(__dirname, "../bundle"),
    filename: "[name].js",
    // filename: "bundle.js",
    // 自定义文件名
    assetModuleFilename: "images/[name]_[hash][ext]",
    // publicPath: "https://cdn.com",
    clean: true,
  },
  // devtool: "source-map",
  optimization: {
    splitChunks: {
      chunks: "async", // all async initial
      // cacheGroups: {
      //   default: false,
      // },
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./index.html",
    }),
  ],
  module: {
    rules: [
      // {
      //   test: /\.(jpg|jpeg|png|gif)$/,
      //   loader: "file-loader",
      //   options: {
      //     // 打包的格式，name原文件名，ext后缀名
      //     name: "[name].[ext]",
      //     // 打包在哪个文件夹下
      //     outputPath: "images/",
      //   },
      // },
      // {
      //   test: /\.(jpg|jpeg|png|gif)$/,
      //   use: [
      //     {
      //       loader: "url-loader",
      //       options: {
      //         limit: 8192,
      //       },
      //     },
      //   ],
      // },
      {
        test: /\.(jpg|jpeg|png|gif)$/,
        type: "asset",
        parser: {
          // 大小限制，webpack默认为8kb
          dataUrlCondition: {
            maxSize: 8 * 1024,
          },
        },
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader", "postcss-loader"],
      },
      {
        test: /\.less$/i,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              importLoaders: 0,
              // 0 => no loaders (default);
              // 1 => postcss-loader;
              // 2 => postcss-loader, sass-loader
              modules: true,
            },
          },
          "postcss-loader",
          "less-loader",
        ],
      },
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
    ],
  },
};
