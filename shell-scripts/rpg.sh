#!/bin/bash

# Random Password Generator (RPG)

num=$1
len=$2

if [[ -z $num || -z $len ]]; then
  echo "rpg.sh [amount] [length]"
elif [[ -n $num && -n $len ]]; then
  cat /dev/urandom | tr -dc 'A-Za-z0-9' | fold -w $len | head -n $num
fi
