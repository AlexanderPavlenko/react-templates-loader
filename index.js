var reactTemplates = require('react-templates/dist/reactTemplates');
var loaderUtils = require('loader-utils');
var fs = require('fs');
var path = require('path');

module.exports = function(source) {
  var options = loaderUtils.getOptions(this);
  if (!options.readFileSync) {
    options.readFileSync = fileName => {
      const filePath = path.resolve(path.dirname(this.resourcePath), fileName);
      this.addDependency(filePath);
      return fs.readFileSync(filePath);
    };
  }

  this.cacheable && this.cacheable();
  return reactTemplates.convertTemplateToReact(source, options);
};
