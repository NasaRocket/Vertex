const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WasmPackPlugin = require('@wasm-tool/wasm-pack-plugin');

module.exports = {
    entry: './src/index.tsx',
    module: {
        rules: [
            {
                test: /\.(js|jsx|ts|tsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        configFile: './config/.babelrc',
                    },
                },

            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.less$/,
                use: ['style-loader', 'css-loader', 'less-loader'],
            },
            {
                test: /\.s[ac]ss$/,
                use: ['style-loader', 'css-loader', 'sass-loader'],
            },
            {
                test: /\.(png|jpg|gif|svg)$/,
                use: ['file-loader'],
            },
            {
                test: /\.txt$/,
                use: ['raw-loader'],
            },
            {
                test: /\.rs$/,
                use: {
                    loader: 'rust-loader',
                    options: {
                        release: true,
                    },
                },
            },
            // {
            //     test: /\.wasm$/,
            //     type: 'webassembly/async',
            //     use: [
            //         'wasm-loader',
            //         path.resolve( './config/wasm-opt-loader.js'),
            //     ],
            // },
        ],
    },
    resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
        alias: {
            '@infra': path.resolve( 'src/infra/'), // 指向项目根目录下的infra目录
        },
    },

    experiments: {
        asyncWebAssembly: true, // Enable the experimental WebAssembly support
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html',
        }),
        new WasmPackPlugin({
            crateDirectory: path.resolve(__dirname, '..', 'wasm'),
        }),
    ],
};