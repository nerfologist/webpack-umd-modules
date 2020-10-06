const path = require('path');

const common = {
  mode: 'development',
  entry: {
    index: './src/index.js',
  },
  devtool: 'source-map',
  optimization: {
    runtimeChunk: true,
  },
};

const umd = {
  ...common,
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].umd.js',
    libraryTarget: 'umd',
    library: 'exampleLibrary',
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
            plugins: ['@babel/plugin-proposal-class-properties'],
          },
        },
      },
    ],
  },
  externals: {
    lodash: {
      commonjs: 'lodash',
      commonjs2: 'lodash',
      amd: 'lodash',
      root: '_',
    },
  },
};

const modules = {
  ...common,
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-modules'],
            plugins: ['@babel/plugin-proposal-class-properties'],
          },
        },
      },
    ],
  },
  externals: ['lodash'],
};

module.exports = [umd, modules];
