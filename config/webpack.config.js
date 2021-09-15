const path = require('path');

module.exports = () => ({
  entry: {
    unlock: ['./src/unlock.ts']
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: '[name].js',
    library: 'Unlock',
    libraryExport: 'default',
    libraryTarget: 'umd',
    umdNamedDefine: true
  },
});