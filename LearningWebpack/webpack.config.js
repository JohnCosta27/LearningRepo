const path = require('path');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const config = {
    entry: './src/index.js',
    mode: "development",
    output: {
        filename: 'awesome.js',
        path: path.resolve(__dirname, 'dist')
    },
    plugins: [
        new BundleAnalyzerPlugin()
    ],
    devServer: {
        contentBase: path.join(__dirname, 'public'),
        port: 3000
    }
};

module.exports = config;