// Apple Music
/// Filenames (adds '0' before track number)
var json_schema = JSON.parse(document.getElementById('schema:music-album').innerText);

var artist = '';
if (json_schema.byArtist.length == 1) {
  artist = json_schema.byArtist[0].name;
}
else if (json_schema.byArtist.length >= 2) {
  var artists_array = [];

  for (var i = 0; i < json_schema.byArtist.length; i++) {
    artists_array.push(json_schema.byArtist[i].name);
  }

  artist = artists_array.join(', ');
}
var album_title = json_schema.name;
var release_year = document.querySelector('meta[property="music:release_date"]').content.split('-')[0];

var tracks = json_schema.tracks;
var tracks_count = tracks.length;
var tracks_count_len = tracks_count.toString().length;

console.log(`${artist} - ${album_title} (${release_year})`);
for (i = 0; i < tracks_count; i++) {
  console.log(`${(i + 1).toString().padStart(tracks_count_len, '0')}. ${tracks[i].name}`);
}

// Yandex Music
/// Filenames (adds '0' before track number)
var artist = document.getElementsByClassName('d-artists')[0].innerText;
var album_title = document.getElementsByClassName('deco-typo')[0].innerText;
var release_year = document.getElementsByClassName('typo deco-typo-secondary')[0].innerText;

var tracks = document.getElementsByClassName('d-track__title deco-link deco-link_stronger');
var tracks_count = document.getElementsByClassName('d-track__title deco-link deco-link_stronger').length;

console.log(artist + ' - ' + album_title + ' (' + release_year + ')');
if (tracks_count > 0 && tracks_count < 10) {
  for (i = 0; i < tracks_count; i++) {
    var track_num = i + 1;
    console.log(track_num + '. ' + tracks[i].innerText);
  }
}
else if (tracks_count >= 10 && tracks_count < 100) {
  for (i = 0; i < tracks_count; i++) {
    var track_num = i + 1;
    if (track_num > 0 && track_num < 10) {
      console.log('0' + track_num + '. ' + tracks[i].innerText);
    }
    else {
      console.log(track_num + '. ' + tracks[i].innerText);
    }
  }
}

// Bandcamp
/// Filenames (adds '0' before track number)
var artist = document.getElementsByTagName('span')[16].innerText;
var album_title = document.getElementsByClassName('trackTitle')[0].innerText;
var release_date = document.getElementsByClassName('tralbumData tralbum-credits')[0].innerText;
var release_year = release_date.split(', ')[1];

var tracks = document.getElementsByClassName('title-col');
var tracks_count = document.getElementsByClassName('title-col').length;

console.log(artist + ' - ' + album_title + ' (' + release_year + ')');
if (tracks_count > 0 && tracks_count < 10) {
  for (i = 0; i < tracks_count; i++) {
    var track_num = i + 1;
    var get_track_title1 = tracks[i].innerText.split(':');
    var get_track_title2 = get_track_title1[0].split(' ');
    var get_track_title3 = get_track_title2.slice(0, -1);
    var get_track_title4 = get_track_title3.join(' ');
    console.log(track_num + '. ' + get_track_title4);
  }
}
else if (tracks_count >= 10 && tracks_count < 100) {
  for (i = 0; i < tracks_count; i++) {
    var track_num = i + 1;
    if (track_num > 0 && track_num < 10) {
      var get_track_title1 = tracks[i].innerText.split(':');
      var get_track_title2 = get_track_title1[0].split(' ');
      var get_track_title3 = get_track_title2.slice(0, -1);
      var get_track_title4 = get_track_title3.join(' ');
      console.log(track_num + '. ' + get_track_title4);
    }
    else {
      var get_track_title1 = tracks[i].innerText.split(':');
      var get_track_title2 = get_track_title1[0].split(' ');
      var get_track_title3 = get_track_title2.slice(0, -1);
      var get_track_title4 = get_track_title3.join(' ');
      console.log(track_num + '. ' + get_track_title4);
    }
  }
}

// Spotify
/// Filenames (adds '0' before track number)
var artist = document.getElementsByClassName('TrackListHeader__owner')[0].innerText;
var album_title = document.getElementsByTagName('span')[3].innerText;
var release_year = document.getElementsByClassName('TrackListHeader__text-silence TrackListHeader__entity-additional-info')[0].innerText.split(' • ')[0];

var tracks = document.getElementsByClassName('tracklist-name ellipsis-one-line');
var tracks_count = document.getElementsByClassName('tracklist-name ellipsis-one-line').length;

console.log(artist + ' - ' + album_title + ' (' + release_year + ')');
if (tracks_count > 0 && tracks_count < 10) {
  for (i = 0; i < tracks_count; i++) {
    var track_num = i + 1;
    console.log(track_num + '. ' + tracks[i].innerText);
  }
}
else if (tracks_count >= 10 && tracks_count < 100) {
  for (i = 0; i < tracks_count; i++) {
    var track_num = i + 1;
    if (track_num > 0 && track_num < 10) {
      console.log('0' + track_num + '. ' + tracks[i].innerText);
    }
    else {
      console.log(track_num + '. ' + tracks[i].innerText);
    }
  }
}
