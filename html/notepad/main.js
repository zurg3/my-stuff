// Notepad initial actions
window.onload = () => {
  // Set version from URL
  if (params.version) set_version(params.version);

  // Load Notepad data from LocalStorage
  textarea.value = localStorage.getItem('notepad_data') || '';

  // Set cursor position to beginning
  textarea.setSelectionRange(0, 0);

  // Set font size
  const font_size = params.fs || localStorage.getItem('notepad_font_size') || config.font_size;
  set_font_size(parseInt(font_size, 10));

  // Set default indent size
  set_indent_size(config.indent_size);

  // Set theme
  const theme = themes[params.theme] ? params.theme : localStorage.getItem('notepad_theme') || config.default_theme;
  set_theme(theme);

  // Set word wrap settings
  const word_wrap = ['true', 'false'].includes(params.ww) ? params.ww : localStorage.getItem('notepad_word_wrap') || config.word_wrap.toString();
  toggle_word_wrap(word_wrap === 'true');

  // Set mode from URL
  if (params.mode) set_mode(params.mode);
};

textarea.oninput = () => {
  update_debug_text();

  // Save Notepad data to LocalStorage
  localStorage.setItem('notepad_data', textarea.value);
};
