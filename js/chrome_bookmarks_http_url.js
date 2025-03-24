const links = document.getElementsByTagName('a');

let http_url_counter = 0;

for (let i = 0; i < links.length; i++) {
  if (links[i].href.search('http://') !== -1) {
    const bookmark_name = links[i].innerText;
    const bookmark_url = links[i].href;
    const http2https_url = bookmark_url.replace('http://', 'https://');

    console.log(`${bookmark_name} [${i}]`);
    console.log(bookmark_url.replace(/\/?$/, ''));
    console.log(http2https_url.replace(/\/?$/, ''));
    console.log('\n');

    http_url_counter++;
  }
}

console.log(`Total HTTP URLs in bookmarks: ${http_url_counter}`);
