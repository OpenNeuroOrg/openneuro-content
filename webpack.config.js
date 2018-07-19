module.exports = {
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
