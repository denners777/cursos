var webpack = require('webpack');

module.exports = {
    entry: ['./app/app'],
    output: {
        path: __dirname + '/build',
        filename: 'bundle.js',
        publicPath: '/build/',
    },
    plugins: [
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
        })
    ],
    module: {
        loaders: [
            {
                test: /\.js?$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015']
                }
            },
            {
                test: /\.(png|woff|woff2|eot|ttf|svg)$/,
                loader: 'url-loader?limit=100000'
            }
        ]
    }
};