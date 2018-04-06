var webpack = require('webpack');
var path = require('path');
var config = require('./package.json').config;

var webpackConfig = {
    context: path.join(__dirname, config.src.js),
    entry: {
        app: './app.js'
    },
    output: {
        path: path.join(__dirname, config.build.js),
        filename: '[name].js',
        publicPath: 'js/'
    },
    plugins: [],
    module: {
        rules: [{
            test: /\.js$/,
            loader: 'babel-loader',
            exclude: [
                path.resolve(__dirname, "node_modules")
            ]
        }]
    }
};

module.exports.webpackConfig = webpackConfig;