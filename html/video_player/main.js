if (is_mobile()) {
  const url_input = document.getElementById('video_src');
  const width = Math.floor(document.body.offsetWidth * 0.9);

  url_input.removeAttribute('size');
  url_input.style.width = `${width}px`;
}

const form = document.getElementById('form');
form.hidden = false;

const video_player = document.getElementById('video_player');
const video_controls = document.getElementById('video_controls');
const video = document.createElement('video');
const video_link = document.getElementById('video_src');

function open_video() {
  if (video_link.value && (video_link.value.startsWith('https://') || video_link.value.startsWith('http://'))) {
    video.src = video_link.value;
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
  let video_size_scale;

  switch (video.videoHeight) {
    case 1080:
      video_size_scale = 0.25;
      break;
    case 720:
    case 480:
      video_size_scale = 0.5;
      break;
    case 360:
    case 240:
      video_size_scale = 1;
      break;
    default:
      video_size_scale = 1;
  }

  expand_video_size(video_size_scale);
}

function fit_video() {
  video.removeAttribute('width');
  video.removeAttribute('height');

  video.style.width = '100%';
  video.style.height = 'auto';

  hide_elements(false);

  debug_video();
}

function video_speed(video_speed_value) {
  video.playbackRate = video_speed_value;

  debug_video();
}

function expand_video_size(expand_video_size_value) {
  video.removeAttribute('style');

  video.width = video.videoWidth * expand_video_size_value;
  video.height = video.videoHeight * expand_video_size_value;

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
  console.log(`Current video size: ${video.offsetWidth}x${video.offsetHeight}`);
  console.log(`Actual video size: ${video.videoWidth}x${video.videoHeight}`);
  console.log(`Video speed: ${video.playbackRate}`);
}
