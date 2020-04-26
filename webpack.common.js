const path = require('path');
const htmlwebpackplugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const dotenv = require('dotenv-webpack');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.join(__dirname, '/dist'),
        filename: 'index_bundle.js',
        publicPath: '/'
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            },
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.scss$/i,
                use: [
                    'style-loader', 'css-loader', 'sass-loader'
                ]
            }
        ]

    },

    plugins: [
        new htmlwebpackplugin({
            template: './public/index.html'
        }),
        new CleanWebpackPlugin(),
        new dotenv({
            path: './.env',
            safe: true,
            defaults: true
        })
    ]
};
