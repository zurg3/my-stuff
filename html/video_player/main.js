if (is_mobile()) {
  const url_input = document.getElementById('video_src');
  const width = Math.floor(document.body.offsetWidth * 0.9);

  url_input.removeAttribute('size');
  url_input.style.width = `${width}px`;
}

const form = document.getElementById('form');
form.hidden = false;

const video = document.createElement('video');
const video_link = document.getElementById('video_src');

function open_video() {
  if (video_link.value) {
    video.src = video_link.value;
    video.width = 640;
    video.height = 480;
    video.controls = true;
    video.preload = 'metadata';
    video.hidden = true;
    video.setAttribute('onloadedmetadata', 'resize_video()');

    document.getElementById('video_player').append(video);

    document.getElementById('fit_video_button').hidden = false;
    document.getElementById('remove_video_button').hidden = false;
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

  video.width = video.videoWidth * video_size_scale;
  video.height = video.videoHeight * video_size_scale;

  video.hidden = false;

  debug_video();
}

function fit_video() {
  if (video) {
    video.removeAttribute('width');
    video.removeAttribute('height');

    video.style.width = '100%';
    video.style.height = 'auto';

    debug_video();
  }
}

function remove_video() {
  video_link.value = '';
  video.remove();
  document.getElementById('fit_video_button').hidden = true;
  document.getElementById('remove_video_button').hidden = true;
}

function video_speed(video_speed_value) {
  if (video) {
    video.playbackRate = video_speed_value;

    debug_video();
  }
}

function expand_video_size(expand_video_size_value) {
  if (video) {
    if (video.style.width || video.style.height) video.removeAttribute('style');

    video.width = video.videoWidth * expand_video_size_value;
    video.height = video.videoHeight * expand_video_size_value;

    debug_video();
  }
}

function debug_video() {
  console.log(`Current video size: ${video.offsetWidth}x${video.offsetHeight}`);
  console.log(`Actual video size: ${video.videoWidth}x${video.videoHeight}`);
  console.log(`Video speed: ${video.playbackRate}`);
}
