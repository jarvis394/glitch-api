const path = require('path')
const TypedocWebpackPlugin = require('typedoc-webpack-plugin')

module.exports = {
  mode: 'production',
  entry: './src/index.ts',
  target: 'node',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'awesome-typescript-loader',
        exclude: /node_modules/
      }
    ]
  },
  optimization: {
    minimize: false
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js']
  },
  output: {
    libraryTarget: 'umd',
    library: 'glitch-api',
    filename: 'index.js',
    path: path.resolve(__dirname, 'lib')
  },
  plugins: [
    new TypedocWebpackPlugin({
      name: 'glitch-api',
      mode: 'file'
    }, './src')
  ]
}
