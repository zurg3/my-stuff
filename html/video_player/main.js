const {resize_input, is_valid_url, is_mobile} = lib;

resize_input(document.getElementById('video_src'), 0.8);

const form = document.forms[0];
form.hidden = false;

const video_player = document.getElementById('video_player');
const video_controls = document.getElementById('video_controls');
const video_info = document.getElementById('video_info');
const video = document.createElement('video');
const video_link = document.getElementById('video_src');
const file_input = document.getElementById('file_input');
let file_url = null;

function open_video() {
  const trimmed_link = video_link.value.trim();

  if (trimmed_link && is_valid_url(trimmed_link)) {
    file_input.value = '';
    revoke_file_url();
    setup_video(trimmed_link);
  }
  else {
    alert('Something is wrong!');
  }
}

function setup_video(src) {
  video.src = src;
  video.controls = true;
  video.preload = 'metadata';
  video.muted = false;
  video.volume = 1;

  video_player.append(video);
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
  video.remove();
}

function revoke_file_url() {
  if (file_url) {
    URL.revokeObjectURL(file_url);
    file_url = null;
  }
}

function clear_input() {
  video_link.value = '';
  file_input.value = '';
  hide_elements(true);
  remove_video();
  revoke_file_url();
}

file_input.onchange = (event) => {
  const file = event.target.files[0];

  if (file) {
    video_link.value = '';
    revoke_file_url();
    file_url = URL.createObjectURL(file);
    setup_video(file_url);
  }
};

video.onloadedmetadata = () => {
  if (!is_mobile()) {
    resize_player(calc_scale(video.videoHeight));
  }
  else {
    resize_player();
  }
};

video.onratechange = () => {
  update_video_info();
};
