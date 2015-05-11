var reactTemplates = require('react-templates/src/reactTemplates');
var url = require('url');
var queryString = require('querystring');

module.exports = function(source) {
	var options = queryString.parse(url.parse(this.query).query);
	this.cacheable && this.cacheable();
	return reactTemplates.convertTemplateToReact(source, options);
};
