const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    mode: "development",
    entry: path.resolve(__dirname, "src/index.js"),
    output: {
        path: path.resolve(__dirname,"dist"),
        filename: "bundle.js"
    },
    devServer: {
        static: {
            directory: path.resolve(__dirname, "dist")
        },
        port: 3000,
        open: true,
        hot: true,
        compress: true,
        historyApiFallback: true,
    },
    devtool: "source-map",
    plugins: [
        new HtmlWebpackPlugin({            
            template: path.resolve(__dirname,"src/template.html"),
        }),
    ],
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                }
            },
            {
                test: /\.css$/,
                exclude: /node_modules/,
                use: ["style-loader","css-loader"]
            }
        ]

    }
}