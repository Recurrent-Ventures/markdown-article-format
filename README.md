# markdown-article-format
Transform markdown articles to HTML, AMP, FB Instant Articles, Apple News Format, and Mic's article-json format

## :warning: Work In Progress!
This library is under heavy early development. We don't recommend using it just yet. Check back here for updates!

* * *

## Installation
```bash
yarn add markdown-article-format
```

## Usage
### `markdown -> html`
```javascript
import { markdownToHtml } from 'markdown-article-format';

const html = markdownToHtml(`
  # Example
  This is an example.
`);
```

### `markdown -> amp`
```javascript
import { markdownToAmp } from 'markdown-article-format';

const amp = markdownToAmp(`
  # Example
  This is an example.
`);
```

### `markdown -> appleNews`
```javascript
import { markdownToAppleNews } from 'markdown-article-format';

const appleNews = markdownToAppleNews(`
  # Example
  This is an example.
`, {
  title: 'Example',
  subtitle: 'Just an example',
  authorName: 'Dan Scanlon', // optional
  authorLink: 'https://github.com/danscan', // optional
  // featuredImage, // TODO: Use this
  canonicalUrl: 'https://github.com/futurism-core/markdown-article-format',
  slug: 'markdown-article-format',
  tags: ['markdown', 'formatting', 'apple news'],
  publishedDate: new Date(),
  updatedDate: new Date(),
  // apple news document styling options (optional)
  // layout,
  // componentLayouts,
  // componentTextStyles,
  // componentStyles,
  // textStyles,
});
```