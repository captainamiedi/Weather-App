const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    entry: './index.js',
    output: {
        path: __dirname + '/build',
        publicPath: '/',
        filename: 'bundle.js' },
    devServer: { contentBase: './build' },
    devtool: 'inline-source-map',
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ['babel-loader', 'eslint-loader']
                // options: {
                //     presets: ['es2015', 'react']
                // }
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }
        ]
    },
    plugins: [new HtmlWebpackPlugin({ template: path.resolve('./index.html') })]
};
// };
