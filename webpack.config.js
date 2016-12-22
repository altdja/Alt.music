'use strict';

const path = require('path');
const webpack = require('webpack');
const ROOT_PATH = path.resolve(__dirname);

module.exports = {
    entry: "./client/app/app",
    output: {
        path: __dirname + '/client/public/',
        filename: "bundle.js"
    },
    module: {
      loaders: [
        {
          test: /\.js$/,
          loaders: ['babel'],
          exclude: /node_modules/
        },
        {
          test: /\.html$/,
          loader: 'raw'
        },
        {
          test: /\.css$/,
          loaders: [
              'style',
              'css?importLoaders=2&localIdentName=[name]__[local]__[hash:base64:5]',
              'postcss'
          ]
        }
      ]
    },
    stats: {
        colors: true,
        reasons: true
    },
    debug: true,
    // devtool: 'source-map',
    devServer:{
        historyApiFallback: true,
        inline: true
    },
    plugins: [
        // new webpack.optimize.UglifyJsPlugin({minimize: true}),
        // new ExtractTextPlugin("styles.css")
    ]
};
