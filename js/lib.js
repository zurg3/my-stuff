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

function comparator(a, b) {
  return a.toLowerCase().localeCompare(b.toLowerCase());
}
