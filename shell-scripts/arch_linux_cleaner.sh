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

clear_bash_history() {
  history -c
  history -w
}

clear_repl_history() {
  if [[ -f ~/.python_history ]]; then
    echo "" > ~/.python_history
  fi

  if [[ -f ~/.node_repl_history ]]; then
    echo "" > ~/.node_repl_history
  fi

  if [[ -f ~/.sqlite_history ]]; then
    echo "" > ~/.sqlite_history
  fi
}

run_module=$1

if [[ -z $run_module ]]; then
  remove_orphans
  clear_pacman_cache
  clear_yay_cache
  clear_repl_history
  # clear_bash_history
else
  declare -f $run_module > /dev/null

  if [[ $? == "0" ]]; then
    $run_module
  else
    echo "Module not found!"
  fi
fi
