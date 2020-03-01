var path = require('path');

module.exports = {
    mode: 'development',
    entry: {
        time: path.join(__dirname, 'srcjs', 'time.jsx'),
        'switch': path.join(__dirname, 'srcjs', 'switch.jsx')
    },
    output: {
        path: path.join(__dirname, 'inst/www/shinieR'),
        filename: '[name]/[name].js'
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env', '@babel/preset-react']
                }
            },
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            }
        ]
    },
    externals: {
        'react': 'window.React',
        'react-dom': 'window.ReactDOM',
        'reactR': 'window.reactR'
    },
    stats: {
        colors: true
    },
    devtool: 'source-map'
};
