function is_mobile() {
  return window.screen.width < window.screen.height;
}

function random_number(min = 1, max = 100) {
  if ((typeof min === 'number' && typeof max === 'number') && (min <= max)) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  else {
    return 0;
  }
}

function sum(...numbers) {
  if (numbers.length > 0) return numbers.reduce((total, num) => total + num, 0);
}

function multiply(...numbers) {
  if (numbers.length > 0) return numbers.reduce((total, num) => total * num, 1);
}

function average(...numbers) {
  if (numbers.length > 0) return sum(...numbers) / numbers.length;
}

function digital_root(n) {
  if (typeof n === 'number') return (n - 1) % 9 + 1;
}

function reverse_string(s) {
  if (typeof s === 'string') return s.split('').reverse().join('');
}

function comparator(a, b) {
  return a.toLowerCase().localeCompare(b.toLowerCase());
}
