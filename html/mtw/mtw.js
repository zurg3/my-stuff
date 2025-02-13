const mtw_json_url = 'https://gist.githubusercontent.com/zurg3/0fd5e740e4c1c4eeb76d089a18fd5725/raw/mtw.json';

$.getJSON(mtw_json_url, function(mtw) {
  const imdb_title_link = 'https://www.imdb.com/title/';

  $('body').append('<b>My temporary watchlist</b>');
  $('body').append('<ol></ol>');
  for (let i in mtw) {
    $('ol').append(`<li><a href="${imdb_title_link}${i}/">${mtw[i]}</a></li>`);
  }
});

$('script').remove();
