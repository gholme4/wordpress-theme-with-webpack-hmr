const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const HappyPack = require('happypack');
const happyThreadPool = HappyPack.ThreadPool({ size: 5 });

module.exports = {
	entry: ['./assets/src/js/app.js'],
	output: {
		path: path.resolve(__dirname, './assets'),
		publicPath: 'http://localhost:8080/assets/',
		filename: 'js/script.js'
	},
	plugins: [
		new HappyPack({
			id: 'js',
			threadPool: happyThreadPool,
			loaders: [
				{
					loader: 'babel-loader',
					query: {
						presets: ["es2015"]
					}
				}
			]
		}),

		new HappyPack({
			id: 'styles',
			threadPool: happyThreadPool,
			loaders: [
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
				},
				{
					loader: 'fast-sass-loader',
					options: {}
				}

			]
		})
	],
	module: {
		
		rules: [
			{
		        test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,
		        loader: "url-loader??limit=10000&mimetype=application/font-woff"
		      }, {
		        test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/,
		        loader: "url-loader??limit=10000&mimetype=application/font-woff"
		      }, {
		        test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
		        loader: "url-loader??limit=10000&mimetype=application/octet-stream"
		      }, {
		        test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
		        loader: "file-loader"
		      }, {
		        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
		        loader: "url-loader?limit=10000&mimetype=image/svg+xml"
		      },
			{
			    test: /\.css$/,
			    use: [
			    	{
						loader: "style-loader"
					},
			    	{
			    		loader: 'css-loader',
			    		options: { "url": false, "import": true, "minimize" : false }
			    	},
			    	{
						loader: 'resolve-url-loader',
						options: {}
					}
			    ]
			  },
			{
				test: /\.scss$/,
				use: 'happypack/loader?id=styles'
				
			},
		  	{
		  		test: /\.js$/,
		  		use: 'happypack/loader?id=js'
		  	},
		  	{
		  		test: /\.(png|jpg|gif|svg)$/,
		  		loader: 'file-loader',
		  		options: {
		  			name: '[name].[ext]?[hash]',
		  			outputPath: 'assets/images/',
		  			publicPath: 'assets/images/'
		  		}
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
	devServer: {
		historyApiFallback: true,
		noInfo: true,
		overlay: true,
		open: false,
		allowedHosts: [
			'usi-pawr.test'
		],
		headers: { 'Access-Control-Allow-Origin': '*' }
	},
	performance: {
		hints: false
	},
	devtool: 'eval'
	
}
