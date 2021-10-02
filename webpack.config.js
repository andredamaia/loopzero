const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const ImageminPlugin = require('imagemin-webpack-plugin').default;
const glob = require('glob')

module.exports = {
    mode: "development",
    output: {
        filename: 'main.bundle.js',
        path: path.resolve(__dirname, "dist")
    },
    plugins: [
        new ImageminPlugin({
            externalImages: {
                context: '.',
                sources: glob.sync('src/images/**/*.{png,jpg,jpeg,gif,svg}'),
                destination: 'dist/assets/images',
                fileName: '[name].[ext]'
            }
        }),
        new MiniCssExtractPlugin()
    ],
    module: {
        rules: [
            // SCSS
            {
                test: /\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 1
                        }
                    },
                    {
                        loader: 'sass-loader'
                    }
                ]
            },

            // Fonts
            {
                test: /\.(ttf|eot|woff|woff2)$/,
                use:
                [
                    {
                        loader: 'file-loader',
                        options:
                        {
                            outputPath: 'assets/fonts/'
                        }
                    }
                ]
            },

            // Shaders
            {
                test: /\.(glsl|vs|fs|vert|frag)$/,
                exclude: /node_modules/,
                use: [
                    'raw-loader',
                    'glslify-loader'
                ]
            }
        ]
    }
}