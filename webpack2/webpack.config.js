// const path = require("path"),
//     webpack = require("webpack");
const path = require("path"),
    ExtractTextPlugin = require("extract-text-webpack-plugin");
// autoprefixer = require("autoprefixer");
let base = {
    index: "./app.js",
    // index1: "./app1.js"
}
module.exports = {
    entry: base,
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "[name].js"
    },
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            // use: {
            //     loader: "babel-loader",
            //     options: {
            //         "presets": ["env"],
            //         // ["env",
            //         // {
            //         //     "targets": {
            //         //         "browsers": ["last 2 versions", "safari >= 7"]
            //         //     }
            //         // }
            //         // ]
            //         // ],
            //     }
            // }
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['env']
                }
            }
        },
        // {
        //     test: /\.css$/,
        //     use: ["style-loader", "css-loader", {
        //         loader: "postcss-loader",
        //         options: {
        //             plugins: [
        //                 require('autoprefixer')({
        //                     // browser:["last 5 versions"]
        //                     "browserslist": [">1%", "last 5 versions"]
        //                 })
        //             ]
        //         }
        //     }]
        // },
        {
            test: /\.css$/,
            use: ExtractTextPlugin.extract({
                fallback: "style-loader",
                use: ["css-loader", {
                    loader: "postcss-loader",
                    // options: {
                    //     plugins: [
                    //         // require("autoprefixer")({
                    //         //     "browserslist": [">1%", "last 0 versions"]
                    //         // })
                    //         require("autoprefixer")
                    //     ]
                    // }
                }]
            })
        },
        // {
        //     test: /\.scss$/,
        //     use: ["style-loader", "css-loader", "postcss-loader", {
        //         loader: "sass-loader", options: {
        //             sourceMap: true,
        //         }
        //     }]
        // },
        // 抽离sass的样式
        {
            test: /\.scss$/,
            use: ExtractTextPlugin.extract({
                fallback: "style-loader",
                use: ["css-loader", {
                    loader: "postcss-loader", options: {
                        sourceMap: true,
                    }
                }, "sass-loader"]
            })
        },
        {
            test: /\.less$/,
            use: ExtractTextPlugin.extract({
                fallback: "style-loader",
                use: [{
                    loader: "css-loader", options: {
                        sourceMap: true,
                    }
                }, "postcss-loader", {
                    loader: "less-loader",
                }]
            })
        },
        // {
        //     test: /\.less$/,
        //     use: [{
        //         loader: "less-loader"
        //     }, {

        //     }]
        // },
        {
            test: /\.(png|jpg|jpeg|gif|woff|woff2|ttf|eot|svg|swf)$/,
            use: {
                loader: "file-loader",
            }
        }

        ]

    },
    plugins: [
        new ExtractTextPlugin("[name].css"),
        // new autoprefixer("./dist/index.css")
        // 这个输出的名称跟entry中的名字相同，如上面写的是index，则输出为index,但这针对单文件入口文件而言，多文件会怎么样，尝试一下。
        //测试一下，跟上面的文件名设置一样，index, index1，这是分开的。
    ]

}