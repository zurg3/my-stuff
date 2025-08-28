#!/bin/bash

print_separator() {
  echo "|--------------------------------------------------------|"
}

print_table_head() {
  print_separator
  echo "| UTC Time            | Local Time          | UNIX Time  |"
  print_separator
}

print_time() {
  local_time=$(date +"%H:%M:%S %d.%m.%Y")
  utc_time=$(date -u +"%H:%M:%S %d.%m.%Y")
  unix_time=$(date +"%s")
  echo "| $utc_time | $local_time | $unix_time |"
  sleep 1
}

if [[ -z $1 ]]; then
  print_table_head
  while [[ true ]]; do
    print_time
  done
elif [[ -n $1 ]]; then
  print_table_head
  for (( i = 0; i < $1; i++ )); do
    print_time
  done
  print_separator
else
  echo "Something is wrong!"
fi
