const bin = document.getElementById('bin');
const oct = document.getElementById('oct');
const dec = document.getElementById('dec');
const hex = document.getElementById('hex');

const cheat_sheet = document.getElementById('cheat_sheet');
const cheat_sheet_button = document.getElementsByClassName('primary_button')[1];

function convert(value, from_base) {
  if (value) {
    const num = parseInt(value, from_base);

    bin.value = num.toString(2);
    oct.value = num.toString(8);
    dec.value = num.toString(10);
    hex.value = num.toString(16).toUpperCase();
  }
  else {
    bin.value = '';
    oct.value = '';
    dec.value = '';
    hex.value = '';
  }
}

function filter_input(input, regex) {
  return input.replace(regex, '');
}

function convert_from_bin() {
  convert(filter_input(bin.value, /[^0-1]/), 2);
}

function convert_from_oct() {
  convert(filter_input(oct.value, /[^0-7]/), 8);
}

function convert_from_dec() {
  convert(filter_input(dec.value, /[^0-9]/), 10);
}

function convert_from_hex() {
  convert(filter_input(hex.value, /[^0-9a-fA-F]/), 16);
}

function cheat_sheet_display() {
  const is_shown = cheat_sheet.style.display === 'inline-block';

  cheat_sheet.style.display = is_shown ? 'none' : 'inline-block';
  cheat_sheet_button.value = is_shown ? 'Show cheat sheet' : 'Hide cheat sheet';
}

function clear_input() {
  bin.value = '';
  oct.value = '';
  dec.value = '';
  hex.value = '';
}
