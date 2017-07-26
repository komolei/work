const path = require('path'),
    webpack = require("webpack"),
    CopyWebpackPlugin = require('copy-webpack-plugin'),
    ExtractTextPlugin = require("extract-text-webpack-plugin"),
    WebpackNotifierPlugin = require('webpack-notifier');


let base = {
    index: './index.js',
};

module.exports = {
    // devtool: 'source-map',
    target: "web",
    entry: base,
    output: {
        path: path.resolve(__dirname, 'dist'),
        // publicPath:'',
        publicPath:'../assets/',
        filename: '[name].js',

    },
    devServer:{
        contentBase:"./assets/html"
    },
    resolve: {
        alias: {
            // test: path.resolve(__dirname, 'test/test.js'),
            jquery: path.resolve(__dirname, './assets/js/jquery.min.js')
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
        // new webpack.LoaderOptionsPlugin({
        //     options: {
        //         postcss: function() {
        //             return [
        //                 require('autoprefixer')({
        //                     broswers: ['last 5 versions']
        //                 })
        //             ]
        //         }
        //     }
        // })
    ],
    //平时搭配的指南 http://www.cnblogs.com/ihardcoder/p/7216345.html
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
                            // options: {
                            //     // config: {
                            //     //     path: './postcss.config.js'
                            //     // }
                            // }
                        }]
                        // use: ['css-loader', 'postcss-loader']
                })
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
                    }, ]
                })
            },
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    // use: ['css-loader', {
                    //     loader: 'sass-loader',
                    //     options: {
                    //         sourceMap: true
                    //     }
                    // }, 'postcss-loader']
                    use: ['css-loader', {
                        loader: 'postcss-loader',
                        options: {
                            sourceMap: true,
                        }
                    }, {
                        loader: 'sass-loader',
                    }, ]
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
            // {
            //     test: /\.html/,
            //     use: {
            //         loader: "html-loader",
            //         options: {
            //             minimize: false,
            //             attrs: false
            //         }
            //     }
            // },
            // {
            //     test: /\.css$/,
            //     use: ExtractTextPlugin.extract({
            //         fallback: "style-loader",
            //         // use: [{
            //         //         loader: 'css-loader',
            //         //     }, {
            //         //         loader: 'postcss-loader',
            //         //     }]
            //         use: ['css-loader', 'postcss-loader', ]
            //     })
            // },

        ]
    },
    // postcss: [autoprefixer()],
};