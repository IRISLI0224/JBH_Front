const webpack = require('webpack');

module.exports = {
  mode: 'production',
  devtool: 'source-map',
  plugins: [
    new webpack.DefinePlugin({
      'process.env.BASE_URL': JSON.stringify('http://3.25.70.196:3000'),
    }),
  ],
};
