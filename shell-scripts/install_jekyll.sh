#!/bin/bash

# Run this script: source install_jekyll.sh

ruby_env_config="$HOME/.bashrc"
gem_config="$HOME/.gemrc"

echo "Select your distro:"
echo "1 - Debian/Ubuntu/Linux Mint"
echo "2 - Arch Linux"
echo "3 - Alpine Linux"
read -p "-> " distro

if [[ $distro == "1" || $distro == "2" || $distro == "3" ]]; then
  if [[ $distro == "1" ]]; then
    sudo apt update
    sudo apt install ruby-full build-essential
  elif [[ $distro == "2" ]]; then
    sudo pacman -Syy
    sudo pacman -S ruby ruby-stdlib
  elif [[ $distro == "3" ]]; then
    sudo apk update
    sudo apk add ruby ruby-dev build-base
  fi

  echo 'gem: --no-user-install --no-document' > $gem_config
  echo 'export GEM_HOME="$HOME/.gem"' >> $ruby_env_config
  echo 'export PATH="$PATH:$GEM_HOME/bin"' >> $ruby_env_config
  source $ruby_env_config

  gem install jekyll bundler

  jekyll new myblog
  cd myblog
  bundle exec jekyll serve

  bundle update
else
  echo "Something is wrong!"
fi
