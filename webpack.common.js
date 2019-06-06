var webpack = require("webpack");
const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const CopyPlugin = require('copy-webpack-plugin');
const WriteFilePlugin = require('write-file-webpack-plugin');

module.exports = {
  entry: {
    app: './src/index.js'
  },
  plugins: [
    new webpack.ProvidePlugin({
      //p5: path.resolve(__dirname, './src/lib/p5.js')
      IntroSectionModule: path.resolve(__dirname, './src/sections/intro.module.js'),
      anime: path.resolve(__dirname, './src/lib/anime.min.js'),
      domI18n: path.resolve(__dirname, './src/lib/dom-i18n.min.js'),
      fullpage: path.resolve(__dirname, './src/lib/fullpage.js'),
      Flickity: path.resolve(__dirname, './src/lib/flickity.pkgd.min.js'),
      Swiper: path.resolve(__dirname, './src/lib/swiper.js'),
      TranslationModule: path.resolve(__dirname, './src/common/translation.module.js'),
      //Utils: path.resolve(__dirname, './src/common/utils.js')
    }),
    new ExtractTextPlugin('style.css'),
    new webpack.ProvidePlugin({
        jQuery: 'jquery',
            $: 'jquery',
            jquery: 'jquery'
    }),
    new WriteFilePlugin(),
    new CopyPlugin([
      {
        from: 'src/audio',
        to: 'audio'
      },
      {
        from: 'src/img',
        to: 'img'
      },
      {
        from: 'src/languages',
        to: 'languages'
      },
      {
        from: 'src/templates',
        to: 'templates'
      },
      {
        from: 'src/video',
        to: 'video'
      },
      {
        from: 'src/index.php',
        to: 'index.php'
      },
      {
        from: 'src/language.php',
        to: 'language.php'
      }
    ]),
  ],
  module: {
    rules: [
      {
        test: /\.sass$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'sass-loader']
        })
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'sass-loader']
        })
      },
      { 
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[path][name].[ext]',
              context: path.resolve(__dirname, "src/"),
              outputPath: '/'
            }
          }
        ] 
      }
    ]
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  }
};