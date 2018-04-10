var webpack = require('webpack');
var path = require('path');
var config = require('./package.json').config;
var BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
var env = process.env.NODE_ENV || 'development';


var webpackConfig = {
    mode: env,
    context: path.join(__dirname, config.src.js),
    entry: {
        app: './app.js'
    },
    output: {
        path: path.join(__dirname, config.build.js),
        filename: '[name].js',
        publicPath: 'js/'
    },
    plugins: [
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery",
            'window.jQuery': "jquery"
        }),
        new webpack.NoEmitOnErrorsPlugin(),

        new BundleAnalyzerPlugin({
            analyzerMode: 'static',
            analyzerPort: 4000,
            openAnalyzer: false
        })
    ],
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