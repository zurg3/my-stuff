const {resize_input, is_valid_url} = lib;

resize_input(document.getElementById('audio_src'));

const form = document.forms[0];
form.hidden = false;

const audio_player = document.getElementById('audio_player');
const audio = document.createElement('audio');
const audio_link = document.getElementById('audio_src');

function open_audio() {
  const trimmed_link = audio_link.value.trim();

  if (trimmed_link && is_valid_url(trimmed_link)) {
    audio.src = trimmed_link;
    audio.controls = true;
    audio.preload = 'metadata';
    audio.muted = false;
    audio.volume = 1;
    audio.setAttribute('onloadedmetadata', 'hide_elements(false)');

    audio_player.append(audio);
  }
  else {
    alert('Something is wrong!');
  }
}

function hide_elements(option) {
  audio_player.hidden = option;
}

function remove_audio() {
  audio.pause();
  audio.src = '';
  audio.removeAttribute('onloadedmetadata');
  //video.load();
  audio.remove();
}

function clear_input() {
  audio_link.value = '';
  hide_elements(true);
  remove_audio();
}
