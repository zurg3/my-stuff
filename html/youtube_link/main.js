new ClipboardJS('#clipboard_button');

let youtube_music_link = '';
let youtube_link = '';
let video_id = '';

function is_mobile() {
  return window.screen.width < window.screen.height;
}

function convert() {
  youtube_music_link = document.getElementById('youtube_music_link').value;

  if (youtube_music_link && youtube_music_link.startsWith('https://')) {
    const ytm_url = new URL(youtube_music_link);
    const params = Object.fromEntries(ytm_url.searchParams.entries());

    if (['music.youtube.com', 'www.youtube.com', 'm.youtube.com'].includes(ytm_url.host) && params.v) {
      video_id = params.v;
    }
    else if (ytm_url.host === 'youtu.be' && ytm_url.searchParams.size > 0) {
      video_id = ytm_url.pathname.split('/')[1];
    }
    else if (['www.youtube.com', 'm.youtube.com', 'youtube.com'].includes(ytm_url.host) && ['/shorts/', '/live/', '/embed/'].some(path => ytm_url.pathname.search(path) === 0)) {
      video_id = ytm_url.pathname.split('/')[2];
    }
    else {
      alert('Invalid URL');
    }

    if (video_id) {
      const yt_url = new URL(`/${video_id}`, 'https://youtu.be');
      youtube_link = yt_url.href;

      document.getElementById('output').hidden = false;

      document.getElementById('youtube_link').innerHTML = `<a href="${youtube_link}" target="_blank">${youtube_link}</a>`;
    }
  }
}

function play_video() {
  if (video_id) {
    let video_width = is_mobile() ? document.body.offsetWidth : 640;
    let video_height = is_mobile() ? Math.floor(video_width / 1.77) : 360;

    document.getElementById('youtube_video').innerHTML = `<iframe width="${video_width}" height="${video_height}" src="https://www.youtube.com/embed/${video_id}" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
  }
}

function clear_input() {
  document.getElementById('youtube_music_link').value = '';
  document.getElementById('youtube_link').innerHTML = '';
  document.getElementById('youtube_video').innerHTML = '';
  video_id = '';
  document.getElementById('output').hidden = true;
}
