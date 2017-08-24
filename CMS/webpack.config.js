module.exports = {
    entry: './app.js', 
    output: {
        path: __dirname + '/bundle', 
        filename: 'app.bundle.js',
    }, 
    devtool: 'source-map', 
    module: {
        loaders: [
            {
                test: /\.js$/, 
                exclude: /node_modules/, 
                loader: 'babel-loader', 
                query: {
                    presets: ['es2015', 'react']
                }
            }
        ]
    }
};