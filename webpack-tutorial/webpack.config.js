var HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');

/*
* CommonJS 스펙의 모듈 전체를 배포하는 방법
(export, require는 CommonJS 스펙)
=> es6에서 exprot, import로 변경
 */
module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.css$/i,    // test에는 정규표현식이 들어감. true/false를 판단하는 predicate 역할
                // css-loader은 css 파일을 javascript 변수로 만들어서 string으로 변경해줌, style-loader는 변수를 꺼내와서 style 태그(css)로 만들어줌.
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                    'postcss-loader'
                ]
            },
            {
                test: /\.s[ac]ss$/i,    // .sass 혹은 .scss
                use: [
                    // Creates `style` nodes from JS strings
                    MiniCssExtractPlugin.loader,    // style-loader 대신 사용
                    // Translates CSS into CommonJS
                    'css-loader',
                    'postcss-loader',
                    // Compiles Sass to CSS
                    'sass-loader',
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin(),
        new MiniCssExtractPlugin()
    ]
}