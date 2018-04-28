'use strict';

const _ = require('lodash');
const webpack = require('webpack');
const baseConfig = require('./webpack.config.base.js');
const pkg = require('../package.json');

baseConfig.output.publicPath = pkg.publishConfig.prodResourcesPath;
baseConfig.bail = true;

(baseConfig.plugins || (baseConfig.plugins = [])).push(
    new webpack.DefinePlugin({
        DEVELOPMENT: false,
        DAILY: false,
        PUBLISH: true,
        publicPath: JSON.stringify(baseConfig.output.publicPath),
        'process.env.NODE_ENV': '"production"'
    }),

    // 支持ie8配置，参考：
    // https://www.maizhiying.me/posts/2017/03/01/webpack-babel-ie8-support.html
    new webpack.optimize.UglifyJsPlugin({
        compress: {
            warnings: false,
            properties: false,
            drop_console: true
        },
        output: {
            keep_quoted_props: true,
            comments: false
        },
        mangle: {
            screw_ie8: false,
            except: ['e']
        }
    })
    
)

module.exports = baseConfig;
