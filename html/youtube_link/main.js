if (is_mobile()) {
  const url_input = document.getElementById('youtube_music_link');
  const width = Math.floor(document.body.offsetWidth * 0.9);

  url_input.removeAttribute('size');
  url_input.style.width = `${width}px`;
}

document.getElementById('input').hidden = false;

new ClipboardJS('#copy_youtube_link_button');
new ClipboardJS('#copy_piped_link_button');

let video_id = '';

const youtube_iframe = document.createElement('iframe');

function convert() {
  const youtube_music_link = document.getElementById('youtube_music_link').value;

  if (youtube_music_link && youtube_music_link.startsWith('https://')) {
    const ytm_url = new URL(youtube_music_link);
    const params = Object.fromEntries(ytm_url.searchParams.entries());

    if (['music.youtube.com', 'www.youtube.com', 'm.youtube.com', 'piped.video'].includes(ytm_url.host) && params.v) {
      video_id = params.v;
    }
    else if (ytm_url.host === 'youtu.be' && ytm_url.search) {
      video_id = ytm_url.pathname.split('/')[1];
    }
    else if (['www.youtube.com', 'm.youtube.com', 'youtube.com'].includes(ytm_url.host) && ['/shorts/', '/live/', '/embed/'].some(path => ytm_url.pathname.search(path) === 0)) {
      video_id = ytm_url.pathname.split('/')[2];
    }
    else {
      alert('Invalid URL');
    }

    if (video_id) {
      const youtube_link = `https://youtu.be/${video_id}`;
      const piped_link = `https://piped.video/watch?v=${video_id}`;

      document.getElementById('output').hidden = false;

      document.getElementById('youtube_link').innerHTML = `<a href="${youtube_link}" target="_blank">${youtube_link}</a>`;
      document.getElementById('piped_link').innerHTML = `<a href="${piped_link}" target="_blank">${piped_link}</a>`;
    }
  }
}

function play_video() {
  if (video_id) {
    const video_width = !is_mobile() ? 640 : document.body.offsetWidth;
    const video_height = !is_mobile() ? 360 : Math.floor(video_width / 1.77);

    youtube_iframe.width = video_width;
    youtube_iframe.height = video_height;
    youtube_iframe.src = `https://www.youtube.com/embed/${video_id}`;
    youtube_iframe.frameBorder = 0;
    youtube_iframe.allow = 'accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture';
    youtube_iframe.allowFullscreen = true;

    document.getElementById('youtube_video').append(youtube_iframe);
  }
}

function clear_input() {
  document.getElementById('youtube_music_link').value = '';
  document.getElementById('youtube_link').innerHTML = '';
  document.getElementById('piped_link').innerHTML = '';
  document.getElementById('output').hidden = true;
  youtube_iframe.src = '';
  youtube_iframe.remove();
  video_id = '';
}
