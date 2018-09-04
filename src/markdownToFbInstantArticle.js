const articleJsonToFbia = require('article-json-to-fbia');
const markdownToMicArticleJson = require('./markdownToMicArticleJson');

// markdown -> fbInstantArticle
module.exports = function markdownToFbInstantArticle(markdown) {
  const articleJson = markdownToMicArticleJson(markdown);

  return articleJsonToFbia(articleJson);
};
