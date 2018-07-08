#!/bin/bash

if [[ $1 == "" ]]; then
  echo "|--------------------------------------------------------|"
  echo "| UTC Time            | Local Time          | UNIX Time  |"
  echo "|--------------------------------------------------------|"
  while [[ true ]]; do
    local_time=$(date +"%H:%M:%S %d.%m.%Y")
    utc_time=$(date -u +"%H:%M:%S %d.%m.%Y")
    unix_time=$(date +%s)
    echo "| $utc_time | $local_time | $unix_time |"
    sleep 1
  done
elif [[ $1 != "" ]]; then
  echo "|--------------------------------------------------------|"
  echo "| UTC Time            | Local Time          | UNIX Time  |"
  echo "|--------------------------------------------------------|"
  for (( i = 0; i < $1; i++ )); do
    local_time=$(date +"%H:%M:%S %d.%m.%Y")
    utc_time=$(date -u +"%H:%M:%S %d.%m.%Y")
    unix_time=$(date +%s)
    echo "| $utc_time | $local_time | $unix_time |"
    sleep 1
  done
  echo "|--------------------------------------------------------|"
else
  echo "Something is wrong!"
fi
