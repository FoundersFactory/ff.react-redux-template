const path = require('path')
const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWepbackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const isProduction = process.env.NODE_ENV === 'production' || process.env.NODE_ENV === 'staging'

const developmentEntry = [
	'webpack-dev-server/client?http://localhost:3000',
	'webpack/hot/only-dev-server',
	'./app/index'
]

const productionEntry = [
	'./app/index'
]

const developmentPlugins = [
	new webpack.DefinePlugin({
		'process.env': {
	      'NODE_ENV': JSON.stringify(process.env.NODE_ENV)
	    }
	}),
 	new webpack.HotModuleReplacementPlugin(),
	new HtmlWepbackPlugin({
		filename: './index.html',
		template: './app/index.html',
	})
]

const productionPlugins = [
  	new ExtractTextPlugin('css/[name].[contenthash].css'),
  	new webpack.DefinePlugin({
    	'process.env': {
      		'NODE_ENV': JSON.stringify(process.env.NODE_ENV)
    	}
  	}),
  	new webpack.ExtendedAPIPlugin(),
  	new CleanWebpackPlugin(['dest'], {
		root: __dirname,
		verbose: true, 
		dry: false
	}),
	new HtmlWepbackPlugin({
		filename: './index.html',
		template: './app/index.html',
	})
]

const productionLoaders = [
	{ 
		test: /\.js$/, 
		loaders: ['react-hot','babel-loader'], 
		exclude: /node_modules/ 
	},
	{ 
		test: /\.(png|jpg|svg)$/, 
		loader: 'file-loader?name=images/[name].[hash].[ext]' 
	},
	{ 
		test: /\.(woff|eot|ttf|woff2)$/, 
		loader: 'file-loader?name=fonts/[name].[hash].[ext]' 
	},
	{
		test: /\.css$/,
		loader: ExtractTextPlugin.extract(
			'style!css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]'
			)
	}
]

const developmentLoaders = [
	{ 
		test: /\.js$/, 
		loaders: ['react-hot','babel-loader'], 
		exclude: /node_modules/ 
	},
	{ 
		test: /\.(png|jpg|svg)$/, 
		loader: 'file-loader?name=images/[name].[hash].[ext]' 
	},
	{ 
		test: /\.(woff|eot|ttf|woff2)$/, 
		loader: 'file-loader?name=fonts/[name].[hash].[ext]' 
	},
	{
		test: /\.css$/,
		loader: 'style!css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]'
	}
]

module.exports = {
	devtool: isProduction ? 'source-map' : 'eval',
	context: __dirname + '/src',
	entry: isProduction ? productionEntry : developmentEntry,
	output: {
		path: __dirname + '/dest',
		filename: 'js/main.[hash].js',
		publicPath: '/'
	},
	plugins: isProduction ? productionPlugins : developmentPlugins,
	module: {
		loaders: isProduction ? productionLoaders : developmentLoaders
	},
	resolve: { },
}