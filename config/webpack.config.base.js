'use strict';

const webpack = require('webpack');
const path = require('path');
const pkg = require('../package.json');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const extractCSS = new ExtractTextPlugin('index_[contenthash:8].css');
const extractLESS = new ExtractTextPlugin('bundle_[contenthash:8].css');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        main: path.resolve(__dirname, '../src/index.jsx')
    },
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: '[name]_[chunkhash:8].js',
        chunkFilename: '[name]-[chunkhash:8].js',
        publicPath: ''
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel-loader!eslint-loader'
            },
            {
                test: /\.less$/,
                use: extractLESS.extract({
                    fallback: 'style-loader',
                    use: ['css-loader', 'autoprefixer-loader?remove=false', 'less-loader']
                })
            },
            {
                test: /\.css$/,
                use: extractCSS.extract({
                    fallback: 'style-loader',
                    use: ['css-loader', 'autoprefixer-loader?remove=false']
                })
            },
            {
                test: /\.(png|jpg|jpeg|gif|svg|woff|woff2|eot|ttf)$/,
                loader: 'url-loader?limit=10240&name=[name]_[hash:8].[ext]',
            },
            {
                test: /\.json$/,
                loader: 'json-loader'
            },
            {
                test: /\.ejs$/,
                use: 'ejs-loader'
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx', '.json']
    },
    externals: {
        
    },
    plugins: [
        new webpack.DefinePlugin({
            VERSION: JSON.stringify(pkg.version)
        }),
        new webpack.ProvidePlugin({
            _: 'lodash'
        }),
        extractCSS,
        extractLESS,
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: '../src/index.ejs',
            chunks: ['main'],
            inject: false
        })
    ]
};
