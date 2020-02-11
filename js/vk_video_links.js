var video_links = [];
for (var i = 0; i < document.getElementsByClassName('lnk').length; i++) {
  video_links[i] = document.getElementsByClassName('lnk')[i].href;
  video_links[i] = video_links[i].split('?')[0];
}
for (var j = 0; j < video_links.length; j++) {
  console.log(video_links[j]);
}
