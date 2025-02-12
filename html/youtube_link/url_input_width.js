if (is_mobile()) {
  let url_input_width = Math.floor(document.body.offsetWidth * 0.9);

  document.getElementById('youtube_music_link').style.width = `${url_input_width}px`;
}
else {
  document.getElementById('youtube_music_link').size = 50;
}
