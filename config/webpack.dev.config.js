const { merge } = require('webpack-merge');
const path = require('path');
const baseConfig = require('./webpack.base.config');

module.exports = merge(baseConfig, {
    mode: 'development',
    devServer: {
        static: {
            directory: path.join(__dirname, '..', 'dist'),
        },
        compress: true,
        port: 9000,
    },
    devtool: 'eval-source-map',
});