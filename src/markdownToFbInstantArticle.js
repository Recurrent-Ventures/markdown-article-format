const articleJsonToFbia = require('article-json-to-fbia');
const moment = require('moment');
const xml = require('xml');
const markdownToMicArticleJson = require('./markdownToMicArticleJson');

// markdown -> fbInstantArticle
// TODO: ensure body images work
module.exports = function markdownToFbInstantArticle(markdown, {
  articleStyleName,
  authorLink,
  authorName,
  canonicalUrl,
  featuredImage,
  miniTitle,
  publishedDate,
  subtitle,
  title,
  updatedDate,
}) {
  const articleJson = markdownToMicArticleJson(markdown);
  const articleBody = articleJsonToFbia(articleJson);

  return wrapFbInstantArticleBody(articleBody, {
    articleStyleName,
    authorLink,
    authorName,
    canonicalUrl,
    featuredImage,
    miniTitle,
    publishedDate,
    subtitle,
    title,
    updatedDate,
  });
};

function wrapFbInstantArticleBody(articleBody, options) {
  return xml({
    html: [
      { _attr: { lang: 'en', prefix: 'op: http://media.facebook.com/op#'} },
      { head: [
        { meta: [{ _attr: { charset: 'utf-8' } }] },
        { link: [{ _attr: { rel: 'canonical', href: options.canonicalUrl } }] },
        { meta: [{ _attr: { property: 'op:markup_version', content: 'v1.0' } }] },
        { meta: [{ _attr: { property: 'fb:article_style', content: options.articleStyleName } }] },
      ] },
      { body: [
        { article: [
          { header: [
            // Title & Subtitle
            { h1: options.title },
            { h2: options.subtitle },
            // Datetime when article was originally published
            { time: [
              { _attr: { class: 'op-published', datetime: options.publishedDate } },
              moment(options.publishedDate).format('MMMM Do, H:MMa'),
            ] },
            // Datetime when article was last updated
            { time: [
              { _attr: { class: 'op-published', datetime: options.updatedDate } },
              moment(options.updatedDate).format('MMMM Do, H:MMa'),
            ] },
            // Author
            { address: [
              { a: [
                { _attr: { href: options.authorLink } },
                options.authorName,
              ] },
            ] },
            // Featured image
            { figure: [
              { img: [{ _attr: { src: options.featuredImage } }] },
              // { figcaption: '' },
            ] },
            // Mini-title
            { h3: [
              { _attr: { class: 'op-kicker' } },
              options.miniTitle,
            ] },
          ] },
          // Article body
          { _cdata: articleBody },
        ] },
      ] },
    ],
  });
}