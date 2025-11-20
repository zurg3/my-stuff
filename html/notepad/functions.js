// Functions
function set_font_size(font_size) {
  const min_font_size = 4;
  const max_font_size = 30;

  if ((typeof font_size === 'number') && (font_size >= min_font_size && font_size <= max_font_size)) {
    textarea_css.style.setProperty('font-size', `${font_size}pt`);
    config.font_size = font_size;
    save_config();
  }
}

function set_indent_size(indent_size) {
  const min_indent_size = 2;
  const max_indent_size = 10;

  if ((typeof indent_size === 'number') && (indent_size >= min_indent_size && indent_size <= max_indent_size)) {
    textarea_css.style.setProperty('tab-size', `${indent_size}`);
    config.indent_size = indent_size;
    save_config();
  }
}

function tabulation() {
  const indent = config.soft_tabs ? ' '.repeat(config.indent_size) : '\t';
  textarea.focus();
  document.execCommand('insertText', false, indent);
}

function insert_time_date() {
  const time_date = dayjs().format(config.time_date_format);
  textarea.focus();
  document.execCommand('insertText', false, time_date);
}

function set_version(version) {
  // Classic Version
  if (version === 'classic') {
    [
      'padding',
      'font-family',
      'line-height'
    ].forEach((property) => textarea_css.style.removeProperty(property));
  }
  // Test Version
  else if (version === 'test') {
    window.open('https://zurg3.github.io/test/notepad.html', '_self');
  }
  else {
    console.warn('Error: Version not found!');
  }
}

function set_mode(mode) {
  // Write mode (default)
  if (mode === 'write') {
    textarea.readOnly = false;
  }
  // Read-Only mode
  else if (mode === 'read') {
    textarea.readOnly = true;
  }
  // Execution mode
  else if (mode === 'exe') {
    notepad.execute();
  }
  else {
    console.warn('Error: Mode not found!');
  }
}

function detect_system_theme() {
  if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
    return 'light';
  }
  else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    return 'dark';
  }
}

function random_color_hex(way = config.random_color_hex_way) {
  if (![1, 2, 3, 4].includes(way)) way = config.random_color_hex_way;

  let color_hex = '#';

  if (way === 1) {
    for (let i = 0; i < 3; i++) {
      color_hex += random_number(0, 255).toString(16).padStart(2, '0');
    }
  }
  else if (way === 2) {
    color_hex += random_number(0x000000, 0xffffff).toString(16).padStart(6, '0');
  }
  else if (way === 3) {
    let array = new Uint8Array(3);

    crypto.getRandomValues(array);

    for (let i = 0; i < 3; i++) {
      color_hex += array[i].toString(16).padStart(2, '0');
    }
  }
  else if (way === 4) {
    const symbols = '0123456789ABCDEF';

    for (let i = 0; i < 6; i++) {
      color_hex += symbols[random_number(0, 15)].toLowerCase();
    }
  }

  return color_hex;
}

function random_color_hsl(h, s, l) {
  if (!h) h = random_number(0, 360);
  if (!s) s = random_number(0, 100);
  if (!l) l = random_number(0, 100);

  const color_hsl = `hsl(${h}, ${s}%, ${l}%)`;

  return color_hsl;
}

function set_theme_colors(bg_color, font_color) {
  // Background
  if (bg_color) {
    textarea_css.style.setProperty('background', bg_color);
    html_body_css.style.setProperty('background', bg_color);
  }
  // Font
  if (font_color) {
    textarea_css.style.setProperty('color', font_color);
  }
  // Scrollbar
  if (bg_color && font_color) {
    textarea_css.style.setProperty('scrollbar-color', `${font_color} ${bg_color}`);
  }
}

function set_theme(theme_key) {
  themes.system.colors = detect_system_theme() === 'light' ? themes.light.colors : themes.dark.colors;
  if (config.random_color_type === 'hex') {
    themes.random.colors = [random_color_hex(), random_color_hex()];
  }
  else if (config.random_color_type === 'hsl') {
    const random_h = random_number(0, 360);
    themes.random.colors = [random_color_hsl(random_h, 75, 10), random_color_hsl(random_h, 75, 60)];
  }

  if (themes[theme_key]) {
    set_theme_colors(...themes[theme_key].colors);
    config.theme = theme_key;
    save_config();
  }
  else {
    console.warn('Error: Theme not found!');
  }
}

function show_theme(theme_key) {
  if (theme_key) {
    if (themes[theme_key]) {
      console.log(themes[theme_key].name);
      if (themes[theme_key].description) console.log(themes[theme_key].description);
      if (!['system', 'random'].includes(theme_key)) console.log(...themes[theme_key].colors);
    }
    else {
      console.warn('Error: Theme not found!');
    }
  }
  else {
    console.log(`Themes:`);
    for (let i = 0; i < total_themes; i++) {
      console.log(`${config.theme === theme_keys[i] ? '[*]' : '[ ]'} ${theme_keys[i]} [${i + 1}/${total_themes}]`);
    }
  }
}

