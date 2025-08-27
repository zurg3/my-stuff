#!/bin/bash

echo "Select your distro:"
echo "1 - Debian/Ubuntu/Linux Mint"
echo "2 - Arch Linux"
echo "3 - Alpine Linux"
read -p "-> " distro

if [[ $distro == "1" || $distro == "2" || $distro == "3" ]]; then
  if [[ $distro == "1" ]]; then
    sudo apt update
    sudo apt upgrade
  elif [[ $distro == "2" ]]; then
    sudo pacman -Syy
    sudo pacman -Syu
  elif [[ $distro == "3" ]]; then
    sudo apk update
    sudo apk upgrade
  fi

  echo "Your system is updated."
else
  echo "Something is wrong!"
fi
