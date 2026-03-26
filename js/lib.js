// zurg3's JavaScript library

const lib = {};

lib.is_mobile = () => window.screen.width < window.screen.height;

lib.back_to_top = () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
};

lib.resize_input = (element, ratio = 0.9) => {
  if (!element || !lib.is_mobile()) return;

  const width = Math.floor(document.body.offsetWidth * ratio);
  const tag = element.tagName.toLowerCase();

  if (tag === 'input' || tag === 'textarea') {
    element.removeAttribute(tag === 'input' ? 'size' : 'cols');
    element.style.width = `${width}px`;
  }
};

lib.is_valid_url = (s) => {
  if (typeof s !== 'string') return false;

  try {
    const url = new URL(s.trim());
    return ['https:', 'http:'].includes(url.protocol);
  }
  catch (error) {
    return false;
  }
};

lib.random_number = (min = 1, max = 100) => {
  if ((typeof min === 'number' && typeof max === 'number') && (min <= max)) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  else {
    return 0;
  }
};

lib.random_id = () => crypto.randomUUID();

lib.sum = (...numbers) => {
  if (numbers.length > 0) return numbers.reduce((total, num) => total + num, 0);
};

lib.multiply = (...numbers) => {
  if (numbers.length > 0) return numbers.reduce((total, num) => total * num, 1);
};

lib.average = (...numbers) => {
  if (numbers.length > 0) return lib.sum(...numbers) / numbers.length;
};

lib.digital_root = (n) => {
  if (typeof n === 'number') return (n - 1) % 9 + 1;
};

lib.reverse_string = (s) => {
  if (typeof s === 'string') return s.split('').reverse().join('');
};

lib.upper_case = (s) => {
  if (typeof s === 'string') return s.toUpperCase();
};

lib.lower_case = (s) => {
  if (typeof s === 'string') return s.toLowerCase();
};

lib.title_case = (s, extended = false) => {
  if (typeof s === 'string') {
    const reg_exp = extended ? /([- ])/ : /([ ])/;

    return s.toLowerCase().split(reg_exp).map(word => word.charAt(0).toUpperCase() + word.slice(1)).join('');
  }
};

lib.swap_case = (s) => {
  if (typeof s === 'string') return s.split('').map(char => char === char.toUpperCase() ? char.toLowerCase() : char.toUpperCase()).join('');
};

lib.comparator = (a, b) => a.toLowerCase().localeCompare(b.toLowerCase());

lib.unique_array = (array) => [...new Set(array)];

lib.count_of = (array, value) => array.filter(item => item === value).length;

lib.get_checked_radio_value = (radio_name) => {
  const checked_radio = document.querySelector(`input[name="${radio_name}"]:checked`);

  if (checked_radio) return checked_radio.value;
}

lib.parse_data_legacy = (url, type) => {
  const data_types = ['html', 'json', 'text'];

  if (!url || !data_types.includes(type)) return false;

  const xhr = new XMLHttpRequest();
  xhr.open('GET', url, false);

  try {
    xhr.send();

    if (xhr.status >= 200 && xhr.status < 300) {
      if (type === 'html') {
        return new DOMParser().parseFromString(xhr.responseText, 'text/html');
      }
      else if (type === 'json') {
        return JSON.parse(xhr.responseText);
      }
      else if (type === 'text') {
        return xhr.responseText;
      }
    }
    else {
      return false;
    }
  }
  catch (error) {
    return false;
  }
};

lib.parse_data = async (url, type) => {
  const data_types = ['html', 'json', 'text'];

  if (!url || !data_types.includes(type)) return false;

  try {
    const res = await fetch(url);

    if (!res.ok) return false;

    if (type === 'html') {
      return new DOMParser().parseFromString(await res.text(), 'text/html');
    }
    else if (type === 'json') {
      return await res.json();
    }
    else if (type === 'text') {
      return await res.text();
    }
  }
  catch (error) {
    return false;
  }
};

lib.sleep = (t = 1) => new Promise(r => setTimeout(r, t * 1000));
