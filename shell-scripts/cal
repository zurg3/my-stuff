#!/bin/bash

if [[ -z $1 ]]; then
  year=$(date +"%Y")
else
  year=$1
fi

if [[ -z $2 ]]; then
  col=3
else
  col=$2
fi

echo "<!DOCTYPE html>
<html>
  <head>
    <meta charset=\"utf-8\">
    <title>Calendar - $year</title>
    <style>
      body {
        background: Black;
        color: Green;
      }
    </style>
  </head>
  <body>
    <pre>
      $(cal -m $year -c $col)
    </pre>
  </body>
</html>" > $year.html
