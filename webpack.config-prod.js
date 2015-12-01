var path = require("path");
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: {
        app: ["./src/main.js"]
    },
    output: {
        path: path.resolve(__dirname, "dist"),
        publicPath: "dist",
        filename: "[name].bundle.js"
    },
    module: {
        loaders: [
            { test: /\.scss$/, loader: ExtractTextPlugin.extract("style", 'css?sourceMap!autoprefixer!sass?sourceMap') },
            { test: /\.css$/, loader: ExtractTextPlugin.extract("style", 'css?sourceMap') },
            { test: /\.js$/, exclude: /(node_modules|bower_components)/, loader: 'babel' },
            { test: /\.jpe.*?g$|\.gif.*$|\.png.*$|\.svg.*$|\.woff.*$|\.ttf.*$|\.eot.*$/, loader: "url" }
        ]
    },
    plugins: [
        new ExtractTextPlugin("main.scss", "css/styleguide.css")
    ]
};
