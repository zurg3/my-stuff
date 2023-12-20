var release_id = prompt('Release ID');

var json_schema = JSON.parse(document.getElementById('schema:music-album').innerText);

var tracks = json_schema.tracks;
var tracks_count = tracks.length;
var track_len = '';

for (i = 0; i < tracks_count; i++) {
  var track_num = i + 1;
  var track_title_full = tracks[i].name.split(' (feat. ');
  track_len = tracks[i].duration.replace('PT', '').replace('M', ':').replace('S', '');
  if (track_len.split(':')[1].length == 1) {
    track_len = track_len.split(':');
    track_len[1] = track_len[1].padStart(2, '0');
    track_len = track_len.join(':');
  }
  if (track_title_full.length == 2) {
    var track_title = track_title_full[0];
    var track_feats = track_title_full[1].slice(0, -1);
    var track_title_commas = track_title.includes(',');
    var track_feats_commas = track_feats.includes(',');
    if (track_title_commas == true && track_feats_commas == true) {
      console.log(release_id + ',' + track_num + ',' + "\"" + track_title + "\"" + ',' + "\"" + track_feats + "\"" + ',,' + track_len + ',');
    }
    else if (track_title_commas == true && track_feats_commas == false) {
      console.log(release_id + ',' + track_num + ',' + "\"" + track_title + "\"" + ',' + track_feats + ',,' + track_len + ',');
    }
    else if (track_title_commas == false && track_feats_commas == true) {
      console.log(release_id + ',' + track_num + ',' + track_title + ',' + "\"" + track_feats + "\"" + ',,' + track_len + ',');
    }
    else if (track_title_commas == false && track_feats_commas == false) {
      console.log(release_id + ',' + track_num + ',' + track_title + ',' + track_feats + ',,' + track_len + ',');
    }
  }
  else if (track_title_full.length == 1) {
    var track_title = track_title_full[0];
    var track_title_commas = track_title.includes(',');
    if (track_title_commas == true) {
      console.log(release_id + ',' + track_num + ',' + "\"" + track_title + "\"" + ',,,' + track_len + ',');
    }
    else if (track_title_commas == false) {
      console.log(release_id + ',' + track_num + ',' + track_title + ',,,' + track_len + ',');
    }
  }
}
