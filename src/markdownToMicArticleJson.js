const HtmlToArticleJson = require('html-to-article-json');
const markdownToHtml = require('./markdownToHtml');

const htmlToArticleJson = HtmlToArticleJson(); // use default options

// markdown -> micArticleJson
module.exports = function markdownToMicArticleJson(markdown) {
  const html = markdownToHtml(markdown);

  return htmlToArticleJson(html);
};
