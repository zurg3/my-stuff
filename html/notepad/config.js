// Notepad
const notepad = {};

// Config
const config = {};

// Default config
const default_config = {
  font_size: 10,
  soft_tabs: false,
  indent_size: 2,
  f5_time_date: true,
  time_date_format: 'HH:mm DD.MM.YYYY',
  theme: 'system',
  random_color_type: 'hex',
  random_color_hex_way: 1,
  word_wrap: true,
  placeholder: ''
};

Object.freeze(default_config);

// Statistics
const statistics = {
  characters: 0,
  lines: 0
};

// LocalStorage items
const local_storage_items = [
  'notepad_data',
  'notepad_config'
];

// Elements
const textarea = document.getElementById('textarea');
const debug_text = document.getElementById('debug_text');

// CSS
const html_body_css = document.styleSheets[0].cssRules[0];
const textarea_css = document.styleSheets[0].cssRules[1];

// URL
const current_url = new URL(window.location);
const params = Object.fromEntries(current_url.searchParams.entries());
