#!/bin/bash

name=$1

if [[ $name == "Stepan" ]]; then
  echo "Hello, $name"
elif [[ $name == "Jamie" ]]; then
  echo "Yo, $name"
else
  echo "Hi, $name"
fi

echo "Enter x"
read x

echo "Starting CASE..."
case $x in
  1) echo "One";;
  2) echo "Two";;
  3) echo "Three";;
  [4-9]) echo "Four-Nine";;
  10) echo "Ten";;
  *) echo "NOT One-Ten";;
esac
