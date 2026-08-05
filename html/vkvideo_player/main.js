const {resize_input, is_valid_url, is_mobile} = lib;

resize_input(document.getElementById('video_link'));

const input_block = document.getElementById('input');
const video_link = document.getElementById('video_link');
const output_block = document.getElementById('output');
const video_share_link_desktop = document.getElementById('video_share_link_desktop');
const video_share_link_mobile = document.getElementById('video_share_link_mobile');
const vk_video = document.getElementById('vk_video');
const vk_iframe = document.createElement('iframe');

input_block.hidden = false;

function open_video() {
  const trimmed_link = video_link.value.trim();

  if (!trimmed_link || !is_valid_url(trimmed_link)) return alert('Invalid URL!');

  const video_url = new URL(trimmed_link);
  const valid_hosts = ['vk.com', 'vk.ru', 'vkvideo.ru', 'm.vk.com', 'm.vk.ru', 'm.vkvideo.ru'];
  const match = video_url.pathname.match(/video(-?\d+)_(\d+)/);

  if (!valid_hosts.includes(video_url.host) || !match) return alert('Invalid URL!');

  const owner_id = match[1];
  const video_id = match[2];

  //console.log(`${owner_id}_${video_id}`);

  const video_width = !is_mobile() ? 640 : document.body.offsetWidth;
  const video_height = !is_mobile() ? 360 : Math.floor(video_width / 1.77);

  const embed_url = `https://vk.ru/video_ext.php?oid=${owner_id}&id=${video_id}`;

  vk_iframe.width = video_width;
  vk_iframe.height = video_height;
  vk_iframe.src = embed_url;
  vk_iframe.frameBorder = 0;
  vk_iframe.allow = 'autoplay; encrypted-media; fullscreen; picture-in-picture; screen-wake-lock';
  vk_iframe.allowFullscreen = true;

  vk_video.append(vk_iframe);

  video_share_link_desktop.href = `https://vkvideo.ru/video${owner_id}_${video_id}`;
  video_share_link_mobile.href = `https://m.vkvideo.ru/video${owner_id}_${video_id}`;

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
