let playlist = [];
let playlists = document.querySelectorAll('[data-testid="grid-container"]')[0].children;

for (let i = 0; i < playlists.length; i++) {
  playlist.push(playlists[i].children[0].children[1].children[0].innerText);
}

playlist.sort(function(a, b) {
  return a.toLowerCase().localeCompare(b.toLowerCase());
});

for (let j = 0; j < playlists.length; j++) {
  console.log(playlist[j]);
}
