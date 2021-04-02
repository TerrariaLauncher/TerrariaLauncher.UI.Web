const { merge } = require('webpack-merge');
const common = require('./webpack.configs.common.cjs');

module.exports = merge(common, {
    mode: 'production'
});
