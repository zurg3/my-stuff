/*
yt - YouTube
ytm - YouTube Music
ppd - Piped
*/

if (is_mobile()) {
  const url_input = document.getElementById('original_link');
  const width = Math.floor(document.body.offsetWidth * 0.9);

  url_input.removeAttribute('size');
  url_input.style.width = `${width}px`;
}

const input_block = document.getElementById('input');
const original_link = document.getElementById('original_link');

const video_option = document.getElementById('video_option');
const playlist_option = document.getElementById('playlist_option');

const video_links_block = document.getElementById('video_links');
const yt_video_link = document.getElementById('yt_video_link');
const ytm_video_link = document.getElementById('ytm_video_link');
const ppd_video_link = document.getElementById('ppd_video_link');

const playlist_links_block = document.getElementById('playlist_links');
const yt_playlist_link = document.getElementById('yt_playlist_link');
const ytm_playlist_link = document.getElementById('ytm_playlist_link');
const ppd_playlist_link = document.getElementById('ppd_playlist_link');

input_block.hidden = false;

new ClipboardJS('#copy_yt_video_link_button');
new ClipboardJS('#copy_ytm_video_link_button');
new ClipboardJS('#copy_ppd_video_link_button');

new ClipboardJS('#copy_yt_playlist_link_button');
new ClipboardJS('#copy_ytm_playlist_link_button');
new ClipboardJS('#copy_ppd_playlist_link_button');

let video_id = '';
let playlist_id = '';

const yt_video = document.getElementById('yt_video');
const yt_iframe = document.createElement('iframe');

function convert() {
  if (original_link.value && original_link.value.startsWith('https://')) {
    const original_url = new URL(original_link.value);
    const params = Object.fromEntries(original_url.searchParams.entries());

    let valid_url;

    if (['www.youtube.com', 'm.youtube.com', 'music.youtube.com', 'piped.video'].includes(original_url.host) && (params.v || params.list)) {
      valid_url = true;
      video_id = video_option.checked ? params.v : '';
      playlist_id = playlist_option.checked ? params.list : '';
    }
    else if (original_url.host === 'youtu.be' && original_url.search) {
      valid_url = true;
      video_id = original_url.pathname.split('/')[1];
    }
    else if (['www.youtube.com', 'm.youtube.com', 'youtube.com'].includes(original_url.host) && ['/shorts/', '/live/', '/embed/'].some(path => original_url.pathname.search(path) === 0)) {
      valid_url = true;
      video_id = original_url.pathname.split('/')[2];
    }
    else {
      valid_url = false;
      alert('Invalid URL');
    }

    if (valid_url) {
      clear_output();
      remove_video();

      if (video_id) {
        const yt_url = `https://youtu.be/${video_id}`;
        const ytm_url = `https://music.youtube.com/watch?v=${video_id}`;
        const ppd_url = `https://piped.video/watch?v=${video_id}`;

        video_links_block.hidden = false;

        yt_video_link.innerHTML = `<a href="${yt_url}" target="_blank">${yt_url}</a>`;
        ytm_video_link.innerHTML = `<a href="${ytm_url}" target="_blank">${ytm_url}</a>`;
        ppd_video_link.innerHTML = `<a href="${ppd_url}" target="_blank">${ppd_url}</a>`;
      }

      if (playlist_id) {
        const yt_url = `https://www.youtube.com/playlist?list=${playlist_id}`;
        const ytm_url = `https://music.youtube.com/playlist?list=${playlist_id}`;
        const ppd_url = `https://piped.video/playlist?list=${playlist_id}`;

        playlist_links_block.hidden = false;

        yt_playlist_link.innerHTML = `<a href="${yt_url}" target="_blank">${yt_url}</a>`;
        ytm_playlist_link.innerHTML = `<a href="${ytm_url}" target="_blank">${ytm_url}</a>`;
        ppd_playlist_link.innerHTML = `<a href="${ppd_url}" target="_blank">${ppd_url}</a>`;
      }
    }
  }
}

function play_video() {
  if (video_id) {
    const video_width = !is_mobile() ? 640 : document.body.offsetWidth;
    const video_height = !is_mobile() ? 360 : Math.floor(video_width / 1.77);

    yt_iframe.width = video_width;
    yt_iframe.height = video_height;
    yt_iframe.src = `https://www.youtube.com/embed/${video_id}`;
    yt_iframe.frameBorder = 0;
    yt_iframe.allow = 'accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture';
    yt_iframe.allowFullscreen = true;

    yt_video.append(yt_iframe);
  }
}

function clear_output() {
  yt_video_link.innerHTML = '';
  ytm_video_link.innerHTML = '';
  ppd_video_link.innerHTML = '';

  yt_playlist_link.innerHTML = '';
  ytm_playlist_link.innerHTML = '';
  ppd_playlist_link.innerHTML = '';

  video_links_block.hidden = true;
  playlist_links_block.hidden = true;
}

function remove_video() {
  yt_iframe.src = '';
  yt_iframe.remove();
}

function clear_input() {
  original_link.value = '';
  clear_output();
  remove_video();
  video_id = '';
  playlist_id = '';
}
