var debug = process.env.NODE_ENV !== 'production';
var webpack = require('webpack');


module.exports = {
	// probably, the root folder that the bundler will use
	context: __dirname + '/src',

	// sourcemap?
	devtool: debug ? 'inline-sourcemap' : null,

	// entry file, ./src/js/client.js
	entry: './js/client.js',

	// TODO:
	// explain what does this part of the config do.
	// 	
	// Loaders:
	// webpack supports pre-processing files via loaders. 
	// This allows you to bundle any static resource not only javascript. 
	// You can easily write your own loaders running in Node.js.
	module: {
		loaders: [
			{
				test: /\.js?$/,
				exclude: /(node_modules|bower_components)/,
				loader: 'babel-loader',
				query: {
					presets: ['react', 'es2015', 'stage-0'],
					plugins: ['react-html-attrs', 'transform-class-properties', 'transform-decorators-legacy']
				}
			}
		]
	},

	// set where the output of the bundling will be
	output: {
		// directory
		path: __dirname + '/src/js',

		filename: 'client.min.js'
	},

	// plugins that we will use in the bundling
	plugins: debug ? [] : [
		new webpack.optimize.DedupePlugin(),
		new webpack.optimize.OccurenceOrderPlugin(),
		new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: false }),
	]
}