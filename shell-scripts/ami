#!/bin/bash

# AUR Mini Installer (AMI)

pkg=$1

if [[ -z $pkg ]]; then
  echo "ami [package]"
else
  git clone https://aur.archlinux.org/$pkg.git
  cd $pkg
  makepkg -sir --skippgpcheck
  cd ..
  rm -rf $pkg
fi
