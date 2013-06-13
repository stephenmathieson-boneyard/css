'use strict';

var head = document.head || document.getElementsByTagName('head')[0];

module.exports = function css(rules) {
  var style = document.createElement('style');

  style.type = 'text/css';

  if (style.styleSheet === undefined) {
    style.appendChild(document.createTextNode(rules));
  } else {
    style.styleSheet.cssText = rules;
  }

  head.appendChild(style);
  return style;
};
