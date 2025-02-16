let http_url_num = 0;

for (let i = 0; i < document.getElementsByTagName('a').length; i++) {
  if (document.getElementsByTagName('a')[i].href.search('http://') !== -1) {
    let bookmark_name = document.getElementsByTagName('a')[i].innerText;
    let bookmark_url = document.getElementsByTagName('a')[i].href;
    let http2https_url = bookmark_url.replace('http://', 'https://');

    console.log(`${bookmark_name} [${i}]`);
    console.log(bookmark_url.replace(/\/?$/, ''));
    console.log(http2https_url.replace(/\/?$/, ''));
    console.log('\n');

    http_url_num++;
  }
}

console.log(`Total HTTP URLs in bookmarks: ${http_url_num}`);
