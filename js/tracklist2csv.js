const release_id = prompt('Release ID');

const json_schema = JSON.parse(document.getElementById('schema:music-album').innerText);

const tracks = json_schema.tracks;
const tracks_count = tracks.length;

for (let i = 0; i < tracks_count; i++) {
  const track_title_full = tracks[i].name.split(' (feat. ');
  let track_title = track_title_full[0];
  track_title = track_title.includes(',') ? `"${track_title}"` : track_title;

  let track_feats = '';
  if (track_title_full.length === 2) {
    track_feats = track_title_full[1].slice(0, -1);
    track_feats = track_feats.includes(',') ? `"${track_feats}"` : track_feats;
  }

  let track_len = '';
  track_len = tracks[i].duration.replace('PT', '').replace('M', ':').replace('S', '');
  track_len = track_len.includes(':') ? `${track_len.split(':')[0]}:${track_len.split(':')[1].padStart(2, '0')}` : `0:${track_len.padStart(2, '0')}`;

  console.log(`${release_id},${i + 1},${track_title},${track_feats},,${track_len},`);
}
