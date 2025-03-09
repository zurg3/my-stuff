// Options
if (current_url.search) {
  // Set version from URL
  if (params.version) set_version(params.version);

  // Set theme from URL
  if (params.theme && themes[params.theme]) set_theme(params.theme);

  // Set font size from URL
  if (params.fs) set_font_size(parseInt(params.fs, 10));

  // Set mode from URL
  if (params.mode && params.mode !== 'exe') set_mode(params.mode);

  // Enable/disable word wrap from URL
  if (['true', 'false'].includes(params.ww)) toggle_word_wrap(params.ww === 'true');
}

// Notepad initial actions (when window is loaded)
window.onload = () => {
  // Load Notepad data from LocalStorage
  textarea.value = localStorage.getItem('notepad_data') || '';

  // Set cursor position to beginning
  textarea.setSelectionRange(0, 0);

  // Set font size (if URL param not passed)
  if ((!current_url.search) || (current_url.search && !params.fs)) {
    const font_size = localStorage.getItem('notepad_font_size') || config.font_size;
    set_font_size(parseInt(font_size, 10));
  }

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

  // Execute
  if (current_url.search && params.mode && params.mode === 'exe') set_mode(params.mode);
};

textarea.oninput = () => {
  update_debug_text();

  // Save Notepad data to LocalStorage
  localStorage.setItem('notepad_data', textarea.value);
};
