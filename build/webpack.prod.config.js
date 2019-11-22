const path = require('path')

module.exports = {
    entry: './src/install.js',
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: 'splur-ui.js',
        library: 'splur-ui',
        libraryTarget: 'umd'
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