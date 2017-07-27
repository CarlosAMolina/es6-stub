const nodeExternals = require('webpack-node-externals');

const baseConfig = require('./webpack.config');

module.exports = Object.assign({}, baseConfig, {
    target: 'node',
    externals: [nodeExternals()]
});