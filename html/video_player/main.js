const {resize_input, is_valid_url, is_mobile} = lib;

resize_input(document.getElementById('video_src'));

const form = document.forms[0];
form.hidden = false;

const video_player = document.getElementById('video_player');
const video_controls = document.getElementById('video_controls');
const video_info = document.getElementById('video_info');
const video = document.createElement('video');
const video_link = document.getElementById('video_src');

function open_video() {
  const trimmed_link = video_link.value.trim();

  if (trimmed_link && is_valid_url(trimmed_link)) {
    video.src = trimmed_link;
    video.controls = true;
    video.preload = 'metadata';
    video.muted = false;
    video.volume = 1;
    video.setAttribute('onloadedmetadata', !is_mobile() ? 'resize_player(calc_scale(video.videoHeight))' : 'resize_player()');
    video.setAttribute('onratechange', 'update_video_info()');

    video_player.append(video);
  }
  else {
    alert('Something is wrong!');
  }
}

function calc_scale(video_height) {
  switch (video_height) {
    case 1080:
      return 0.25;
    case 720:
    case 480:
      return 0.5;
    default:
      return 1;
  }
}

function resize_player(size) {
  video.style.width = size ? `${video.videoWidth * size}px` : '100%';
  video.style.height = size ? `${video.videoHeight * size}px` : 'auto';

  hide_elements(false);

  update_video_info();
}

function set_playback_speed(speed) {
  video.playbackRate = speed;

  update_video_info();
}

function update_video_info() {
  video_info.innerText = [
    `Video size: ${video.videoWidth}x${video.videoHeight}`,
    `Player size: ${video.offsetWidth}x${video.offsetHeight}`,
    `Playback speed: ${video.playbackRate}`
  ].join('\n');
}

function hide_elements(option) {
  video_controls.hidden = option;
  video_player.hidden = option;
}

function remove_video() {
  video.pause();
  video.src = '';
  video.removeAttribute('onloadedmetadata');
  video.removeAttribute('onratechange');
  //video.load();
  video.remove();
}

function clear_input() {
  video_link.value = '';
  hide_elements(true);
  remove_video();
}
