var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: './examples/index.js',
    output: {
        path: path.resolve(__dirname, 'examples'),
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                query: {
                    presets: ["env", "react", "stage-3"]
                }
            }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ],
    devServer: {
        hot: true,
        contentBase: './examples'
    },
    stats: {
        colors: true
    },
    devtool: 'source-map'
};
