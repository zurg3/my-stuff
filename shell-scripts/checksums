#!/bin/bash

read -p "Введите текст: " x

echo "MD5:"
echo -n $x | md5sum | awk '{print $1}'
echo "SHA1:"
echo -n $x | sha1sum | awk '{print $1}'
