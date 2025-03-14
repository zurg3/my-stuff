if (is_mobile()) {
  const url_input = document.getElementById('audio_src');
  const width = Math.floor(document.body.offsetWidth * 0.9);

  url_input.removeAttribute('size');
  url_input.style.width = `${width}px`;
}

const form = document.getElementById('form');
form.hidden = false;

const audio = document.createElement('audio');
const audio_link = document.getElementById('audio_src');

function open_audio() {
  if (audio_link.value) {
    audio.src = audio_link.value;
    audio.controls = true;
    audio.preload = 'metadata';

    document.getElementById('audio_player').append(audio);

    document.getElementById('fit_audio_button').hidden = false;
    document.getElementById('remove_audio_button').hidden = false;
  }
}

function fit_audio() {
  audio.style.width = '100%';
}

function remove_audio() {
  audio_link.value = '';
  audio.remove();
  document.getElementById('fit_audio_button').hidden = true;
  document.getElementById('remove_audio_button').hidden = true;
}
