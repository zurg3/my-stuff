// Apple Music
// Filenames (adds '0' before track number)
const json_schema = JSON.parse(document.getElementById('schema:music-album').innerText);

let artist = '';
if (json_schema.byArtist.length === 1) {
  artist = json_schema.byArtist[0].name;
}
else if (json_schema.byArtist.length >= 2) {
  let artists_array = [];

  for (let i = 0; i < json_schema.byArtist.length; i++) {
    artists_array.push(json_schema.byArtist[i].name);
  }

  artist = artists_array.join(', ');
}
let album_title = json_schema.name;
let release_year = document.querySelector('meta[property="music:release_date"]').content.split('-')[0];

let tracks = json_schema.tracks;
let tracks_count = tracks.length;
let tracks_count_len = tracks_count.toString().length;

console.log(`${artist} - ${album_title} (${release_year})`);
for (let i = 0; i < tracks_count; i++) {
  console.log(`${(i + 1).toString().padStart(tracks_count_len, '0')}. ${tracks[i].name}`);
}
