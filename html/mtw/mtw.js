const {parse_data, append_html} = lib;

async function load_mtw() {
  const mtw_json_url = 'https://gist.githubusercontent.com/zurg3/0fd5e740e4c1c4eeb76d089a18fd5725/raw/mtw.json';

  const mtw = await parse_data(mtw_json_url, 'json');

  append_html(document.body, '<p><b>My temporary watchlist</b></p>');

  const list = document.createElement('ol');

  for (let id in mtw) {
    append_html(list, `<li><a href="https://www.imdb.com/title/${id}/">${mtw[id]}</a></li>`);
  }

  document.body.append(list);

  document.querySelectorAll('script').forEach(script => script.remove());
}

load_mtw();
