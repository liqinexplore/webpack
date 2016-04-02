/**
 * Created by Administrator on 2016/4/2.
 */
var webpack =require('webpack')

module.exports = {
    entry: './entry.js',
    output: {
        path: __dirname,
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {test: /\.css$/, loader: 'style!css'}
        ]
    },
    plugins:[
        new webpack.BannerPlugin('this file is created by zhaoda')
    ]
}