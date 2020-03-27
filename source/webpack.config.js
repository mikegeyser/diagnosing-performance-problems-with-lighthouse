const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const merge = require('webpack-merge');

const base = {
  entry: './src/index.js',
  output: {
    path: path.resolve('public/js'),
    publicPath: 'js/',
    filename: 'index.js'
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  plugins: []
};

const legacy = merge(base, {
  name: 'legacy',
  output: {
    path: path.resolve('public/js/legacy')
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        include: [path.resolve(__dirname, 'src')],
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
            plugins: ['@babel/plugin-proposal-class-properties']
          }
        }
      }
    ]
  }
});

const modern = merge(base, {
  name: 'modern',
  output: {
    path: path.resolve('public/js/modern')
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        include: [path.resolve(__dirname, 'src')],
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              [
                '@babel/preset-env',
                {
                  targets: ['>0.25%', 'not ie 11'],
                  useBuiltIns: 'usage',
                  corejs: 2
                }
              ],
              '@babel/preset-react'
            ],
            plugins: ['@babel/plugin-proposal-class-properties']
          }
        }
      }
    ]
  }
});

module.exports = [legacy, modern];
