const {random_number} = lib;

const min_input = document.getElementById('random_num_min');
const max_input = document.getElementById('random_num_max');
const output = document.getElementById('output');

function get_random_number() {
  if (min_input.value && max_input.value) {
    const min = min_input.valueAsNumber;
    const max = max_input.valueAsNumber;

    if (min >= max) max_input.value = min + 1;

    output.innerText = random_number(min, max);
  }
}
