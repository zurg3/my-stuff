#!/bin/bash

read -p "Enter the count of random SHA1 hashes: " x

for (( i = 0; i < x; i++ )); do
  random_hash=$(date +"%s" | sha1sum | awk '{print $1}')
  echo $random_hash
  sleep 1
done
