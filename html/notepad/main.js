// Notepad initial actions
window.onload = () => {
  // Load Notepad config from LocalStorage
  load_config();

  // Set version from URL
  if (params.version) set_version(params.version);

  // Set placeholder
  if (config.placeholder) textarea.placeholder = config.placeholder;

  // Load Notepad data from LocalStorage
  load_data();

  // Set cursor position to beginning
  textarea.setSelectionRange(0, 0);

  // Set font size
  const font_size = params.fs || config.font_size;
  set_font_size(parseInt(font_size, 10));

  // Set indent size
  set_indent_size(config.indent_size);

  // Set theme
  const theme = themes[params.theme] ? params.theme : config.theme;
  set_theme(theme);

  // Set word wrap settings
  const word_wrap = ['true', 'false'].includes(params.ww) ? params.ww : config.word_wrap.toString();
  toggle_word_wrap(word_wrap === 'true');

  // Set mode from URL
  if (params.mode) set_mode(params.mode);
};

textarea.oninput = () => {
  update_debug_text();

  // Save Notepad data to LocalStorage
  save_data();
};
