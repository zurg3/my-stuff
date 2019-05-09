var release_id = prompt('Release ID');

var tracks = document.getElementsByClassName('spread');
var tracks_count = document.getElementsByClassName('spread').length;
var track_len = document.getElementsByClassName('table__row__duration-counter');

for (i = 0; i < tracks_count; i++) {
  var track_num = i + 1;
  var track_title_full = tracks[i].innerText.split(' (feat. ');
  if (track_title_full.length == 2) {
    var track_title = track_title_full[0];
    var track_feats = track_title_full[1].slice(0, -1);
    console.log(release_id + ',' + track_num + ',' + track_title + ',' + track_feats + ',,' + track_len[i].innerText + ',');
  } else if (track_title_full.length == 1) {
    var track_title = track_title_full[0];
    console.log(release_id + ',' + track_num + ',' + track_title + ',,,' + track_len[i].innerText + ',');
  }
}
