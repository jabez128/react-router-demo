var path = require('path')
var node_modules_dir = path.resolve(__dirname, 'node_modules');
var pathToReact = path.resolve(node_modules_dir, 'react/dist/react.min.js');


module.exports = {
	entry: ['webpack/hot/dev-server', path.resolve(__dirname, 'app/app.js')],
	output: {
		path: path.resolve(__dirname, "build"),
		filename: "bundle.js"
	},
	module: {
		loaders: [{
			test: /\.js$/,
			loader: "babel",
			exclude: [node_modules_dir]
		}]
	}
}