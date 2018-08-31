const micArticleJsonToAmp = require('article-json-to-amp');
const { compose } = require('lodash/fp');
const markdownToMicArticleJson = require('./markdownToMicArticleJson');

// TODO: Return amp in a wrapper that renders metadata?
// markdown -> amp
module.exports = compose(
  micArticleJsonToAmp,
  markdownToMicArticleJson,
);
