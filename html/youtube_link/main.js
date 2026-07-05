/*
yt - YouTube
ytm - YouTube Music
ppd - Piped
yy - ytify
iv - Invidious
*/

const {resize_input, is_valid_url, is_mobile, parse_data} = lib;

resize_input(document.getElementById('original_link'));

const input_block = document.getElementById('input');
const original_link = document.getElementById('original_link');

const video_option = document.getElementById('video_option');
const playlist_option = document.getElementById('playlist_option');

const video_links_block = document.getElementById('video_links');
const yt_video_link = document.getElementById('yt_video_link');
const ytm_video_link = document.getElementById('ytm_video_link');
const ppd_video_link = document.getElementById('ppd_video_link');
const yy_video_link = document.getElementById('yy_video_link');
const iv_video_link = document.getElementById('iv_video_link');

const playlist_links_block = document.getElementById('playlist_links');
const yt_playlist_link = document.getElementById('yt_playlist_link');
const ytm_playlist_link = document.getElementById('ytm_playlist_link');
const ppd_playlist_link = document.getElementById('ppd_playlist_link');
const yy_playlist_link = document.getElementById('yy_playlist_link');
const iv_playlist_link = document.getElementById('iv_playlist_link');

input_block.hidden = false;

new ClipboardJS('#copy_yt_video_link_button');
new ClipboardJS('#copy_ytm_video_link_button');
new ClipboardJS('#copy_ppd_video_link_button');

new ClipboardJS('#copy_yt_playlist_link_button');
new ClipboardJS('#copy_ytm_playlist_link_button');
new ClipboardJS('#copy_ppd_playlist_link_button');

const ppd_host = 'piped.video';
const yy_host = 'ytify.pp.ua';
const iv_host = 'yt.omada.cafe';

let video_id = '';
let playlist_id = '';

const yt_video = document.getElementById('yt_video');
const yt_iframe = document.createElement('iframe');

const iv_audio = document.getElementById('iv_audio');
const audio_info = document.getElementById('audio_info');
const audio_player = document.createElement('audio');

function convert() {
  if (original_link.value && is_valid_url(original_link.value)) {
    const original_url = new URL(original_link.value);
    const params = Object.fromEntries(original_url.searchParams.entries());

    let valid_url;

    if (['www.youtube.com', 'm.youtube.com', 'music.youtube.com', ppd_host, iv_host].includes(original_url.host) && (params.v || params.list)) {
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
    else if (original_url.host === yy_host && (params.s || params.playlist)) {
      valid_url = true;
      video_id = video_option.checked ? params.s : '';
      playlist_id = playlist_option.checked ? params.playlist : '';
    }
    else {
      valid_url = false;
      alert('Invalid URL');
    }

    if (valid_url) {
      clear_output();
      remove_video();
      remove_audio();

      if (video_id) {
        const yt_url = `https://youtu.be/${video_id}`;
        const ytm_url = `https://music.youtube.com/watch?v=${video_id}`;
        const ppd_url = `https://${ppd_host}/watch?v=${video_id}`;
        const yy_url = `https://${yy_host}/?s=${video_id}`;
        const iv_url = `https://${iv_host}/watch?v=${video_id}`;

        video_links_block.hidden = false;

        yt_video_link.innerHTML = `<a href="${yt_url}" target="_blank">${yt_url}</a>`;
        ytm_video_link.innerHTML = `<a href="${ytm_url}" target="_blank">${ytm_url}</a>`;
        ppd_video_link.innerHTML = `<a href="${ppd_url}" target="_blank">${ppd_url}</a>`;
        yy_video_link.innerHTML = `<a href="${yy_url}" target="_blank">${yy_url}</a>`;
        iv_video_link.innerHTML = `<a href="${iv_url}" target="_blank">${iv_url}</a>`;
      }

      if (playlist_id) {
        const yt_url = `https://www.youtube.com/playlist?list=${playlist_id}`;
        const ytm_url = `https://music.youtube.com/playlist?list=${playlist_id}`;
        const ppd_url = `https://${ppd_host}/playlist?list=${playlist_id}`;
        const yy_url = `https://${yy_host}/?playlist=${playlist_id}`;
        const iv_url = `https://${iv_host}/playlist?list=${playlist_id}`;

        playlist_links_block.hidden = false;

        yt_playlist_link.innerHTML = `<a href="${yt_url}" target="_blank">${yt_url}</a>`;
        ytm_playlist_link.innerHTML = `<a href="${ytm_url}" target="_blank">${ytm_url}</a>`;
        ppd_playlist_link.innerHTML = `<a href="${ppd_url}" target="_blank">${ppd_url}</a>`;
        yy_playlist_link.innerHTML = `<a href="${yy_url}" target="_blank">${yy_url}</a>`;
        iv_playlist_link.innerHTML = `<a href="${iv_url}" target="_blank">${iv_url}</a>`;
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

async function play_audio() {
  if (video_id) {
    const data = await parse_data(`https://${iv_host}/api/v1/videos/${video_id}`, 'json');

    if (data && data.adaptiveFormats) {
      const audio = data.adaptiveFormats.filter(f => f.type.startsWith('audio') && f.encoding === 'opus' && f.audioQuality === 'AUDIO_QUALITY_MEDIUM')[0];

      if (audio) {
        const audio_src = new URL(audio.url);
        audio_src.host = iv_host;

        audio_player.src = audio_src.href;
        audio_player.controls = true;
        audio_player.preload = 'metadata';
        audio_player.muted = false;
        audio_player.volume = 1;
        audio_player.style.width = '100%';

        iv_audio.append(audio_player);

        audio_info.hidden = false;
        audio_info.innerHTML = `${data.author} - <b>${data.title}</b> [${(audio.bitrate / 1000).toFixed(1)} kbps]`;
      }
      else {
        alert('Audio not found');
      }
    }
    else {
      alert('This audio is not available');
    }
  }
}

function show_help() {
  const message = [
    'Supported services:',
    '- YouTube',
    '- YouTube Music',
    '- Piped',
    '- ytify',
    '- Invidious'
  ];

  alert(message.join('\n'));
}

function clear_output() {
  yt_video_link.innerHTML = '';
  ytm_video_link.innerHTML = '';
  ppd_video_link.innerHTML = '';
  yy_video_link.innerHTML = '';
  iv_video_link.innerHTML = '';

  yt_playlist_link.innerHTML = '';
  ytm_playlist_link.innerHTML = '';
  ppd_playlist_link.innerHTML = '';
  yy_playlist_link.innerHTML = '';
  iv_playlist_link.innerHTML = '';

  video_links_block.hidden = true;
  playlist_links_block.hidden = true;
}

function remove_video() {
  yt_iframe.src = '';
  yt_iframe.remove();
}

function remove_audio() {
  audio_player.pause();
  audio_player.src = '';
  audio_player.remove();
  audio_info.innerHTML = '';
  audio_info.hidden = true;
}

function clear_input() {
  original_link.value = '';
  clear_output();
  remove_video();
  remove_audio();
  video_id = '';
  playlist_id = '';
}
