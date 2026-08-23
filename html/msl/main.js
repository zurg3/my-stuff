const {parse_data, append_html} = lib;

const current_url = new URL(window.location);
const params = Object.fromEntries(current_url.searchParams.entries());

async function load_msl() {
  const empty_url_search = !params.playlist && !params.view;

  let json_url = '';

  if (empty_url_search || params.playlist) {
    //json_url = 'msl/Playlist1.json';
    json_url = 'https://zurg3.github.io/my-stuff/html/msl/Playlist1.json';
  }
  else if (params.view) {
    //json_url = 'msl/YourLibrary.json';
    json_url = 'https://zurg3.github.io/my-stuff/html/msl/YourLibrary.json';
  }

  const library = await parse_data(json_url, 'json');

  append_html(document.body, '<h2>My Spotify library</h2>');

  if (empty_url_search) {
    const playlists = library.playlists;

    append_html(document.body, '<h3><a href="?view=tracks">All liked tracks</a></h3>');
    append_html(document.body, '<h3><a href="?view=albums">All added albums</a></h3>');
    append_html(document.body, '<h3><a href="?view=artists">All following artists</a></h3>');
    append_html(document.body, '<h3>Playlists</h3>');

    const list = document.createElement('ul');

    for (let i = 0; i < playlists.length; i++) {
      append_html(list, `<li><a href="?playlist=${i}">${playlists[i].name}</a> (${playlists[i].items.length})</li>`);
    }

    document.body.append(list);
  }
  else if (params.playlist) {
    const playlist_id = parseInt(params.playlist, 10);
    const playlist = library.playlists[playlist_id];

    append_html(document.body, `<h3>${playlist.name}</h3>`);
    if (playlist.description) append_html(document.body, `<h4><em>${playlist.description}</em></h4>`);
    append_html(document.body, '<p><a href="msl.html">Back</a></p>');

    const table = document.createElement('table');

    const table_header = [
      '<tr class="highlighted_th">',
        '<th>#</th>',
        '<th>Artist</th>',
        '<th>Track</th>',
        '<th>Album</th>',
      '</tr>'
    ];

    append_html(table, table_header.join(''));

    for (let i = 0; i < playlist.items.length; i++) {
      const table_row = [
        '<tr class="highlighted_tr">',
          `<td>${i + 1}</td>`,
          `<td>${playlist.items[i].track.artistName}</td>`,
          `<td>${playlist.items[i].track.trackName}</td>`,
          `<td>${playlist.items[i].track.albumName}</td>`,
        '</tr>'
      ];

      append_html(table, table_row.join(''));
    }

    document.body.append(table);
  }
  else if (params.view) {
    if (params.view === 'tracks') {
      const tracks = library.tracks;

      append_html(document.body, '<h3>All liked tracks</h3>');
      append_html(document.body, '<p><a href="msl.html">Back</a></p>');

      const table = document.createElement('table');

      const table_header = [
        '<tr class="highlighted_th">',
          '<th>#</th>',
          '<th>Artist</th>',
          '<th>Track</th>',
          '<th>Album</th>',
        '</tr>'
      ];

      append_html(table, table_header.join(''));

      for (let i = 0; i < tracks.length; i++) {
        const table_row = [
          '<tr class="highlighted_tr">',
            `<td>${i + 1}</td>`,
            `<td>${tracks[i].artist}</td>`,
            `<td>${tracks[i].track}</td>`,
            `<td>${tracks[i].album}</td>`,
          '</tr>'
        ];

        append_html(table, table_row.join(''));
      }

      document.body.append(table);
    }
    else if (params.view === 'albums') {
      const albums = library.albums;

      append_html(document.body, '<h3>All added albums</h3>');
      append_html(document.body, '<p><a href="msl.html">Back</a></p>');

      const table = document.createElement('table');

      const table_header = [
        '<tr class="highlighted_th">',
          '<th>#</th>',
          '<th>Artist</th>',
          '<th>Album</th>',
        '</tr>'
      ];

      append_html(table, table_header.join(''));

      for (let i = 0; i < albums.length; i++) {
        const table_row = [
          '<tr class="highlighted_tr">',
            `<td>${i + 1}</td>`,
            `<td>${albums[i].artist}</td>`,
            `<td>${albums[i].album}</td>`,
          '</tr>'
        ];

        append_html(table, table_row.join(''));
      }

      document.body.append(table);
    }
    else if (params.view === 'artists') {
      const artists = library.artists;

      append_html(document.body, '<h3>All following artists</h3>');
      append_html(document.body, '<p><a href="msl.html">Back</a></p>');

      const list = document.createElement('ol');

      for (let i = 0; i < artists.length; i++) {
        append_html(list, `<li>${artists[i].name}</li>`);
      }

      document.body.append(list);
    }
  }
}

load_msl();
