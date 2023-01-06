const path = require('path');

module.exports = {
    mode: 'development',
    entry: ['./src/app.js','./src/firebase.js'],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    watch: true
}