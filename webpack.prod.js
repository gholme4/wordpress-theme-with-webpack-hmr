const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const autoprefixer = require('autoprefixer');


const extractSass = new ExtractTextPlugin({
    filename: "./css/style.css"
});

module.exports = {
	entry: ['./assets/src/js/app.js'],
	output: {
		path: path.resolve(__dirname, './assets'),
		publicPath: 'assets/',
		filename: 'js/script.js'
	},
	plugins: [
		new webpack.DefinePlugin({
	  		'process.env': {
	  			NODE_ENV: '"production"'
	  		}
	  	}),
	  	new webpack.optimize.UglifyJsPlugin({
	  		sourceMap: true,
	  		compress: {
	  			warnings: false
	  		}
	  	}),
	  	new webpack.LoaderOptionsPlugin({
	  		minimize: true
	  	}),
	  	extractSass
	],
	module: {
		
		rules: [
			{
		        test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,
		        loader: "url-loader??limit=10000&mimetype=application/font-woff&name=fonts/[name].[ext]"
		    }, {
		        test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/,
		        loader: "url-loader??limit=10000&mimetype=application/font-woff&name=fonts/[name].[ext]"
		    }, {
		        test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
		        loader: "url-loader??limit=10000&mimetype=application/octet-stream&name=fonts/[name].[ext]"
		    }, {
		        test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
		        use: [
		  			{
						loader: 'file-loader',
						options: {
							name: '[name].[ext]',
				     		outputPath: './fonts/',
		  					publicPath: '../fonts/'
				 		}
					}
				]
		    },
			{
			    test: /\.css$/,
			    use: [
			    	{
						loader: "style-loader"
					},
			    	{
			    		loader: 'css-loader',
			    		options: { "url": true, "import": true, "minimize" : false }
			    	},
			    	{
						loader: 'resolve-url-loader',
						options: {}
					}
			    ]
			  },
			{
				test: /\.scss$/,
				
				use: ExtractTextPlugin.extract({
					fallback: 'style-loader',
					//resolve-url-loader may be chained before sass-loader if necessary

					use: [{
							loader: 'css-loader',
							options: { "url": true, "import": false, "minimize" : true }
						},
						{
							loader: 'postcss-loader',
							options: {
								plugins: function () {
				                    return [autoprefixer({ browsers: ['> 1%', 'last 3 versions', 'Firefox >= 20', 'iOS >=7'] })]
				                }
							}
						},
						{
							loader: 'resolve-url-loader',
							options: {}
						},
						{
							loader: 'sass-loader',
							options: {}
						}
						

					]
				})
			},
		  	{
		  		test: /\.js$/,
		  		loader: 'babel-loader',
		  		exclude: /node_modules/
		  	},
		  	{
		  		test: /\.(png|jpg|gif|svg)$/,
		  		use: [
		  			{
						loader: 'file-loader',
						options: {
							name: '[name].[ext]',
				     		outputPath: './images/',
		  					publicPath: '../images/'
				 		}
					}
				]
		  		
		  	}
	  	]
	},
	resolve: {
		modules: [
	        path.resolve('./assets/src'),
	        path.resolve('./node_modules')
	    ],
		extensions: ['*', '.js', '.json']
	},
	performance: {
		hints: false
	},
	devtool: '#source-map'
	
}
