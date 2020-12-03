const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/app.ts',
  output: {
    path: path.join(__dirname, 'build'),
    filename: 'index.js'
  },
  module: {
    rules: [{
      test: /\.ts$/,
      use: 'ts-loader'
    }]
  },
  resolve: {
    modules: [
      'node_modules'
    ],
    extensions: [
      '.ts',
      '.js'
    ]
  }
};
