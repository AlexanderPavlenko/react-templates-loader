var reactTemplates = require('react-templates/src/reactTemplates');

module.exports = function(source) {
	this.cacheable && this.cacheable();
	return reactTemplates.convertTemplateToReact(source);
};
