/**
 * Created by musbell on 2/27/16.
 */
var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: "./script.js",
    output: {
        path: __dirname,
        filename: "bundle.js"
    },
    module: {
        loaders: [
            {
                test: /.jsx?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: ['es2015', 'react']
                }
            },
            {
                test: /\.css$/, // Only .css files
                loader: 'style!css' // Run both loaders
            },
            {
                test: /\.scss$/,
                loader: 'style!css!sass'
            },
            {test:/\.js?/, loader: "babel-loader", exclude: /node_modules/,query: {
                presets: ['es2015', 'react']
            }}
        ]
    },
    resolve: {
        // you can now require('file') instead of require('file.coffee')
        extensions: ['', '.js', '.json', '.coffee']
    }
};





