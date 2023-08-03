const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: './src/public/index.js',
	mode: 'development',
	output: {
		path: path.join(__dirname, '/dist'),
		filename: 'index_bundle.js',
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-env', '@babel/preset-react'],
					},
				},
			},
			{
				test: /\.css$/i,
				use: ['style-loader', 'css-loader'],
			},
			{
				test: /\.(png|jpe?g|gif)$/i,
				use: [
					{
						loader: 'file-loader'
					}
				]
			}
		],
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: './src/public/index.html',
		}),
	],
	devServer: {
		historyApiFallback: true,
		port: 8080,
	},
};
