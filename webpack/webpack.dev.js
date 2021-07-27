const webpack = require('webpack');

module.exports = {
  mode: 'development',
  devServer: {
    hot: true,
    open: true,
    historyApiFallback: true,
  },
  devtool: 'cheap-module-source-map',
  plugins: [
    new webpack.DefinePlugin({
      'process.env.BASE_URL': JSON.stringify('http://3.25.70.196:3000'),
    }),
  ],
};
