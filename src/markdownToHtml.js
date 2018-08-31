const showdown = require('showdown');

const { makeHtml: markdownToHtml } = new showdown.Converter();

// markdown -> html
module.exports = markdownToHtml;
