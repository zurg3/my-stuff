// zurg3's JavaScript library

const lib = {};

function is_mobile() {
  return window.screen.width < window.screen.height;
}

function back_to_top() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

function is_valid_url(s) {
  if (typeof s !== 'string') return false;

  try {
    const url = new URL(s.trim());
    return ['https:', 'http:'].includes(url.protocol);
  }
  catch (error) {
    return false;
  }
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

function title_case(s, extended = false) {
  if (typeof s === 'string') {
    const reg_exp = extended ? /([- ])/ : /([ ])/;

    return s.toLowerCase().split(reg_exp).map(word => word.charAt(0).toUpperCase() + word.slice(1)).join('');
  }
}

function swap_case(s) {
  if (typeof s === 'string') return s.split('').map(char => char === char.toUpperCase() ? char.toLowerCase() : char.toUpperCase()).join('');
}

function comparator(a, b) {
  return a.toLowerCase().localeCompare(b.toLowerCase());
}

function unique_array(array) {
  return [...new Set(array)];
}

function count_of(array, value) {
  return array.filter(item => item === value).length;
}

function is_any_radio_checked(radio_name) {
  return document.querySelector(`input[name="${radio_name}"]:checked`) !== null;
}

function get_checked_radio_value(radio_name) {
  return document.querySelector(`input[name="${radio_name}"]:checked`).value;
}

function parse_data_legacy(url, type) {
  const data_types = ['html', 'json', 'text'];

  if (!url || !data_types.includes(type)) return false;

  const xhr = new XMLHttpRequest();
  xhr.open('GET', url, false);

  try {
    xhr.send();

    if (xhr.status >= 200 && xhr.status < 300) {
      if (type === 'html') return new DOMParser().parseFromString(xhr.responseText, 'text/html');
      if (type === 'json') return JSON.parse(xhr.responseText);
      if (type === 'text') return xhr.responseText;
    }
    else {
      return false;
    }
  }
  catch (error) {
    return false;
  }
}

async function parse_data(url, type) {
  const data_types = ['html', 'json', 'text'];

  if (!url || !data_types.includes(type)) return false;

  try {
    const res = await fetch(url);

    if (!res.ok) return false;

    if (type === 'html') return new DOMParser().parseFromString(await res.text(), 'text/html');
    if (type === 'json') return await res.json();
    if (type === 'text') return await res.text();
  }
  catch (error) {
    return false;
  }
}

function sleep(t = 1) {
  return new Promise(r => setTimeout(r, t * 1000));
}
