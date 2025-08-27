#!/bin/bash

summa=0
today=$(date +"%d.%m.%Y")
tomorrow=$(date +"%d.%m.%Y" --date 'tomorrow')

my_function() {
  echo "$today"
  echo "Next day - $tomorrow"
  echo "Num1 = $1"
  echo "Num2 = $2"
  summa=$(($1 + $2))
}

my_function 10 20
echo "Summa = $summa"
