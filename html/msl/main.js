const current_url = new URL(window.location);
const params = Object.fromEntries(current_url.searchParams.entries());

const empty_url_search = !params.playlist && !params.view;

let json_url = '';

if (empty_url_search || params.playlist) {
  json_url = 'msl/Playlist1.json';
  //json_url = 'https://zurg3.github.io/my-stuff/html/msl/Playlist1.json';
}
else if (params.view) {
  json_url = 'msl/YourLibrary.json';
  //json_url = 'https://zurg3.github.io/my-stuff/html/msl/YourLibrary.json';
}

$.getJSON(json_url, function(library) {
  $('body').append(`<h2>My Spotify library</h2>`);

  if (empty_url_search) {
    $('body').append(`<h3><a href="?view=tracks">All liked tracks</a></h3>`);
    $('body').append(`<h3><a href="?view=albums">All added albums</a></h3>`);
    $('body').append(`<h3><a href="?view=artists">All following artists</a></h3>`);
    $('body').append(`<h3>Playlists</h3>`);
    $('body').append(`<ul></ul>`);

    for (let i = 0; i < library.playlists.length; i++) {
      $('ul').append(`<li><a href="?playlist=${i}">${library.playlists[i].name}</a> (${library.playlists[i].items.length})</li>`);
    }
  }
  else if (params.playlist) {
    const playlist_id = parseInt(params.playlist, 10);

    $('body').append(`<h3>${library.playlists[playlist_id].name}</h3>`);
    if (library.playlists[playlist_id].description) {
      $('body').append(`<h4><em>${library.playlists[playlist_id].description}</em></h4>`);
    }
    $('body').append(`<p><a href="msl.html">Back</a></p>`);

    $('body').append(`<table border="1" width="100%"></table>`);
    $('table').append(`<tr class="highlighted_th">
      <th>#</th>
      <th>Artist</th>
      <th>Track</th>
      <th>Album</th>
    </tr>`);

    for (let i = 0; i < library.playlists[playlist_id].items.length; i++) {
      $('table').append(`<tr class="highlighted_tr">
        <td>${i + 1}</td>
        <td>${library.playlists[playlist_id].items[i].track.artistName}</td>
        <td>${library.playlists[playlist_id].items[i].track.trackName}</td>
        <td>${library.playlists[playlist_id].items[i].track.albumName}</td>
      </tr>`);
    }
  }
  else if (params.view) {
    if (params.view === 'tracks') {
      $('body').append(`<h3>All liked tracks</h3>`);
      $('body').append(`<p><a href="msl.html">Back</a></p>`);

      $('body').append(`<table border="1" width="100%"></table>`);
      $('table').append(`<tr class="highlighted_th">
        <th>#</th>
        <th>Artist</th>
        <th>Track</th>
        <th>Album</th>
      </tr>`);

      for (let i = 0; i < library.tracks.length; i++) {
        $('table').append(`<tr class="highlighted_tr">
          <td>${i + 1}</td>
          <td>${library.tracks[i].artist}</td>
          <td>${library.tracks[i].track}</td>
          <td>${library.tracks[i].album}</td>
        </tr>`);
      }
    }
    else if (params.view === 'albums') {
      $('body').append(`<h3>All added albums</h3>`);
      $('body').append(`<p><a href="msl.html">Back</a></p>`);

      $('body').append(`<table border="1" width="100%"></table>`);
      $('table').append(`<tr class="highlighted_th">
        <th>#</th>
        <th>Artist</th>
        <th>Album</th>
      </tr>`);

      for (let i = 0; i < library.albums.length; i++) {
        $('table').append(`<tr class="highlighted_tr">
          <td>${i + 1}</td>
          <td>${library.albums[i].artist}</td>
          <td>${library.albums[i].album}</td>
        </tr>`);
      }
    }
    else if (params.view === 'artists') {
      $('body').append(`<h3>All following artists</h3>`);
      $('body').append(`<p><a href="msl.html">Back</a></p>`);
      $('body').append(`<ol></ol>`);

      for (let i = 0; i < library.artists.length; i++) {
        $('ol').append(`<li>${library.artists[i].name}</li>`);
      }
    }
  }
});
