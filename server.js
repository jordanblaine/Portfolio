var webpack = require("webpack");

module.exports = {
	context: __dirname + "src",
	entry: "./js/client.js",
	module: {
		loaders: [
			{
				exclude: /\.js?$/,
				loader: "babel-loader",
				query: {
					presets: ["react", "es2015"],
					plugins: ["react-html-attrs", "transform-class-properties", "transform-decorators-legacty"]
				}
			}	
		]
	},
	output: {
		path: __dirname + "/src",
		filename: "client.min.js"
	}
}