# react-templates loader for webpack

## Usage

``` javascript
var template = require("react-templates-loader!./template.rt");
// => return exports of executed and compiled template.rt
```

[Documentation: Using loaders](http://webpack.github.io/docs/using-loaders.html)

### Recommended configuration

``` javascript
{
	module: {
		loaders: [
			{ test: /\.rt$/, loader: "react-templates-loader?modules=amd" },
		]
	}
}
```

When the loader is configured, it shouldn't be referenced in the `require`:

``` javascript
var template = require("./template.rt");
```

## License

MIT (http://www.opensource.org/licenses/mit-license.php)
