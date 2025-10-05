#!/bin/bash

# AUR Mini Installer (AMI)

pkg=$1

if [[ -z $pkg ]]; then
  echo "$(basename $0) [package]"
else
  if [[ $(id -u) == "0" ]]; then
    echo "Error: Running makepkg as root isn't allowed!"
    exit 1
  else
    git clone https://aur.archlinux.org/$pkg.git
    cd $pkg
    makepkg -sir --skippgpcheck
    cd ..
    rm -rf $pkg
  fi
fi
