var webpack = require('webpack');
var path = require("path");

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
            { test: /\.scss$/, loader: "style!css!autoprefixer!sass" },
            { test: /\.css$/, loader: "style!css" },
            { test: /\.js$/, exclude: /(node_modules|bower_components|lib)/, loader: 'babel' },
            { test: /\.jpe.*?g$|\.gif.*$|\.png.*$|\.svg.*$|\.woff.*$|\.ttf.*$|\.eot.*$/, loader: "url" }
        ]
    },
    devServer: {
        historyApiFallback: true,
        hot: true,
        inline: true,
        progress: true,
        host: process.env.HOST,
        port: process.env.PORT
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ]
};
