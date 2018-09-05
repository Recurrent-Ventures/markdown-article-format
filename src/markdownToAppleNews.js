const articleJsonToAppleNews = require('article-json-to-apple-news');
const markdownToMicArticleJson = require('./markdownToMicArticleJson');

// markdown -> appleNews
module.exports = function markdownToAppleNews(markdown, {
  authorLink, // optional
  authorName, // optional
  canonicalUrl,
  featuredImage,
  publishedDate,
  slug,
  subtitle,
  tags,
  title,
  updatedDate,
  // apple news document styling options (optional)
  layout,
  componentLayouts,
  componentTextStyles,
  componentStyles,
  textStyles,
}) {
  const appleNewsArticleJson = {
    author: authorName && {
      name: authorName,
      href: authorLink,
    },
    body: markdownToMicArticleJson(markdown),
    headerEmbed: {
      src: featuredImage,
      type: 'image',
    },
    modifiedDate: updatedDate,
    publishedDate,
    title,
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
};
