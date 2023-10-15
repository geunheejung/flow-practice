const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const path = require("path");

const alias = {
  "@": path.resolve(__dirname, "src/"),
  "@components": path.resolve(__dirname, "src/components/"),
  "@pages": path.resolve(__dirname, "src/pages/*"),
  "@utils": path.resolve(__dirname, "src/utils/*"),
};

console.log(alias);
module.exports = {
  entry: "./src/index.tsx",
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx"],
    alias: {
      "@": path.resolve(__dirname, "src/"),
      "@components": path.resolve(__dirname, "src/components/"),
      "@pages": path.resolve(__dirname, "src/pages/"),
      "@utils": path.resolve(__dirname, "src/utils/"),
    },
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.tsx?$/,
        use: ["babel-loader", "ts-loader"],
      },
      {
        test: /\.(png|jpe?g|gif)$/,
        use: [
          {
            loader: "file-loader",
          },
        ],
      },
    ],
  },
  output: {
    path: path.join(__dirname, "/dist"),
    filename: "bundle.js",
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
    new CleanWebpackPlugin(),
  ],
};
