/*
Channels:
0 - Первый канал
11 - Рен-ТВ
13 - СТС
15 - ТВ-3
16 - Пятница
19 - ТНТ

Make sure that page is fully loaded (all channels).
Working URL example: https://tv.yandex.ru/35?date=2019-04-20&genre=films&period=all-day
*/

channels_array = [0, 11, 13, 15, 16, 19];
for (var i = 0; i < channels_array.length; i++) {
  var channel_name = document.getElementsByClassName('grid__item')[channels_array[i]].children[0].innerText;
  var movies = document.getElementsByClassName('grid__item')[channels_array[i]].getElementsByClassName('grid-event grid-event_match grid-event_type_films');
  var movies_count = document.getElementsByClassName('grid__item')[channels_array[i]].getElementsByClassName('grid-event grid-event_match grid-event_type_films').length;
  console.log('===' + channel_name + '===');
  for (var j = 0; j < movies_count; j++) {
    console.log(movies[j].innerText);
  }
  console.log('\n');
}
