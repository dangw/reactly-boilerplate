require('babel/register');

var path = require('path');
var webpack = require('webpack');
var ReactRenderPlugin = require('react-render-plugin');
var assign = require('object-assign');

module.exports = {
    devtool: 'source-map',
    entry: {
        dev: [
            'webpack-dev-server/client?http://localhost:3000',
            'webpack/hot/only-dev-server',
            'react-hot-loader'
        ],
        client: [
            './src/index'
        ],
        vendor: [
            'react',
            'reactly'
        ]
    },
    output: {
        path: path.join(__dirname, 'dist'),
        filename: '[name].js',
        publicPath: '/dist/'
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.optimize.CommonsChunkPlugin("vendor", "vendor.js"),
        new ReactRenderPlugin({
            component: path.join(__dirname, './src/html.jsx'),
            props: assign({dev: true}, require('./src/data')),
            output: path.join(__dirname, './dist/index.html'),
            hot: path.join(__dirname, './src')
        })
    ],
    module: {
        loaders: [{
            test: /\.jsx?$/,
            loaders: ['react-hot', 'babel'],
            include: path.join(__dirname, 'src')
        }]
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    }
};
