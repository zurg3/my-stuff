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
    video.style.width = '640px';
    video.style.height = '480px';
    video.setAttribute('onloadedmetadata', 'resize_video()');
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

function expand_video_size(size) {
  video.style.width = `${video.videoWidth * size}px`;
  video.style.height = `${video.videoHeight * size}px`;

  hide_elements(false);

  update_video_info();
}

function fit_video() {
  video.style.width = '100%';
  video.style.height = 'auto';

  hide_elements(false);

  update_video_info();
}

function video_speed(speed) {
  video.playbackRate = speed;

  update_video_info();
}

function resize_video() {
  if (!is_mobile()) {
    expand_video_size(calc_scale(video.videoHeight));
  }
  else {
    fit_video();
  }
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
