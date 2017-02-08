/**
 * User: xpliu
 * Date: 2017/2/8 15:06
 * 创建原因：
 */
const path = require('path');
const autoprefixer = require('autoprefixer');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const ProgressBarPlugin = require('progress-bar-webpack-plugin');

module.exports = {
  context: path.join(__dirname, '../src'),

  entry: {
    app: [
      'webpack-hot-middleware/client?reload=true',
      'react-hot-loader/patch',
      './app/index.js',
    ],
    vendors: [
      'react',
      'react-dom',
      'react-router',
      'redux',
      'react-redux',
      'react-router-redux',
      'antd',
      'redux-logger'
    ],
  },

  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].[hash].min.js',
    publicPath: '/',
    sourceMapFilename: '[name].[hash].js.map',
    chunkFilename: '[id].[hash].min.js',
  },

  devtool: 'cheap-module-eval-source-map',

  plugins: [
    new ProgressBarPlugin(),
    new HtmlWebpackPlugin({
      template: './index.html',
      inject: 'body',
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.optimize.CommonsChunkPlugin({name:'vendors', fileName:'[name].[hash].min.js'}),
    new webpack.optimize.OccurrenceOrderPlugin(true),
    new ExtractTextPlugin('[name].css'),
    new webpack.DefinePlugin({
      'process.env': { NODE_ENV: JSON.stringify(process.env.NODE_ENV || 'development') },
      __DEV__: JSON.stringify(JSON.parse(process.env.DEBUG || 'true'))
    }),
  ],

  module: {
    loaders: [
      {
        test: /\.css$/,
        include: path.join(__dirname, 'src'),
        loader: ExtractTextPlugin.extract(({ fallbackLoader: 'style-loader', loader: '!css-loader!postcss-loader' }) ),
      },
      {
        test: /\.css$/,
        exclude: path.join(__dirname, 'src'),
        loader: 'style!css',
      },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract({ fallbackLoader: 'style-loader', loader:'css-loader!postcss-loader!sass-loader'}),
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loaders: ['babel'],
      },
      {
        test: /\.json$/,
        loader: 'json-loader',
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg)$/,
        loader: 'url-loader?prefix=img/&limit=10000',
      },
      {
        test: /\.(woff|woff2|ttf|eot)$/,
        loader: 'url-loader?prefix=font/&limit=10000',
      },
    ],
  },

  postcss: [autoprefixer],

  resolve: {
    extensions: ['', '.js', '.jsx'],
  },
};

