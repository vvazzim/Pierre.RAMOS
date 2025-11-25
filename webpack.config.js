import path from 'path';
import { fileURLToPath } from 'url';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import CopyPlugin from 'copy-webpack-plugin';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/',
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|jpg|jpeg|gif|webp|JPG)$/,
        type: 'asset/resource',
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
    new CopyPlugin({
      patterns: [
        { from: 'public/images', to: 'images' },
      ],
    }),
  ],
  devServer: {
    static: [
      {
        directory: path.join(__dirname, 'public'), // Serve files from 'public' folder
      },
      {
        directory: path.join(__dirname, 'dist'),
      },
    ],
    historyApiFallback: true,
    port: 3000,
    open: true,
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
};