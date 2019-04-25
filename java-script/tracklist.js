// iTunes
/// Filenames (adds '0' before track number)
var artist = document.getElementsByTagName('span')[32].innerText;
var album_title = document.getElementsByTagName('span')[31].innerText;
var release_year = document.getElementsByTagName('time')[0].innerText;

var tracks = document.getElementsByClassName('spread');
var tracks_count = document.getElementsByClassName('spread').length;

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
