const path = require('path')

module.exports = {
    mode: 'production',
    entry: './src/install.js',
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: 'splur-ui.js',
        library: 'splur-ui',
        libraryTarget: 'umd'
    },
    module: {
        rules: [
            {
                test: /\.styl$/,
                use: [
                    'style-loader',
                    'css-loader',
                    {
                        loader: 'stylus-loader'
                    }
                ]
            }
        ]
    },
    externals: {
        vue: {
            commonjs: 'vue',
            commonjs2: 'vue',
            amd: 'vue',
            root: 'Vue'
        }
    }
}