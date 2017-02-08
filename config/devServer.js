/**
 * User: xpliu
 * Date: 2017/2/8 15:06
 * 创建原因：
 */
const express = require('express');
const webpack = require('webpack');
const webpackDevMiddle = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const DashboardPlugin = require('webpack-dashboard/plugin');
const config = require('./webpack.config.dev');

const PORT = process.env.PORT || 3000;
const app = express();
const compiler = webpack(config);

compiler.apply(new DashboardPlugin());

app.use(webpackDevMiddle(compiler, {
  publicPath: config.output.publicPath,
  stats: {
    colors: true,
    hash: false,
    timings: true,
    chunks: false,
    chunkModules: false,
    modules: false,
  },
  historyApiFallback: true
}));

app.use(webpackHotMiddleware(compiler));

app.listen(PORT, (err) => {
  if (err) {
    console.error(err);
    return;
  }

  console.log(`Listening on port ${PORT}`);
});

