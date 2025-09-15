#!/bin/bash

# Run this script: source install_stuff.sh

install_path="$HOME/bin"
bashrc_path="$HOME/.bashrc"
update_bashrc="false"

mkdir -p $install_path

shell_scripts=(
  "ami"
  "create_code_file"
  "arch_linux_cleaner"
)

g++ cpp/git_puller.cpp -static -std=c++20 -o $install_path/git_puller
# ln -f python/git_puller.py ~
for shell_script in ${shell_scripts[@]}; do
  ln -f shell-scripts/$shell_script.sh $install_path/$shell_script
done

echo $PATH | grep -q $install_path
if [[ $? == "1" ]]; then
  {
    echo ""
    echo 'export PATH="$PATH:$HOME/bin"'
  } >> $bashrc_path

  update_bashrc="true"
fi

alias | grep -qE 'greenterm|clear_bash_history'
if [[ $? == "1" ]]; then
  {
    echo ""
    echo "alias greenterm='setterm -fore green -back black -store'"
    echo "alias clear_bash_history='history -c && history -w'"
    # echo "alias git_puller='python ~/git_puller.py'"
  } >> $bashrc_path

  update_bashrc="true"
fi

if [[ $update_bashrc == "true" ]]; then
  source $bashrc_path
fi

unset install_path bashrc_path update_bashrc shell_scripts shell_script
