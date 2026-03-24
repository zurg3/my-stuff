const audio_player = document.getElementById('audio_player');
const audio = document.createElement('audio');
const audio_link = document.getElementById('audio_src');

function open_audio() {
  if (audio_link.value && is_valid_url(audio_link.value)) {
    audio.src = audio_link.value;
    audio.controls = true;
    audio.preload = 'metadata';
    audio.muted = false;
    audio.volume = 1;
    audio.setAttribute('onloadedmetadata', 'hide_elements(false)');
    audio.removeAttribute('style');

    audio_player.append(audio);
  }
  else {
    alert('Something is wrong!');
  }
}

function fit_audio() {
  audio.style.width = '100%';
}

function hide_elements(option) {
  if (typeof option === 'boolean') {
    document.getElementById('fit_audio_button').hidden = option;
    audio_player.hidden = option;
  }
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
