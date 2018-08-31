const htmlToArticleJson = require('html-to-article-json');
const { compose } = require('lodash/fp');
const markdownToHtml = require('./markdownToHtml');

// markdown -> micArticleJson
module.exports = compose(
  htmlToArticleJson,
  markdownToHtml,
);
