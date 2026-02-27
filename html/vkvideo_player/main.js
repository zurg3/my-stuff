if (is_mobile()) {
  const url_input = document.getElementById('video_link');
  const width = Math.floor(document.body.offsetWidth * 0.9);

  url_input.removeAttribute('size');
  url_input.style.width = `${width}px`;
}

const input_block = document.getElementById('input');
const video_link = document.getElementById('video_link');
const output_block = document.getElementById('output');
const video_share_link = document.getElementById('video_share_link');
const video_embed_link = document.getElementById('video_embed_link');
const vk_video = document.getElementById('vk_video');
const vk_iframe = document.createElement('iframe');

input_block.hidden = false;

function open_video() {
  if (!video_link.value || !(video_link.value.startsWith('https://') || video_link.value.startsWith('http://'))) return alert('Invalid URL!');

  const video_url = new URL(video_link.value);
  const valid_hosts = ['vk.com', 'vkvideo.ru', 'm.vk.com', 'm.vkvideo.ru'];
  const match = video_url.pathname.match(/video(-?\d+)_(\d+)/);

  if (!valid_hosts.includes(video_url.host) || !match) return alert('Invalid URL!');

  const owner_id = match[1];
  const video_id = match[2];

  //console.log(`${owner_id}_${video_id}`);

  const video_width = !is_mobile() ? 640 : document.body.offsetWidth;
  const video_height = !is_mobile() ? 360 : Math.floor(video_width / 1.77);

  const embed_url = `https://vk.com/video_ext.php?oid=${owner_id}&id=${video_id}`;

  vk_iframe.width = video_width;
  vk_iframe.height = video_height;
  vk_iframe.src = embed_url;
  vk_iframe.frameBorder = 0;
  vk_iframe.allow = 'autoplay; encrypted-media; fullscreen; picture-in-picture; screen-wake-lock';
  vk_iframe.allowFullscreen = true;

  vk_video.append(vk_iframe);

  video_share_link.href = `https://vkvideo.ru/video${owner_id}_${video_id}`;
  video_embed_link.href = embed_url;

  output_block.hidden = false;
}

function remove_video() {
  vk_iframe.src = '';
  vk_iframe.remove();
}

function clear_input() {
  video_link.value = '';
  output_block.hidden = true;
  remove_video();
}
