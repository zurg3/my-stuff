// https://benborgers.com/textarea-tab
// https://98.js.org/programs/notepad/
// https://github.com/1j01/98/tree/master/programs/notepad
// https://stackoverflow.com/questions/56393880/

// Config
const config = {
  indent_mode: 'tabs',
  indent_size: 2,
  f5_time_date: true,
  time_date_format: 'HH:mm DD.MM.YYYY',
  default_theme: 'system',
  default_random_color_way: 1,
  word_wrap: true
};

// Statistics
const statistics = {
  characters: 0,
  lines: 0
};

const textarea = document.getElementById('textarea');

const html_body_css = document.styleSheets[0].cssRules[0];
const textarea_css = document.styleSheets[0].cssRules[1];

const debug_text = document.getElementById('debug_text');

const themes = {
  // System Theme (Light or Dark)
  system: [],
  // Light Theme
  light: ['white', 'black'],
  // Dark Theme
  dark: ['black', 'white'],
  // Terminal Theme
  terminal: ['black', 'green'],
  // Zen Theme (a.k.a. Solarized, colors taken from https://zen.unit.ms)
  zen: ['#fdf6e3', '#657b83'],
  // EditorJS Theme (colors taken from https://zurg3.github.io/my-stuff/html/editor_editorjs.html)
  editorjs: ['#f5eedb', '#19160f'],
  // Atom Theme (a.k.a. Atom One Dark)
  atom: ['#282c34', '#abb2bf'],
  // Midnight Theme
  midnight: ['#191970', '#ffd700'],
  // Ocean Breeze Theme (colors and name suggested by GPT-4o mini)
  ocean: ['#e0f7fa', '#006064'],
  // Forest Green Theme (colors and name suggested by GPT-4o mini)
  forest: ['#2e3a2c', '#e0f7fa'],
  // Fiery Red Theme (colors and name suggested by GPT-4o mini)
  fiery: ['#300000', '#ffffff'],
  // Sunny Orange Theme (colors and name suggested by GPT-4o mini)
  sunny: ['#ffcc80', '#4e342e'],
  // Galactic Nebula Theme (colors and name suggested by GPT-4o mini)
  galactic: ['#1a1a2e', '#e94560'],
  // Retro Wave Theme (colors and name suggested by GPT-4o mini)
  retro: ['#2b003c', '#ff6f61'],
  // Abyss Theme (colors taken from Visual Studio Code)
  abyss: ['#000c18', '#6688cc'],
  // Kimbie Dark Theme (colors taken from Visual Studio Code)
  kimbie: ['#221a0f', '#d3af86'],
  // Red Theme (colors taken from Visual Studio Code)
  red: ['#390000', '#f8f8f8'],
  // Solarized Dark Theme (colors taken from Visual Studio Code)
  solarized: ['#002b36', '#839496'],
  // Tomorrow Night Blue Theme (colors taken from Visual Studio Code)
  tomorrow: ['#002451', '#ffffff'],
  // Copper Evening Theme (name suggested by GPT-4o mini)
  copper: ['#24272d', '#d56835'],
  // Random Colors Theme (colors are generated randomly)
  random: []
};

const local_storage_items = [
  'notepad_data',
  'notepad_theme',
  'notepad_word_wrap'
];

const current_url = new URL(window.location);
const params = Object.fromEntries(current_url.searchParams.entries());

// Functions
function random_number(min = 1, max = 100) {
  if ((typeof min === 'number' && typeof max === 'number') && (min <= max)) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  else {
    return 0;
  }
}

function set_font_size(font_size) {
  textarea_css.style.setProperty('font-size', `${font_size}pt`);
}

function set_indent_size(indent_size) {
  config.indent_size = indent_size;
  textarea_css.style.setProperty('tab-size', `${indent_size}`);
}

function tabulation() {
  let indent = '';
  if (config.indent_mode === 'spaces') {
    indent = ' '.repeat(config.indent_size);
  }
  else if (config.indent_mode === 'tabs') {
    indent = '\t';
  }
  textarea.setRangeText(indent, textarea.selectionStart, textarea.selectionStart, 'end');
}

