#!/bin/bash

# Run this script: source install_stuff.sh

dir_name="Software"
install_path="$HOME/$dir_name"
alias_path="~/$dir_name"
bashrc_path="$HOME/.bashrc"

mkdir -p $install_path

g++ cpp/git_puller.cpp -static -std=c++20 -o $install_path/git_puller
# ln -f python/git_puller.py $install_path
ln -f shell-scripts/{ami,create_code_file,arch_linux_cleaner}.sh $install_path

alias | grep -qE 'git_puller|ami|create_code_file|arch_linux_cleaner|clear_yay_cache'
if [[ $? == "1" ]]; then
  {
    echo ""
    echo "alias greenterm='setterm -fore green -back black -store'"
    echo "alias git_puller='$alias_path/git_puller'"
    # echo "alias git_puller='python $alias_path/git_puller.py'"
    echo "alias ami='$alias_path/ami.sh'"
    echo "alias create_code_file='$alias_path/create_code_file.sh'"
    echo "alias arch_linux_cleaner='$alias_path/arch_linux_cleaner.sh'"
    # echo "alias clear_yay_cache='$alias_path/arch_linux_cleaner.sh clear_yay_cache'"
  } >> $bashrc_path

  source $bashrc_path
fi
