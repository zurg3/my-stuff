const {resize_input, is_valid_url} = lib;

resize_input(document.getElementById('audio_src'), 0.8);

const form = document.forms[0];
form.hidden = false;

const audio_player = document.getElementById('audio_player');
const audio = document.createElement('audio');
const audio_link = document.getElementById('audio_src');
const file_input = document.getElementById('file_input');
let file_url = null;

function open_audio() {
  const trimmed_link = audio_link.value.trim();

  if (trimmed_link && is_valid_url(trimmed_link)) {
    file_input.value = '';
    revoke_file_url();
    setup_audio(trimmed_link);
  }
  else {
    alert('Something is wrong!');
  }
}

function setup_audio(src) {
  audio.src = src;
  audio.controls = true;
  audio.preload = 'metadata';
  audio.muted = false;
  audio.volume = 1;

  audio_player.append(audio);
}

function hide_elements(option) {
  audio_player.hidden = option;
}

function remove_audio() {
  audio.pause();
  audio.src = '';
  audio.remove();
}

function revoke_file_url() {
  if (file_url) {
    URL.revokeObjectURL(file_url);
    file_url = null;
  }
}

function clear_input() {
  audio_link.value = '';
  file_input.value = '';
  hide_elements(true);
  remove_audio();
  revoke_file_url();
}

file_input.onchange = (event) => {
  const file = event.target.files[0];

  if (file) {
    audio_link.value = '';
    revoke_file_url();
    file_url = URL.createObjectURL(file);
    setup_audio(file_url);
  }
};

audio.onloadedmetadata = () => {
  hide_elements(false);
};
