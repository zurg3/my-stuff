// Functions
function get_text() {
  return textarea.value;
}

function get_lines() {
  return get_text().split('\n');
}

function get_selected_text() {
  const start = textarea.selectionStart;
  const end = textarea.selectionEnd;

  if (start === end) return;

  return get_text().slice(start, end);
}

function get_selected_lines() {
  const selection = get_selected_text();

  if (selection) return selection.split('\n');
}

function set_text(text, save = true) {
  textarea.value = text;
  if (save) save_data();
}

function replace_selection(text, save = true) {
  textarea.setRangeText(text);
  if (save) save_data();
}

function set_result(result) {
  if (get_selected_text()) {
    replace_selection(result);
  }
  else {
    set_text(result);
  }
}

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

function set_mode(mode) {
  // Write mode (default)
  if (['write', 'w'].includes(mode)) {
    textarea.readOnly = false;
  }
  // Read-Only mode
  else if (['read', 'r'].includes(mode)) {
    textarea.readOnly = true;
  }
  // Execution mode
  else if (['exe', 'x'].includes(mode)) {
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
  statistics.characters = get_text().length;
  statistics.lines = get_lines().length;
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
  const data = localStorage.getItem('notepad_data') || '';
  set_text(data, false);
}

function save_data() {
  localStorage.setItem('notepad_data', get_text());
}

function load_config() {
  const loaded_config = JSON.parse(localStorage.getItem('notepad_config')) || default_config;
  Object.assign(config, loaded_config);
}

function save_config() {
  localStorage.setItem('notepad_config', JSON.stringify(config));
}

function clear_local_storage() {
  local_storage_items.forEach(item => localStorage.removeItem(item));
}

function open_file() {
  const text = get_text();

  if (!text || (text && confirm('Are you sure?'))) {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = '.txt';

    input.onchange = (event) => {
      const file = event.target.files[0];

      if (file) {
        const reader = new FileReader();
        reader.onload = (e) => set_text(e.target.result);
        reader.readAsText(file);
      }
    };

    input.click();
  }
}

async function open_file_url(url) {
  if (!url) url = prompt('URL');

  if (url && is_valid_url(url)) {
    set_text(await parse_data(url, 'text'));
  }
}

function save_file() {
  const blob = new Blob([get_text()], {type: 'text/plain;charset=utf-8'});
  const link = document.createElement('a');
  link.href = URL.createObjectURL(blob);
  link.download = 'document.txt';
  link.click();
  URL.revokeObjectURL(link.href);
}

function update_debug_text() {
  debug_text.textContent = '.';
  debug_text.textContent = '';
}

notepad.write = (text) => {
  set_text(text);
};

notepad.prepend = (text, newline = false) => {
  set_text(`${text}${newline ? '\n' : ''}${get_text()}`);
};

notepad.append = (text, newline = false) => {
  set_text(`${get_text()}${newline ? '\n' : ''}${text}`);
};

notepad.process_lines = (callback, delimiter = '\n') => {
  const text = get_selected_lines() || get_lines();
  set_result(text.map(callback).join(delimiter));
};

notepad.split_lines = (delimiter = ' ') => {
  const text = get_selected_lines() || get_lines();
  set_result(text.join(' ').split(delimiter).filter(Boolean).join('\n'));
};

notepad.join_lines = (delimiter = ' ') => {
  notepad.process_lines(line => line.trim(), delimiter);
};

notepad.trim_final_newlines = () => {
  set_text(get_text().trimEnd());
};

notepad.trim_leading_whitespace = () => {
  notepad.process_lines(line => line.trimStart());
};

notepad.trim_trailing_whitespace = () => {
  notepad.process_lines(line => line.trimEnd());
};

notepad.trim_whitespace = () => {
  notepad.process_lines(line => line.trim());
};

notepad.remove_empty_lines = () => {
  const text = get_selected_lines() || get_lines();
  set_result(text.filter(Boolean).join('\n'));
};

notepad.remove_duplicate_lines = () => {
  const text = get_selected_lines() || get_lines();
  set_result(unique_array(text).join('\n'));
};

notepad.minify = () => {
  notepad.join_lines('');
};

notepad.add_prefix = (prefix = '') => {
  notepad.process_lines(line => `${prefix}${line}`);
};

notepad.add_postfix = (postfix = '') => {
  notepad.process_lines(line => `${line}${postfix}`);
};

notepad.num_lines = () => {
  notepad.process_lines((line, i) => `${i + 1}. ${line}`);
};

notepad.sort_lines = (order = 'asc') => {
  if (['asc', 'desc'].includes(order)) {
    const text = get_selected_lines() || get_lines();

    if (order === 'asc') {
      set_result(text.sort(comparator).join('\n'));
    }
    else {
      set_result(text.sort(comparator).reverse().join('\n'));
    }
  }
};

notepad.reverse_lines = () => {
  const text = get_selected_lines() || get_lines();
  set_result(text.reverse().join('\n'));
};

notepad.shuffle_lines = () => {
  const text = get_selected_lines() || get_lines();
  set_result(shuffle_array(text).join('\n'));
};

notepad.execute = () => {
  const code = get_selected_text() || get_text();
  eval(code);
};

notepad.undo = () => {
  document.execCommand('undo');
};

notepad.redo = () => {
  document.execCommand('redo');
};

notepad.copy = () => {
  ClipboardJS.copy(get_text());
};

notepad.cut = () => {
  ClipboardJS.cut(textarea);
};

notepad.replace = (search, replace) => {
  set_text(get_text().replaceAll(search, replace));
};

notepad.clear = () => {
  set_text('');
};

notepad.reset = () => {
  if (confirm('Are you sure?')) {
    notepad.clear();
    clear_local_storage();
    window.location.reload();
  }
};
