#!/bin/bash

clear_pacman_cache() {
  sudo pacman -Scc
}

clear_yay_cache() {
  command -v yay > /dev/null

  if [[ $? == "0" ]]; then
    rm -rf ~/.cache/yay/*
  fi
}

remove_orphans() {
  pacman -Qdtq > /dev/null

  if [[ $? == "0" ]]; then
    sudo pacman -Rsn $(pacman -Qdtq)
  fi
}

clear_repl_history() {
  repl_history_files=(
    ".python_history" # Python
    ".node_repl_history" # Node.js
    ".irb_history" # Ruby
    ".sqlite_history" # SQLite
  )

  for repl_history_file in ${repl_history_files[@]}; do
    [[ -f "$HOME/$repl_history_file" ]] && echo "" > "$HOME/$repl_history_file"
  done
}

remove_orphans
clear_pacman_cache
clear_yay_cache
clear_repl_history
