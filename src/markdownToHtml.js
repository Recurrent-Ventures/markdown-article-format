const showdown = require('showdown');

const converter = new showdown.Converter();

// markdown -> html
module.exports = markdown => converter.makeHtml(markdown);
