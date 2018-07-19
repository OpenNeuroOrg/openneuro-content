const pkg = require('./package.json')

module.exports = {
  output: {
    path: __dirname + '/lib',
    filename: pkg.name + '.js',
    library: pkg.name,
    libraryTarget: 'umd',
    umdNamedDefine: true,
  },
  module: {
    rules: [
      {
        test: /\.(jpg|png|svg|ico)$/,
        loader: 'file-loader',
        options: {
          name: './img/[name].[hash:8].[ext]',
        },
      },
    ],
  },
}
