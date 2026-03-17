// Hotkeys (keyboard shortcuts)
textarea.onkeydown = (e) => {
  // Tabulation
  if (e.code === 'Tab') {
    e.preventDefault();
    tabulation();
  }
  // Insert current time/date
  else if (e.code === 'F5' && config.f5_time_date) {
    e.preventDefault();
    insert_time_date();
  }
  // Open file
  else if (e.ctrlKey && !e.shiftKey && e.code === 'KeyO') {
    e.preventDefault();
    open_file();
  }
  // Open file from URL
  else if (e.ctrlKey && e.shiftKey && e.code === 'KeyO') {
    e.preventDefault();
    open_file_url();
  }
  // Save file
  else if (e.ctrlKey && e.code === 'KeyS') {
    e.preventDefault();
    save_file();
  }
  // Remove keyboard focus from textarea
  else if (e.ctrlKey && e.code === 'KeyQ') {
    e.preventDefault();
    textarea.blur();
  }
  // Execute
  else if (e.ctrlKey && e.code === 'KeyE') {
    e.preventDefault();
    notepad.execute();
  }
  // Toggle write/read mode
  else if (e.ctrlKey && e.code === 'KeyH') {
    e.preventDefault();
    textarea.readOnly = !textarea.readOnly;
  }
  // Toggle word wrap
  else if (e.ctrlKey && e.code === 'KeyJ') {
    e.preventDefault();
    toggle_word_wrap(!config.word_wrap);
  }
  // Reset Notepad settings
  else if (e.ctrlKey && e.code === 'KeyK') {
    e.preventDefault();
    notepad.reset();
  }
  // Minify text
  else if (e.ctrlKey && e.code === 'KeyM') {
    e.preventDefault();
    notepad.minify();
  }
  // Change font size
  else if (e.ctrlKey && (e.code === 'BracketLeft' || e.code === 'BracketRight')) {
    e.preventDefault();

    const current_font_size = config.font_size;

    // Decrease font size
    if (e.code === 'BracketLeft') {
      set_font_size(current_font_size - 1);
    }
    // Increase font size
    else if (e.code === 'BracketRight') {
      set_font_size(current_font_size + 1);
    }
  }
  // Switch themes
  else if (e.ctrlKey && (e.code === 'Comma' || e.code === 'Period')) {
    e.preventDefault();

    const current_theme_index = theme_keys.indexOf(config.theme);
    const last_theme_index = total_themes - 1;

    // Previous theme
    if (e.code === 'Comma' && current_theme_index > 0) {
      set_theme(theme_keys[current_theme_index - 1]);
    }
    // Next theme
    else if (e.code === 'Period' && current_theme_index < last_theme_index) {
      set_theme(theme_keys[current_theme_index + 1]);
    }
  }
};
