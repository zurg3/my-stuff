#!/bin/bash

### You need installed vim (or nano) and pandoc on your OS to run this script!

# editor="nano"
editor="vim"

month_array=("January" "February" "March" "April" "May" "June" "July" "August" "September" "October" "November" "December")

read -p "Title: " title
read -p "Your name: " author
file_name_main=$(date +"%s")
file_name="$file_name_main.md"
file_name_tmp="$file_name_main.tmp.md"
echo "Your story..." > $file_name

$editor $file_name

cp $file_name $file_name_tmp

current_month=$(date +"%-m")
current_month=$(expr $current_month - 1)
post_date=$(date +"%d, %Y")
post_date="${month_array[$current_month]} $post_date"

echo "<h1 class='post-title'>$title</h1>
<span class='post-date'>*$post_date*</span> *by* <span class='author'>*$author*</span>

-----
" > $file_name
cat $file_name_tmp >> $file_name

pandoc $file_name -o $file_name_main.html
cp $file_name_main.html $file_name_main.tmp.html

echo "<!DOCTYPE html>
<html>
<head>
<meta charset='utf-8'>
<link href='https://fonts.googleapis.com/css?family=Noto+Serif' rel='stylesheet'>
<title>$title</title>
<style>
  body {
    font-family: 'Noto Serif', serif;
  }

  .post {
    margin-left: 30px;
    margin-right: 30px;
  }
</style>
</head>
<body>
<article class='post'>" > $file_name_main.html
cat $file_name_main.tmp.html >> $file_name_main.html
echo "</article>
</body>
</html>" >> $file_name_main.html

rm $file_name
rm $file_name_tmp
rm $file_name_main.tmp.html

echo "Post created."
