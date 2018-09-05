const micArticleJsonToAmp = require('article-json-to-amp');
const markdownToMicArticleJson = require('./markdownToMicArticleJson');

// markdown -> amp
// TODO: Take these options
// authorLink, // optional
// authorName, // optional
// canonicalUrl,
// featuredImage,
// publishedDate,
// slug,
// subtitle,
// tags,
// title,
// updatedDate,
module.exports = function markdownToAmp(markdown) {
  const articleJson = markdownToMicArticleJson(markdown);

  return micArticleJsonToAmp(articleJson);
};
