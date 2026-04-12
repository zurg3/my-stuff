const {resize_input, get_checked_radio_value, upper_case, lower_case, title_case, swap_case} = lib;

const converter = document.getElementById('converter');
const input = document.getElementById('input');
const output = document.getElementById('output');

new ClipboardJS('#copy_button');

resize_input(input);
resize_input(output);

converter.hidden = false;

function convert_case() {
  if (get_checked_radio_value('case_option') === 'upper') {
    output.value = upper_case(input.value);
  }
  else if (get_checked_radio_value('case_option') === 'lower') {
    output.value = lower_case(input.value);
  }
  else if (get_checked_radio_value('case_option') === 'title') {
    output.value = title_case(input.value);
  }
  else if (get_checked_radio_value('case_option') === 'swap') {
    output.value = swap_case(input.value);
  }
}

function clear_all() {
  input.value = '';
  output.value = '';
}
