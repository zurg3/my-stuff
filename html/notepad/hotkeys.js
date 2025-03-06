// Hotkeys (keyboard shortcuts)
textarea.onkeydown = (e) => {
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
  // [Ctrl]+[O] Open file
  else if (e.ctrlKey && e.key === 'o') {
    e.preventDefault();
    open_file();
  }
  // [Ctrl]+[Shift]+[O] Open file from URL
  else if (e.ctrlKey && e.shiftKey && e.key === 'O') {
    e.preventDefault();
    open_file_url();
  }
  // [Ctrl]+[S] Save file
  else if (e.ctrlKey && e.key === 's') {
    e.preventDefault();
    save_file();
  }
};
