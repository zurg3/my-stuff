#!/bin/bash

file_name=$2
file_type=$1

create_sh_file() {
  echo "#!/bin/bash

# code" > $file_name.$file_type

  chmod +x $file_name.$file_type
}

create_c_file() {
  echo "#include <stdio.h>

int main() {
  /* code */

  return 0;
}" > $file_name.$file_type
}

create_cpp_file() {
  echo "#include <iostream>
using namespace std;

int main() {
  /* code */

  return 0;
}" > $file_name.$file_type
}

create_d_file() {
  echo "import std.stdio;

void main() {
  /* code */
}" > $file_name.$file_type
}

create_java_file() {
  class_name=$(echo $file_name | awk -F "/" '{print $NF}')

  echo "public class $class_name {
  public static void main(String[] args) {
    /* code */
  }
}" > $file_name.$file_type
}

create_html_file() {
  echo "<!DOCTYPE html>
<html>
  <head>
    <meta charset=\"utf-8\">
    <title></title>
  </head>
  <body>
  </body>
</html>" > $file_name.$file_type
}

create_php_file() {
  echo "<?php
  /* code */
?>" > $file_name.$file_type
}

create_go_file() {
  echo "package main

import \"fmt\"

func main() {
  /* code */
}" > $file_name.$file_type
}

if [[ -z $file_name || -z $file_type ]]; then
  echo "$(basename $0) [sh|c|cpp|d|java|html|php|go] [filename]"
elif [[ -n $file_name && -n $file_type ]]; then
  case $file_type in
    sh) create_sh_file $@;;
    c) create_c_file $@;;
    cpp) create_cpp_file $@;;
    d) create_d_file $@;;
    java) create_java_file $@;;
    html) create_html_file $@;;
    php) create_php_file $@;;
    go) create_go_file $@;;
  esac
  echo "File created."
fi
