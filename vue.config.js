// eslint-disable-next-line import/no-extraneous-dependencies
const webpack = require('webpack');
const path = require('path');
// const fs = require('fs');
const UglifyPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
    publicPath: '/',
    outputDir: 'dist',
    assetsDir: 'asset',
    lintOnSave: 'error',
    productionSourceMap: false,
    configureWebpack: config => {
        if (process.env.NODE_ENV === 'production') {
            // 生产环境（包括线上测试和正式）
            config.mode = 'production';
            const optimization = {
                minimizer: [new UglifyPlugin({
                    uglifyOptions: {
                        warnings: false,
                        compress: {
                            drop_console: true, // 移除console
                            drop_debugger: false, // 移除debugger
                            pure_funcs: ['console.log'], // 移除console
                        },
                    },
                })],
            };
            Object.assign(config, {
                optimization,
                externals: {
                    echarts: 'echarts',
                    Highcharts: 'Highcharts',
                },
            });
        } else {
            // 开发环境
            config.mode = 'development';
            Object.assign(config, {
                externals: {
                    echarts: 'echarts',
                },
            });
        }
        Object.assign(config, {
            resolve: {
                alias: {
                    '@': path.resolve(__dirname, './src/'),
                    '@a': path.resolve(__dirname, './src/assets/'),
                    '@c': path.resolve(__dirname, './src/components/'),
                    '@v': path.resolve(__dirname, './src/views/'),
                },
            },
        });
    },
    chainWebpack: config => {
        config
            .plugin('ignore')
            .use(new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/)); // 忽略/moment/locale下的所有文件
    },
    css: {
        extract: true,
        sourceMap: false,
    },
    devServer: {
        // host: '192.168.0.149',
        host: 'localhost',
        port: 8000,
        // https: {
        //     key: fs.readFileSync('./path/server.key'),
        //     cert: fs.readFileSync('./path/server.crt'),
        //     ca: fs.readFileSync('./path/cakey.pem'),
        // },
        // proxy: {
        //     '/temp200_cpx': {
        //         target: 'https://uj-test.oss-cn-zhangjiakou.aliyuncs.com/',
        //         // port: 8000,
        //         secure: true,
        //         changeOrigin: true,
        //     },
        // },
    },
    // eslint-disable-next-line global-require
    parallel: require('os').cpus().length > 1,
};
