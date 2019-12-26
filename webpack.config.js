let path = require('path')

module.exports = [
    {
        entry: path.join(__dirname, 'index.js'),
        mode:'production',
        output: {
            path: path.join(__dirname, './dist/'),
            filename: 'show-age.min.js',
        }
    },
    {
        entry: path.join(__dirname, 'index.js'),
        mode:"development",
        output: {
            path: path.join(__dirname, './dist/'),
            filename: 'show-age.js',
        }
    }
]