function update_statistics() {
  statistics.characters = textarea.value.length;
  statistics.lines = textarea.value.split('\n').length;
}

function show_statistics() {
  update_statistics();

  console.log(`Statistics:`);
  console.log(`- Characters: ${statistics.characters}`);
  console.log(`- Lines: ${statistics.lines}`);
  console.log(`-----`);
  console.log(`- Themes: ${total_themes}`);
}

function toggle_word_wrap(option) {
  if (typeof option === 'boolean') {
    textarea_css.style.setProperty('overflow-x', option ? 'auto' : 'scroll');
    textarea_css.style.setProperty('white-space', option ? 'pre-wrap' : 'pre');
    config.word_wrap = option;
    save_config();
  }
}

function load_data() {
  textarea.value = localStorage.getItem('notepad_data') || '';
}

function save_data() {
  localStorage.setItem('notepad_data', textarea.value);
}

function load_config() {
  const loaded_config = JSON.parse(localStorage.getItem('notepad_config')) || default_config;
  Object.assign(config, loaded_config);
}

function save_config() {
  localStorage.setItem('notepad_config', JSON.stringify(config));
}

function clear_local_storage() {
  local_storage_items.forEach((item) => localStorage.removeItem(item));
}

function open_file() {
  if (!textarea.value || (textarea.value && confirm('Are you sure?'))) {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = '.txt';

    input.onchange = (event) => {
      const file = event.target.files[0];

      if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
          textarea.value = e.target.result;
          save_data();
        };
        reader.readAsText(file);
      }
    };

    input.click();
  }
}

function open_file_url(url) {
  if (!url) url = prompt('URL');

  if (url && (url.startsWith('https://') || url.startsWith('http://'))) {
    const xmlhttp = new XMLHttpRequest();
    xmlhttp.open('GET', url, false);

    try {
      xmlhttp.send();

      if (xmlhttp.status >= 200 && xmlhttp.status < 300) {
        textarea.value = xmlhttp.responseText;
        save_data();
      }
      else {
        console.warn(`HTTP error: ${xmlhttp.status}`);
      }
    }
    catch (error) {
      console.warn(`Error: ${error}`);
    }
  }
}

function save_file() {
  const blob = new Blob([textarea.value], {type: 'text/plain;charset=utf-8'});
  const link = document.createElement('a');
  link.href = URL.createObjectURL(blob);
  link.download = 'document.txt';
  link.click();
  URL.revokeObjectURL(link.href);
}

function update_debug_text() {
  //debug_text.textContent = textarea.value;
  debug_text.textContent = '.';
  debug_text.textContent = '';
}

notepad.write = (text) => {
  textarea.value = text;
  save_data();
};

notepad.prepend = (text) => {
  textarea.value = text + textarea.value;
  save_data();
};

notepad.append = (text) => {
  textarea.value = textarea.value + text;
  save_data();
};

notepad.split_lines = (delimiter = ' ') => {
  textarea.value = textarea.value.split('\n').join(' ').split(delimiter).filter(Boolean).join('\n');
  save_data();
};

notepad.join_lines = (delimiter = ' ') => {
  let text = textarea.value.split('\n');

  for (let i = 0; i < text.length; i++) {
    text[i] = text[i].trim();
  }

  textarea.value = text.join(delimiter);
  save_data();
};

notepad.minify = () => {
  notepad.join_lines('');
};

notepad.add_prefix = (prefix = '') => {
  let text = textarea.value.split('\n');

  for (let i = 0; i < text.length; i++) {
    text[i] = `${prefix}${text[i]}`;
  }

  textarea.value = text.join('\n');
  save_data();
};

notepad.add_postfix = (postfix = '') => {
  let text = textarea.value.split('\n');

  for (let i = 0; i < text.length; i++) {
    text[i] = `${text[i]}${postfix}`;
  }

  textarea.value = text.join('\n');
  save_data();
};

notepad.num_lines = () => {
  let text = textarea.value.split('\n');

  for (let i = 0; i < text.length; i++) {
    text[i] = `${i + 1}. ${text[i]}`;
  }

  textarea.value = text.join('\n');
  save_data();
};

notepad.execute = () => {
  eval(textarea.value);
};

notepad.undo = () => {
  document.execCommand('undo');
};

notepad.redo = () => {
  document.execCommand('redo');
};

notepad.copy = () => {
  ClipboardJS.copy(textarea.value);
};

notepad.cut = () => {
  ClipboardJS.cut(textarea);
};

notepad.replace = (search, replace) => {
  textarea.value = textarea.value.replaceAll(search, replace);
  save_data();
};

notepad.clear = () => {
  textarea.value = '';
  save_data();
};

notepad.reset = () => {
  if (confirm('Are you sure?')) {
    notepad.clear();
    clear_local_storage();
    window.location.reload();
  }
};
