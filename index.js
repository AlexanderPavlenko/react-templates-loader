var reactTemplates = require('react-templates/src/reactTemplates');
var loaderUtils = require('loader-utils');

module.exports = function(source) {
	var options = loaderUtils.parseQuery(this.query);
	this.cacheable && this.cacheable();
	return reactTemplates.convertTemplateToReact(source, options);
};
