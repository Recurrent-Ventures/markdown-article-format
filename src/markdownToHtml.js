const showdown = require('showdown');

const converter = new showdown.Converter();

// markdown -> html
module.exports = function markdownToHtml(markdown) {
  return converter.makeHtml(markdown);
};
