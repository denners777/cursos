module.exports = {
    entry: [
        'style!css!./node_modules/bootstrap/dist/css/bootstrap.min.css',
        './app/main',
    ],
    output: {
        path: __dirname + '/build',
        filename: 'bundle.js',
        publicPath: '/build/',
    },
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