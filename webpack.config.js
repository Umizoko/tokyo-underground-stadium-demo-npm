//  モード値をproductionに設定すると最適化された状態で、
// 　developmentに設定するとソースマップが有効の状態で出力される
const MODE = 'production';

module.exports = {

    mode: MODE,

    // ローカル環境を立ち上げる
    // 実行時にブラウザが自動的にlocalhostを開く
    devServer: {
        contentBase: 'docs',
        open: true
    },

    // mainとなるJavaScriptファイル（エントリーポイント）
    entry: {
        "index": "./src/js/index.js",
        "information": "./src/js/information.js",
        "guide": "./src/js/guide.js",
        "access": "./src/js/access.js",
        "contact": "./src/js/contact.js"
    },

    // fileの出力設定
    output: {
        // 出力ファイルのディレクトリ名
        path: `${__dirname}/docs/js`,
        // 出力ファイル名
        filename: '[name].bundle.js'
    },

    // libraryの共有
    // optimization: {
    //     splitChunks: {
    //         name: 'vender',
    //         chunks: 'initial',
    //     }
    // },

    // source-map方式でないと、cssの元ソースが追跡できない
    devtool: 'source-map',

    // css-loaderの設定
    module: {
        rules: [{
                // Sass css file
                test: /\.(scss|css)/,
                use: [
                    // リンクタグを出力
                    'style-loader',
                    {
                        loader: 'css-loader',
                        // cssをバンドル
                        options: {
                            // urlメソッドの取り込みを許可
                            url: true,
                            // sourceMap
                            sourceMap: true,
                            // 空白文字とコメントを削除
                            minimize: true,
                            // postcss-loader, sass-loader
                            importLoaders: 2
                        },
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            sourceMap: true,
                            plugins: [
                                // autoprefixerの有効化
                                // ベンダープレフィックスを自動付加
                                require('autoprefixer')({
                                    grid: true
                                })
                            ]
                        }
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            sourceMap: true
                        }
                    }
                ],
            },
            {
                // .jsにバンドルする
                test: /\.(gif|png|jpg|eot|wof|woff|ttf|svg)$/,
                use: [{
                    loader: 'url-loader',
                    options: {
                        limit: 100 * 1024,
                        name: '../assets/[name].[ext]'
                    }
                }]
            },
        ],
    },
};