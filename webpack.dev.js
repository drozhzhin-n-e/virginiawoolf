const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  watch: true
  /*
  devServer: {
    contentBase: './dist',
    watchContentBase: true,
    publicPath: "http://localhost:8080/",
    proxy: {
    	'/./': {
    		target: "https://virginiawoolf.dev/dist/"
    	}
    }
  }
  */
});