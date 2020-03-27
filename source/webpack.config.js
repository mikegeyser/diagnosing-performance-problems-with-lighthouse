const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const merge = require('webpack-merge');
const imageminMozjpeg = require('imagemin-mozjpeg');
const ImageminPlugin = require('imagemin-webpack-plugin').default;

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
  plugins: [
    new CopyWebpackPlugin([
      {
        from: 'images/**/**',
        to: path.resolve(__dirname, 'public/')
      }
    ]),
    new ImageminPlugin({
      path: path.resolve('public/images'),
      plugins: [imageminMozjpeg({ quality: 50 })]
    })
  ]
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
