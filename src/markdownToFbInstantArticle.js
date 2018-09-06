const articleJsonToFbia = require('article-json-to-fbia');
const moment = require('moment');
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
  return `<!doctype html>
    <html lang="en" prefix="op: http://media.facebook.com/op#">
      <head>
        <meta charset="utf-8">
        <link rel="canonical" href="${options.canonicalUrl}">
        <meta property="op:markup_version" content="v1.0">
        <meta property="fb:article_style" content="${options.articleStyleName}">
      </head>
      <body>
        <article>
          <header>
            <!-- Title & subtitle -->
            <h1>${options.title}</h1>
            <h2>${options.subtitle}</h2>

            <!-- Datetime when article was originally published -->
            <time class="op-published" datetime="${options.publishedDate}">
              ${moment(options.publishedDate).format('MMMM Do, H:MMa')}
            </time>
            <!-- Datetime when article was last updated -->
            <time class="op-modified" datetime="${options.updatedDate}">
              ${moment(options.updatedDate).format('MMMM Do, H:MMa')}
            </time>

            <!-- Author -->
            <address>
              <a href="${options.authorLink}">${options.autherName}</a>
            </address>

            <!-- Featured image --> 
            <figure>
              <img src="${options.featuredImage}" />
            </figure>   

            <!-- Mini-title --> 
            <h3 class="op-kicker">
              ${options.miniTitle}
            </h3>        
          </header>

          <!-- Article body -->
          ${articleBody}
        </article>
      </body>
    </html>
  `;
}