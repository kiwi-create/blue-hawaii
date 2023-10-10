const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    entry: './src/index.js',
    output: {
      filename: '_compile.js',
      path: path.resolve(__dirname, 'css'),
    },
    module: {
      rules: [
        {
          test: /\.(scss|sass|css)$/i,
          use: [ MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader' ],
        },
      ],
    },
    plugins: [
      new MiniCssExtractPlugin({
        filename: 'style.css',
      }),
    ],
    watchOptions: {
      ignored: /node_modules/
    },
  };