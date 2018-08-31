const articleJsonToAppleNews = require('article-json-to-apple-news');
const { compose } = require('lodash/fp');
const markdownToMicArticleJson = require('./markdownToMicArticleJson');

// markdown -> appleNews
module.exports = function markdownToAppleNews(markdown, {
  title,
  subtitle,
  authorName, // optional
  authorLink, // optional
  featuredImage, // TODO: Use this
  canonicalUrl,
  slug,
  tags,
  publishedDate,
  updatedDate,
  // apple news document styling options (optional)
  layout,
  componentLayouts,
  componentTextStyles,
  componentStyles,
  textStyles,
}) {
  const appleNewsArticleJson = {
    title,
    author: authorName && {
      name: authorName,
      href: authorLink,
    },
    publishedDate,
    modifiedDate: updatedDate,
    body: markdownToMicArticleJson(markdown),
  };
  const appleNewsOpts = {
    canonicalURL: canonicalUrl,
    excerpt: subtitle,
    identifier: slug,
    keywords: tags,
    // apple news styling options
    layout,
    componentLayouts,
    componentTextStyles,
    componentStyles,
    textStyles,
  };
  
  return articleJsonToAppleNews(appleNewsArticleJson, appleNewsOpts);
}
