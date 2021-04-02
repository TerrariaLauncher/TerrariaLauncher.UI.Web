const path = require('path');
const configsPlugin = require('./webpack.configs.configs-plugin.cjs');

module.exports = {
    entry: {
        app: './src/index.jsx'
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            ['@babel/preset-env', {
                                modules: false, // preserve ES modules.
                                targets: 'last 2 Firefox versions'
                            }],
                            '@babel/preset-react'
                        ],
                        plugins: [
                            '@babel/plugin-proposal-nullish-coalescing-operator',
                            '@babel/plugin-proposal-optional-chaining'
                        ]
                    }
                }
            },
            {
                test: /\.css$/i,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            esModule: true,
                            modules: {
                                auto: /\.module\.\w+$/i,
                                mode: 'local',
                                localIdentName: '[path]__[name]__[local]',
                                exportLocalsConvention: 'camelCase'
                            }
                        }
                    }
                ]
            },
            {
                test: /\.scss$/i,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            esModule: true,
                            modules: {
                                auto: /\.module\.\w+$/i,
                                mode: 'local',
                                localIdentName: '[path]__[name]__[local]',
                                exportLocalsConvention: 'camelCase'
                            }
                        }
                    },
                    'sass-loader'
                ],
            },
            {
                test: /\.(png|jpe?g|gif|svg|eot|ttf|woff|woff2)$/i,
                type: "asset",
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    plugins: [
        configsPlugin
    ],
    output: {
        path: path.resolve(__dirname, 'public/assets/scripts'),
        publicPath: '/assets/scripts/',
        filename: 'bundle.js'
    }
};
