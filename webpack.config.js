let path = require('path')
let htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    // mode: 'development',
    mode: 'production', 
    // 多入口
    entry: {
        home: './src/index.js',
        // other: './src/other.js'
    },

    // 1 源码映射 会单独生成一个sourcemap文件  代码出错 会标识当前报错的列和行
    // devtool: 'source-map', // 增加映射文件   可以帮助调试源代码

    // 2 源码映射 不会单独生成文件【会集成到index文件中】  但是也会标识当前报错的列和行
    // devtool: 'eval-source-map',

    // 3 不会定位到问题列  但是是一个单独的映射文件
    // devtool: 'cheap-module-source-map', // 产生后可以保留

    // 4 不会产生文件  集成在打包后的文件中 不会定位到问题列
    devtool: 'cheap-module-eval-source-map',

    // watch: true, 
    // watchOptions: { // 监控的选项
    //   poll: 1000,              // 每秒监听1000次   是否需要更新
    //   aggregateTimeout: 3000,   // 防抖，当第一个文件更改，会在重新构建前增加延迟
    //   ignored: /node_modules/  // 对于某些系统，监听大量文件系统会导致大量的 CPU 或内存占用。这个选项可以排除一些巨大的文件夹， 不需要进行监控的文件
    // },


    output: {
        filename: '[name].[chunkhash].js', // [name] 可以代表home 或者 other   entry的名字
        path: path.resolve(__dirname, 'dist')
    },
    plugins: [ // 配置webpack插件
        new htmlWebpackPlugin({
            // template: './index.html', // 指定模板页面，会更加页面路径生成内存（打包）中的页面
            // filename: 'home.html', // 指定页面生成的名称
            // chunks: ['home']

            template: './index.html',
            filename: 'index.html',
        }),
        // new htmlWebpackPlugin({
        //     template: './index.html', // 指定模板页面，会根据页面路径生成内存（打包）中的页面
        //     filename: 'other.html', // 指定页面生成的名称
        //     chunks: ['other']
        // })
    ],
    module: {
        rules: [{
            test: /.\js$/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: [
                        '@babel/preset-env'
                    ]
                }
            }
        }]
    }
}