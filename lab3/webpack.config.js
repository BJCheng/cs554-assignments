var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: './main.js',
    output: {
        path: path.resolve('public/js'),
        filename: 'webpack.js'
    },
    module: {
        rules: [
            {
                test: path.resolve('main.js'),
                loader: 'babel-loader'
            }
        ]
    },
    plugins: [
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery",
            Tether: 'tether'
        })
    ]
}