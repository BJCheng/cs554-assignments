module.exports = {
    entry: './src/js/main-component.react.js',
    output: {
        path: __dirname + '/dist/js/',
        filename: 'app.bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader', 
                query: {
                    presets: ['react', 'es2015']
                }
            }, 
            {
                test: /\.css$/, 
                exclude: /node_modules/, 
                loaders: ['style-loader', 'css-loader']
            }
        ]
    }
}