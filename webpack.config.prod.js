const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    devServer: {
        contentBase: __dirname + '/dist',
        compress: true,
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
        new CleanWebpackPlugin('dist'),
        new CopyWebpackPlugin([
            { from: './src/index.html', to: 'index.html' }
        ])
    ],
    target: 'web'
};
