const path = require('path'),
    webpack = require("webpack"),
    CopyWebpackPlugin = require('copy-webpack-plugin'),
    ExtractTextPlugin = require("extract-text-webpack-plugin"),
    WebpackNotifierPlugin = require('webpack-notifier');


let base = {
    index: './app.js',


};

module.exports = {
    // devtool: 'source-map',
    target: "web",
    entry: base,
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js'
    },
    resolve: {
        alias: {
            // test: path.resolve(__dirname, 'test/test.js'),
            jquery: path.resolve(__dirname, './src/js/jquery.min.js')
        }
    },
    plugins: [
        new ExtractTextPlugin({
            filename: "[name].css",
            disable: false,
            allChunks: true
        }),
        new webpack.ProvidePlugin({
            $: 'jquery'
        }),
        require('autoprefixer')
    ],
    module: {
        rules: [{
            test: /\.js[x]?$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader'
            }
        },
        {
            test: /\.css$/,
            use: ExtractTextPlugin.extract({
                fallback: "style-loader",
                use: [{
                    loader: 'css-loader',
                }, {
                    loader: 'postcss-loader',
                }]

            }
            )
        },
        {
            test: /\.less$/,
            use: ExtractTextPlugin.extract({
                fallback: 'style-loader',
                use: ['css-loader', {
                    loader: 'less-loader',
                    options: {
                        sourceMap: true
                    }
                }]
            })
        },
        {
            test: /\.scss$/,
            use: ExtractTextPlugin.extract({
                fallback: 'style-loader',
                use: ['css-loader', {
                    loader: 'sass-loader',
                    options: {
                        sourceMap: true
                    }
                }]
            })
        },
        {
            test: /\.(png|jpg|jpeg|gif|woff|woff2|ttf|eot|svg|swf)$/,
            use: {
                loader: 'file-loader',
                options: {
                    name: '[name]_[sha512:hash:base64:7].[ext]'
                }
            }
        },
        {
            test: /\.html/,
            use: {
                loader: "html-loader",
                options: {
                    minimize: false,
                    attrs: false
                }
            }
        }
        ]
    }
};