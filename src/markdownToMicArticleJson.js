const htmlToArticleJson = require('html-to-article-json');
const markdownToHtml = require('./markdownToHtml');

// markdown -> micArticleJson
module.exports = function markdownToMicArticleJson(markdown) {
  const html = markdownToHtml(markdown);

  return htmlToArticleJson(html);
};
