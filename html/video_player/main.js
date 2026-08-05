const {resize_input, is_valid_url, is_mobile} = lib;

resize_input(document.getElementById('video_src'));

const form = document.forms[0];
form.hidden = false;

const video_player = document.getElementById('video_player');
const video_controls = document.getElementById('video_controls');
const video = document.createElement('video');
const video_link = document.getElementById('video_src');

function open_video() {
  const trimmed_link = video_link.value.trim();

  if (trimmed_link && is_valid_url(trimmed_link)) {
    video.src = trimmed_link;
    video.width = 640;
    video.height = 480;
    video.controls = true;
    video.preload = 'metadata';
    video.muted = false;
    video.volume = 1;
    video.setAttribute('onloadedmetadata', !is_mobile() ? 'resize_video()' : 'fit_video()');

    video_player.append(video);
  }
  else {
    alert('Something is wrong!');
  }
}

function resize_video() {
  let scale;

  switch (video.videoHeight) {
    case 1080:
      scale = 0.25;
      break;
    case 720:
    case 480:
      scale = 0.5;
      break;
    case 360:
    case 240:
      scale = 1;
      break;
    default:
      scale = 1;
  }

  expand_video_size(scale);
}

function fit_video() {
  video.removeAttribute('width');
  video.removeAttribute('height');

  video.style.width = '100%';
  video.style.height = 'auto';

  hide_elements(false);

  debug_video();
}

function video_speed(speed) {
  video.playbackRate = speed;

  debug_video();
}

function expand_video_size(size) {
  video.removeAttribute('style');

  video.width = video.videoWidth * size;
  video.height = video.videoHeight * size;

  hide_elements(false);

  debug_video();
}

function hide_elements(option) {
  if (typeof option === 'boolean') {
    document.getElementById('fit_video_button').hidden = option;
    video_controls.hidden = option;
    video_player.hidden = option;
  }
}

function remove_video() {
  video.pause();
  video.src = '';
  video.removeAttribute('onloadedmetadata');
  //video.load();
  video.remove();
}

function clear_input() {
  video_link.value = '';
  hide_elements(true);
  remove_video();
}

function debug_video() {
  console.log(`Player size: ${video.offsetWidth}x${video.offsetHeight}`);
  console.log(`Video size: ${video.videoWidth}x${video.videoHeight}`);
  console.log(`Playback speed: ${video.playbackRate}`);
}
