const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "./static"),
    filename: "index_bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'assets/images/',
              publicPath: 'assets/images/',
            },
          },
        ],
      },
      {
        test: /\.fbx$/,
        use: 'raw-loader',
      },
      {
        test: /\.(mp3|ogg)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'assets/audio/',
              publicPath: 'assets/audio/',
      
            },
            
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "./src/index.html"),
      filename: path.resolve(__dirname, "./static/index.html"),
    }),
  ],
  devServer: {
    static: [
      { directory: path.join(__dirname, 'public'), watch: true },
      { directory: path.join(__dirname, 'static'), watch: true },
    ],
  }
};
