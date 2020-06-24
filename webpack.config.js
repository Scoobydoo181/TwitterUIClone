const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')  //html -> file
const MiniCSSExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
  mode: "production",
  entry: ["./src/index.js", "./public/sass/stylesheet.sass"],
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,  //React -> ESNext -> ES5
        exclude: /node_modules/,
        loader: "babel-loader",
        options: {
          presets: ["@babel/preset-env", "@babel/preset-react"],
        }
      },
      {
        test: /.(png|jpe?g|gif|ico)$/, //image -> file
        loader: 'file-loader',
        options: {
          name: '[name].[ext]'
        }
      },
      {
        test: /\.s[ca]ss$/,   //SASS -> CSS -> file
        use: [
          {
            loader: MiniCSSExtractPlugin.loader
          },
          {
            loader: 'css-loader'
          },
          {
            loader: 'sass-loader'
          }
        ]
      }
    ]
  },
  resolve: {
      extensions: ['.js', '.jsx', '.sass'],
      alias: {
        public: '../../public/'
      }
  },
  devServer: {
    hotOnly: true
  },
  plugins: [new HTMLWebpackPlugin({template: 'public/index.html', favicon: 'public/favicon.ico'}), new MiniCSSExtractPlugin({filename: 'stylesheet.css'})]

};