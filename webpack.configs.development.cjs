const path = require('path');
const { merge } = require('webpack-merge');
const common = require('./webpack.configs.common.cjs');

module.exports = merge(common, {
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        contentBase: path.resolve(__dirname, 'public'),
        publicPath: '/assets/scripts/',
        historyApiFallback: true,
        hot: true,
        watchOptions: {
            ignored: [
                'public/**',
                'node_modules/**'
            ]
        }
    }
});
