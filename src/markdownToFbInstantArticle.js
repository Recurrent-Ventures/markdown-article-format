const articleJsonToFbia = require('article-json-to-fbia');
const { compose } = require('lodash/fp');
const markdownToMicArticleJson = require('./markdownToMicArticleJson');

// markdown -> fbInstantArticle
module.exports = compose(
  articleJsonToFbia,
  markdownToMicArticleJson
);
