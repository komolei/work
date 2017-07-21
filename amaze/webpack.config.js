const path = require("path")

let base = {
    index: "./index.js"
}
module.exports = {
    entry: base,
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js'
    },
    resolve: { 
        alias: {
            jquery: path.resolve(__dirname, "./assets/js/query.min.js")
        }
    },
  

}