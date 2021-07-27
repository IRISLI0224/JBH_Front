const webpack = require('webpack');

module.exports = {
  mode: 'production',
  devtool: 'source-map',
  plugins: [
    new webpack.DefinePlugin({
      'process.env.BASE_URL': JSON.stringify('http://30.10.10.10'),
    }),
  ],
};
