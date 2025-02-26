// https://benborgers.com/textarea-tab
// https://98.js.org/programs/notepad/
// https://github.com/1j01/98/tree/master/programs/notepad
// https://stackoverflow.com/questions/56393880/

// Hotkeys
textarea.addEventListener('keydown', (e) => {
  // [Tab] Tabulation
  if (e.key === 'Tab') {
    e.preventDefault();
    tabulation();
  }
  // [F5] Insert current time/date
  else if (e.key === 'F5' && config.f5_time_date) {
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

  // Set font size
  if (params.fs) set_font_size(parseInt(params.fs, 10));

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
    const theme = localStorage.getItem('notepad_theme') || config.default_theme;
    set_theme(theme);
  }

  // Set word wrap settings (if URL param not passed; or param's value is incorrect)
  if ((!current_url.search) || (current_url.search && !params.ww) || (current_url.search && params.ww && !['true', 'false'].includes(params.ww))) {
    const word_wrap = localStorage.getItem('notepad_word_wrap') || config.word_wrap.toString();
    toggle_word_wrap(word_wrap === 'true');
  }
};

textarea.oninput = () => {
  update_debug_text();

  // Save Notepad data to LocalStorage
  localStorage.setItem('notepad_data', textarea.value);
};
