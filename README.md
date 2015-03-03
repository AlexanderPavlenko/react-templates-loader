# react-templates loader for webpack

## Usage

``` javascript
var template = require("react-templates!./template.rt");
// => return exports of executed and compiled template.rt
```

[Documentation: Using loaders](http://webpack.github.io/docs/using-loaders.html)

### Recommended configuration

``` javascript
{
	module: {
		loaders: [
			{ test: /\.rt/, loader: "react-templates-loader" },
		]
	}
}
```

## License

MIT (http://www.opensource.org/licenses/mit-license.php)
