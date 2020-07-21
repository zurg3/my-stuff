var playlist = [];
var playlists = document.getElementsByClassName('contentSpacing')[1].children[1].children.length;

for (var i = 0; i < playlists; i++) {
  playlist.push(document.getElementsByClassName('contentSpacing')[1].children[1].children[i].children[0].children[0].children[1].children[0].children[0].innerText);
}

playlist.sort();

for (var j = 0; j < playlists; j++) {
  console.log(playlist[j]);
}
