const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = function (env) {
    if (env === 'dev') {
        return {
            context: path.resolve(__dirname, './'),

            entry: './src/index.tsx',
            output: {
                filename: 'bundle.js',
                path: path.resolve(__dirname, 'dist'),
                publicPath: '/dist/'
            },

            resolve: {
                extensions: ['.js', '.jsx', '.ts', '.tsx', '.css', '.pcss']
            },

            devtool: 'source-map',

            module: {
                rules: [
                    {
                        enforce: 'pre',
                        test: /\.js$/,
                        loader: 'source-map-loader',
                        exclude: /node_modules/
                    },
                    {
                        enforce: 'pre',
                        test: /\.tsx?$/,
                        use: 'source-map-loader',
                        exclude: /node_modules/
                    },
                    {
                        test: /\.tsx?$/,
                        loader: 'awesome-typescript-loader',
                        exclude: /node_modules/
                    },
                    {
                        test: /\.pcss$/,
                        use: ExtractTextPlugin.extract(
                            {
                                fallback: 'style-loader',
                                use: [
                                    {
                                        loader: 'css-loader',
                                        options: {
                                            importLoaders: 1,
                                            sourceMap: true
                                        }
                                    },
                                    {
                                        loader: 'postcss-loader',
                                        options: {
                                            config: {
                                                ctx: {
                                                    cssnext: {}
                                                }
                                            },
                                            sourceMap: true
                                        }
                                    }
                                ]
                            }
                        ),
                        exclude: /node_modules/
                    }
                ]
            },

            plugins: [
                new ExtractTextPlugin('styles.css')
            ],

            externals: {
                'react': 'React',
                'react-dom': 'ReactDOM',
                'firebase': 'firebase'
            },

            devServer: {
                contentBase: [
                    path.join(__dirname, 'public'),
                    path.join(__dirname, 'node_modules/react/dist'),
                    path.join(__dirname, 'node_modules/react-dom/dist'),
                    path.join(__dirname, 'node_modules/firebase')
                ],
                compress: true,
                port: 4200,
                publicPath: '/dist/',
                historyApiFallback: true
            }
        };
    }
    else if (env === 'prod') {
        return {
            context: path.resolve(__dirname, './'),

            entry: './src/index.tsx',
            output: {
                filename: 'bundle.js',
                path: path.resolve(__dirname, 'dist/prod'),
                publicPath: '/dist/prod/'
            },

            resolve: {
                extensions: ['.js', '.jsx', '.ts', '.tsx', '.css', '.pcss']
            },

            devtool: 'source-map',

            module: {
                rules: [
                    {
                        enforce: 'pre',
                        test: /\.js$/,
                        loader: 'source-map-loader',
                        exclude: /node_modules/
                    },
                    {
                        enforce: 'pre',
                        test: /\.tsx?$/,
                        use: 'source-map-loader',
                        exclude: /node_modules/
                    },
                    {
                        test: /\.tsx?$/,
                        loader: 'awesome-typescript-loader',
                        exclude: /node_modules/
                    },
                    {
                        test: /\.pcss$/,
                        use: ExtractTextPlugin.extract(
                            {
                                fallback: 'style-loader',
                                use: [
                                    {
                                        loader: 'css-loader',
                                        options: {
                                            importLoaders: 1,
                                            sourceMap: true,
                                            minimize: true
                                        }
                                    },
                                    {
                                        loader: 'postcss-loader',
                                        options: {
                                            config: {
                                                ctx: {
                                                    cssnext: {}
                                                }
                                            },
                                            sourceMap: true
                                        }
                                    }
                                ]
                            }
                        ),
                        exclude: /node_modules/
                    }
                ]
            },

            plugins: [
                new ExtractTextPlugin('styles.css')
            ],

            externals: {
                'react': 'React',
                'react-dom': 'ReactDOM',
                'firebase': 'firebase'
            }
        };
    }
};