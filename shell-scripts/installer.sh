#!/bin/bash

echo "Select your distro:"
echo "1 - Debian/Ubuntu/Linux Mint"
echo "2 - Arch Linux"
echo "3 - Alpine Linux"
read -p "-> " distro

echo "Enter package/packages name"
read -p "-> " pkg

if [[ $distro == "1" || $distro == "2" || $distro == "3" ]]; then
  if [[ $distro == "1" ]]; then
    sudo apt update
    sudo apt install $pkg
  elif [[ $distro == "2" ]]; then
    sudo pacman -Syy
    sudo pacman -S $pkg
  elif [[ $distro == "3" ]]; then
    sudo apk update
    sudo apk add $pkg
  fi

  echo "$pkg installed."
else
  echo "Something is wrong!"
fi
