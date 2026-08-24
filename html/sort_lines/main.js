const {comparator, copy_text} = lib;

const input = document.getElementById('input');
const output = document.getElementById('output');

function sort_lines() {
  if (input.value) output.innerText = input.value.split('\n').sort(comparator).join('\n');
}

function reverse_input() {
  if (input.value) output.innerText = input.value.split('\n').reverse().join('\n');
}

function reverse_output() {
  if (input.value && output.innerText) output.innerText = output.innerText.split('\n').reverse().join('\n');
}

function clear_input() {
  input.value = '';
  output.innerText = '';
}