function insert_time_date() {
  let time_date = moment().format(config.time_date_format);
  textarea.focus();
  document.execCommand('insertText', false, time_date);
}

function set_version(version) {
  // Classic Version
  if (version === 'classic') {
    [
      'padding',
      'font-family',
      'font-size',
      'line-height'
    ].forEach((property) => {
      textarea_css.style.removeProperty(property);
    });
  }
  else {
    console.warn('Error: Version not found!');
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

function random_color(way = config.default_random_color_way) {
  if (![1, 2, 3, 4].includes(way)) way = config.default_random_color_way;

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
}

function set_theme(theme_name) {
  themes.system = detect_system_theme() === 'light' ? themes.light : themes.dark;
  themes.random = [random_color(), random_color()];

  if (themes[theme_name]) {
    set_theme_colors(...themes[theme_name]);
    localStorage.setItem('notepad_theme', theme_name);
  }
  else {
    console.warn('Error: Theme not found!');
  }
}

function show_themes() {
  console.log(`Themes:`);
  Object.keys(themes).forEach((theme) => {
    console.log(`${localStorage.getItem('notepad_theme') === theme ? '->' : '-'} ${theme}`);
  });
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
}

function toggle_word_wrap(option) {
  if (typeof option === 'boolean') {
    config.word_wrap = option;
    textarea_css.style.setProperty('overflow-x', option ? 'auto' : 'scroll');
    textarea_css.style.setProperty('white-space', option ? 'pre-wrap' : 'pre');
    localStorage.setItem('notepad_word_wrap', `${option}`);
  }
}

function clear_local_storage() {
  if (confirm('Are you sure?')) {
    local_storage_items.forEach((item) => localStorage.removeItem(item));
  }
}

function save_file() {
  let blob = new Blob([textarea.value], {type: 'text/plain;charset=utf-8'});
  let link = document.createElement('a');
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

// Hotkeys
textarea.addEventListener('keydown', (e) => {
  // [Tab] Tabulation
  if (e.keyCode === 9) {
    e.preventDefault();
    tabulation();
  }
  // [F5] Insert current time/date
  else if (e.keyCode === 116 && config.f5_time_date) {
    e.preventDefault();
    insert_time_date();
  }
});

// Options
if (current_url.search) {
  // Set version from URL
  if (params.version) set_version(params.version);

  // Set theme from URL
  if (params.theme && themes[params.theme]) set_theme(params.theme);

  // Read-Only mode
  if (params.mode === 'read') textarea.readOnly = true;

  // Enable/disable word wrap from URL
  if (['true', 'false'].includes(params.ww)) toggle_word_wrap(params.ww === 'true');
}

// Notepad initial actions (when window is loaded)
window.onload = () => {
  // Load Notepad data from LocalStorage
  textarea.value = localStorage.getItem('notepad_data') || '';

  // Set cursor position to beginning
  textarea.setSelectionRange(0, 0);

  // Set default indent size
  set_indent_size(config.indent_size);

  // Set theme (if URL param not passed; or param's value is incorrect)
  if ((!current_url.search) || (current_url.search && !params.theme) || (current_url.search && params.theme && !themes[params.theme])) {
    let theme = localStorage.getItem('notepad_theme') || config.default_theme;
    set_theme(theme);
  }

  // Set word wrap settings (if URL param not passed; or param's value is incorrect)
  if ((!current_url.search) || (current_url.search && !params.ww) || (current_url.search && params.ww && !['true', 'false'].includes(params.ww))) {
    let word_wrap = localStorage.getItem('notepad_word_wrap') || config.word_wrap.toString();
    toggle_word_wrap(word_wrap === 'true');
  }
};

textarea.oninput = () => {
  update_debug_text();

  // Save Notepad data to LocalStorage
  localStorage.setItem('notepad_data', textarea.value);
};
