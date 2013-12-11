# css

  Insert a style tag into the DOM

  Don't use this if you're supporting IE9 and intend to insert [a lot of styles](http://blogs.msdn.com/b/ieinternals/archive/2011/05/14/internet-explorer-stylesheet-rule-selector-import-sheet-limit-maximum.aspx).

## Installation

    $ component install stephenmathieson/css

## API

```js
var css = require('css');

css('body { color: red; }');
```

## License

  MIT
