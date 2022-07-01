const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { merge } = require("webpack-merge");

const defaultConfig = {
  entry: path.resolve(__dirname, "src", "index.tsx"),
  output: {
    filename: "[name].bundle.js",
    path: path.join(__dirname, "/dist"),
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: [
          {
            loader: "babel-loader",
          },
          {
            loader: "ts-loader",
          },
        ],
        include: [path.resolve(__dirname, "src")],
        exclude: /node_modules/,
      },
      {
        test: /\.jsx?$/,
        loader: "babel-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.css$/i,
        use: [
          "style-loader",
          "css-loader",
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                plugins: ["postcss-preset-env"],
              },
              sourceMap: true,
            },
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx"],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "src", "index.html"),
    }),
  ],
};

module.exports = () =>
  process.env.NODE_ENV === "development"
    ? merge(defaultConfig, ...require("./webpack.config.dev"))
    : merge(defaultConfig, ...require("./webpack.config.prod"));
