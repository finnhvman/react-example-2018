const webpack = require('webpack');

module.exports = {
    devServer: {
        contentBase: __dirname + '/src',
        compress: true,
        hot: true,
        port: 9000
    },
    entry: [
        './src/index.js'
    ],
    module: {
        rules: [
            {
                test: /\.js$/
            }
        ]
    },
    output: {
        filename: 'bundle.js',
        path: __dirname + '/dist',
        publicPath: '/'
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ],
    target: 'web'
};