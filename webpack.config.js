const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    context: __dirname,
    entry: './src/app.js',
    output: {
        path: __dirname + '/public',
        filename: 'app.js'
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "src/index.html"
        })
    ],
    module: {
        rules: [
            {
                test: /\.?js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react']
                    }
                }
            },
        ]
    }
}