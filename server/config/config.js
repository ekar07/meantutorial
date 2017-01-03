var path = require('path');
var rootPath = path.normalize(__dirname + '/../../');

module.exports = {
	development: {
		db: 'mongodb://localhost/meantutorial',
		rootPath: rootPath,
		port: process.env.PORT || 3030
		
	},
	production: {
		rootPath: rootPath,
		db: 'mongodb://ed:ed@ds149998.mlab.com:49998/meantutorial',
		port: process.env.PORT || 80
	}
}