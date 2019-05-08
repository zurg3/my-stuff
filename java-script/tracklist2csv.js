//iTunes
var release_id = prompt('Release ID');

var tracks = document.getElementsByClassName('spread');
var tracks_count = document.getElementsByClassName('spread').length;
var tracks_len = document.getElementsByClassName('table__row__duration-counter');

for (i = 0; i < tracks_count; i++) {
  var track_num = i + 1;
  console.log(release_id + ',' + track_num + ',' + tracks[i].innerText + ',,,' + tracks_len[i].innerText + ',');
}
