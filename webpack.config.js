const webpack = require("webpack");
const path = require('path');

module.exports = {
    mode: 'production',
    entry: './src/entry.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'simulation.js',
        libraryTarget: "umd",
        library: "Simulation",
    },
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/
        }]
    }
};