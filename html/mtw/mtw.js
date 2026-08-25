const {parse_data, append_html} = lib;

async function load_mtw() {
  const mtw_json_url = 'https://gist.githubusercontent.com/zurg3/0fd5e740e4c1c4eeb76d089a18fd5725/raw/mtw.json';
  const mtw = await parse_data(mtw_json_url, 'json');

  const items = [];

  for (let id in mtw) {
    items.push(`<li><a href="https://www.imdb.com/title/${id}/">${mtw[id]}</a></li>`);
  }

  append_html(document.body,
    '<p><b>My temporary watchlist</b></p>',
    `<ol>${items.join('')}</ol>`
  );
}

load_mtw();

document.querySelectorAll('script').forEach(script => script.remove());
