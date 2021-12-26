const path = require('path');

const webpack = require('webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const pkg = require('./package.json');

const isDev = process.env.NODE_ENV !== 'production';

const capitalizeWord = (s) => s.charAt(0).toUpperCase() + s.slice(1);

const GAME_NAME = pkg.name.split('-').map(capitalizeWord).join(' ');
const GAME_VERSION = pkg.version;

const config = {
    mode: isDev ? 'development' : 'production',
    devtool: isDev ? 'inline-source-map' : false,
    stats: 'minimal',
    entry: {
        main: './src/index.js',
    },
    output: {
        filename: '[name].[chunkhash].js',
        path: path.join(__dirname, 'dist'),
    },
    module: {
        rules: [
            {
                test: /\.js/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                    },
                },
            },
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                type: 'asset/resource',
            },
        ],
    },
    plugins: [
        new webpack.DefinePlugin({
            CANVAS_RENDERER: JSON.stringify(true),
            WEBGL_RENDERER: JSON.stringify(true),
            GAME_NAME: JSON.stringify(GAME_NAME),
            GAME_VERSION: JSON.stringify(GAME_VERSION),
        }),
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            title: GAME_NAME,
        }),
    ],
};

if (!isDev) {
    config.performance = {
        maxEntrypointSize: 2000000, // 2MB
        maxAssetSize: 2000000, // 2MB
    };
    config.optimization = {
        splitChunks: {
            cacheGroups: {
                vendor: {
                    test: /[\\/]node_modules[\\/](phaser)[\\/]/,
                    name: 'vendor',
                    chunks: 'all',
                },
            },
        },
    };
}

if (isDev) {
    config.devServer = {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        port: 3000,
    };
}

module.exports = config;
