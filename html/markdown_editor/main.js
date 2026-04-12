const input = document.getElementById('input');
const output = document.getElementById('output');

function compile_markdown() {
  output.innerHTML = marked.parse(input.value);
}

function clear_input() {
  input.value = '';
  output.innerHTML = '';
}
