#!/bin/bash

echo "1 - encrypt"
echo "2 - decrypt"
read -p "-> " gpg_option

read -e -p "File: " file_name

if [[ $gpg_option == "1" ]]; then
  gpg -c $file_name
elif [[ $gpg_option == "2" ]]; then
  gpg $file_name
fi
