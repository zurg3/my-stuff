var release_id = prompt('Release ID');

var tracks = document.getElementsByClassName('song-name typography-body-tall');
var tracks_count = document.getElementsByClassName('song-name typography-body-tall').length;
var track_len = document.getElementsByClassName('time-data');

for (i = 0; i < tracks_count; i++) {
  var track_num = i + 1;
  var track_title_full = tracks[i].innerText.split(' (feat. ');
  if (track_title_full.length == 2) {
    var track_title = track_title_full[0];
    var track_feats = track_title_full[1].slice(0, -1);
    var track_title_commas = track_title.includes(',');
    var track_feats_commas = track_feats.includes(',');
    if (track_title_commas == true && track_feats_commas == true) {
      console.log(release_id + ',' + track_num + ',' + "\"" + track_title + "\"" + ',' + "\"" + track_feats + "\"" + ',,' + track_len[i].innerText + ',');
    }
    else if (track_title_commas == true && track_feats_commas == false) {
      console.log(release_id + ',' + track_num + ',' + "\"" + track_title + "\"" + ',' + track_feats + ',,' + track_len[i].innerText + ',');
    }
    else if (track_title_commas == false && track_feats_commas == true) {
      console.log(release_id + ',' + track_num + ',' + track_title + ',' + "\"" + track_feats + "\"" + ',,' + track_len[i].innerText + ',');
    }
    else if (track_title_commas == false && track_feats_commas == false) {
      console.log(release_id + ',' + track_num + ',' + track_title + ',' + track_feats + ',,' + track_len[i].innerText + ',');
    }
  }
  else if (track_title_full.length == 1) {
    var track_title = track_title_full[0];
    var track_title_commas = track_title.includes(',');
    if (track_title_commas == true) {
      console.log(release_id + ',' + track_num + ',' + "\"" + track_title + "\"" + ',,,' + track_len[i].innerText + ',');
    }
    else if (track_title_commas == false) {
      console.log(release_id + ',' + track_num + ',' + track_title + ',,,' + track_len[i].innerText + ',');
    }
  }
}
