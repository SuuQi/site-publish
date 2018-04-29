'use strict';

const path = require('path');
const URL = require('url');
const gulp = require('gulp');
const plugins = require('gulp-load-plugins');
const $ = plugins();
const reallyWebpack = require('webpack');
const browserSync = require('browser-sync').create();
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpack = require('gulp-webpack');
const util = require('gulp-util');
const del = require('del');
const ansiHtml = require('ansi-html');

// 清理发布目录
gulp.task('clean', done => {
    del.sync([ '../dist/**/*' ], { 'force': true });
    return done();
});

// 清理临时目录
gulp.task('clean_tmp', done => {
    del.sync([ '../.tmp/**/*' ], { 'force': true });
    return done();
});

// 本地开发
gulp.task('serve', () => {
    const webpackConfig = require('./webpack.config.dev.js');
    const compiler = reallyWebpack(webpackConfig);

    browserSync.init({
        // server: path.join(__dirname, '../src/'),
        proxy: 'http://localhost:9000',
        https: false,
        middleware: [
            webpackDevMiddleware(compiler, {
                publicPath: webpackConfig.output.publicPath,
                noInfo: false,
                stats: {
                    colors: true,
                    timings: true,
                    chunks: false
                }
            })
        ],
        plugins: [require('bs-fullscreen-message')]
    });

    compiler.plugin('done', stats => {
        if (stats.hasErrors() || stats.hasWarnings()) {
            return browserSync.sockets.emit('fullscreen:message', {
                title: 'Webpack Error:',
                body: ansiHtml(stats.toString()),
                timeout: 100000
            });
        }
        browserSync.reload();
    });
});

// 代码校验
gulp.task('eslint', () => {
    return gulp.src(['../src/**/*.js', '!../src/assets/**'])
        .pipe($.eslint())
        .pipe($.eslint.format())
        .pipe($.eslint.failAfterError());
});

gulp.task('copy:dist', () => {
    return gulp.src('../src/assets/**/*')
        .pipe(gulp.dest('../dist/assets/'));
});

// 正式打包
gulp.task('dist:prod', ['clean', 'eslint', 'copy:dist'], () => {
    const webpackConfig = require('./webpack.config.prod.js');
    const styleFilter = $.filter(file => /\.css$/.test(file.path), { restore: true });
    const scriptFilter = $.filter(file => /\.js$/.test(file.path), { restore: true });

    return gulp.src('../src/**/*.js')
        .pipe(webpack(webpackConfig, reallyWebpack, (err, stats) => {
            if (err) throw new util.PluginError('webpack:build', err);

            util.log('[webpack:build]', stats.toString({
                colors: true
            }));
        }))
        .pipe(styleFilter)
        .pipe($.cleanCss({ compatibility: 'ie8' }))
        .pipe(styleFilter.restore)
        .pipe(scriptFilter)
        .pipe($.es3ify())
        .pipe(scriptFilter.restore)
        .pipe(gulp.dest('../dist/'));
});
