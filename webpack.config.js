
var webpack = require('webpack');
var htmlWebpackPlugn = require('html-webpack-plugin');
var path = require('path');

module.exports = {
	entry: {
		vendor: ['react', 'react-dom', 'redux', 'react-redux', 'react-router', 'history/lib/createHashHistory', 'react-addons-css-transition-group', 'redux-simple-router', 'es6-promise', 'fetch-ie8'],
		bundle: './src/index.js'
	},
	output: {
		path: './dist/',
		filename: '[name].js'
	},
	module: {
		loaders: [
			{
				test: /\.css$/,
				loaders: ['style', 'css', 'autoprefixer?{browsers: ["last 2 version", "firefox 15", "> 1%"]}'],
				exclude: './node_modules/'
			},
			{
				test: /\.less$/,
				loaders: ['style', 'css', 'autoprefixer?{browsers: ["last 2 version", "firefox 15", "> 1%"]}', 'less'],
				exclude: './node_modules/'
			},
			{
				test: /\.scss$/,
				loaders: ['style', 'css', 'autoprefixer?{browsers: ["last 2 version", "firefox 15", "> 1%"]}', 'sass'],
				exclude: './node_modules/'
			},
			{
				test: /\.js$/,
				loaders: ["react-hot", "babel?presets[]=es2015&presets[]=react&presets[]=stage-0&plugins[]=transform-runtime&plugins[]=add-module-exports"],
				exclude: "/node_modules/",
				include: path.resolve(__dirname, "src")
			},
			{
				test: /\.(png|jpg|jpeg)$/,
				loader: 'url?limit=10000'
			},
			{
				test: /\.woff(2)?(.+)?$/,
				loader: "url?limit=10000&mimetype=application/font-woff"
			},
			{
				test: /\.(ttf|eot|svg|gif|ico)(.+)?$/,
				loader: "file"
			},
			{
				test: /\.json$/,
				loader: "json"
			}
		],
		postLoaders: [
			{
				test: /\.js$/,
				loaders: ['es3ify-loader']
			}
		]
	},
	resolve: {
		extensions: ['', '.js', '.css', '.jsx', '.less', '.scss', 'json']
	},
	devServer: {
		proxy: {
		  	'*':{
			    target: 'http://localhost:8000',
			    secure: false
	 		}
		},
		host: '0.0.0.0',
		port: 3000,
		hot: true,
		inline: true,
		config: 'webpack.config.js'
	},
	devtool: 'source-map',
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
	    new webpack.optimize.CommonsChunkPlugin('vendor',  'vendor.js'),
		new htmlWebpackPlugn({
			template: './src/template.html',
			filename: '../index.html',
			chunks: ['vendor', 'bundle']
		})
	]
};