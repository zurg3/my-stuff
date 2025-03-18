const article = document.getElementsByTagName('article')[0];
const iframes = document.getElementsByTagName('iframe');

if (article && iframes.length > 0) {
  const article_width = article.offsetWidth;

  for (let i = 0; i < iframes.length; i++) {
    if (iframes[i].width !== '100%' && article_width < parseInt(iframes[i].width, 10)) {
      iframes[i].width = article_width;
      iframes[i].height = Math.floor(article_width / 1.77);
    }
  }
}
