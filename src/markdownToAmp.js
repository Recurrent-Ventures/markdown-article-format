const micArticleJsonToAmp = require('article-json-to-amp');
const markdownToMicArticleJson = require('./markdownToMicArticleJson');

// TODO: Return amp in a wrapper that renders metadata?
// markdown -> amp
module.exports = function markdownToAmp(markdown) {
  const articleJson = markdownToMicArticleJson(markdown);

  return micArticleJsonToAmp(articleJson);
};
