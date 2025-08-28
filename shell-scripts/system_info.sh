#!/bin/bash

echo "Which type of output do you need? [1 - HTML, 2 - TXT]"
read -p "-> " FILE_TYPE

TITLE="System Info"
if [[ $FILE_TYPE == "1" ]]; then
  OUTPUT_PATH="$HOME/system_info.html"
elif [[ $FILE_TYPE == "2" ]]; then
  OUTPUT_PATH="$HOME/system_info.txt"
fi
SEPARATOR="============================================================"

if [[ $FILE_TYPE == "1" ]]; then
  echo "Generating HTML-file..."
elif [[ $FILE_TYPE == "2" ]]; then
  echo "Generating TXT-file..."
fi

DATE_TIME=$(date +"%a %d.%m.%Y %H:%M:%S %z")
SHA1_HASH=$(date +%s | sha1sum | awk '{print $1}')
OS_NAME=$(uname -o)
KERNEL_VERSION=$(uname -r)
ARCH=$(uname -m)
UPTIME=$(uptime -p)
DISKS=$(lsblk)
FREE_SPACE_HEADER=$(df -h | head -n 1)
FREE_SPACE_INFO=$(df -h | grep '/dev/sda' | sort)
HOME_DIR=$(ls -l $HOME)
PING_OUTPUT=$(ping -c 10 ya.ru)
ACTIVE_USERS=$(who)

if [[ $FILE_TYPE == "1" ]]; then
  echo "<!DOCTYPE html>
<html>
  <head>
    <meta charset='utf-8'>
    <title>$TITLE</title>
    <style>
      body {
        color: Green;
        background: Black;
        margin-left: 10px;
        margin-top: 10px;
        margin-bottom: 100px;
      }
    </style>
  </head>
  <body>
    <pre>===$TITLE===</pre>
    <pre>File creation date and time: $DATE_TIME</pre>
    <pre>Random SHA1 hash: $SHA1_HASH</pre>
    <pre>$SEPARATOR</pre>
    <pre>User: $USER</pre>
    <pre>Hostname: $HOSTNAME</pre>
    <pre>OS: $OS_NAME</pre>
    <pre>Kernel version: $KERNEL_VERSION</pre>
    <pre>Arch: $ARCH</pre>
    <pre>Shell: $SHELL</pre>
    <pre>Uptime: $UPTIME</pre>
    <pre>$SEPARATOR</pre>
    <pre>Disks:</pre>
    <pre>$DISKS</pre>
    <pre>$SEPARATOR</pre>
    <pre>Free space:</pre>
    <pre>$FREE_SPACE_HEADER</pre>
    <pre>$FREE_SPACE_INFO</pre>
    <pre>$SEPARATOR</pre>
    <pre>Your home dir:</pre>
    <pre>$HOME_DIR</pre>
    <pre>$SEPARATOR</pre>
    <pre>Ping (ya.ru):</pre>
    <pre>$PING_OUTPUT</pre>
    <pre>$SEPARATOR</pre>
    <pre>Active users:</pre>
    <pre>$ACTIVE_USERS</pre>
    <pre>[$USER@$HOSTNAME ~]\$ █ </pre>
  </body>
</html>" > $OUTPUT_PATH
elif [[ $FILE_TYPE == "2" ]]; then
  echo "===$TITLE===
File creation date and time: $DATE_TIME
Random SHA1 hash: $SHA1_HASH
$SEPARATOR
User: $USER
Hostname: $HOSTNAME
OS: $OS_NAME
Kernel version: $KERNEL_VERSION
Arch: $ARCH
Shell: $SHELL
Uptime: $UPTIME
$SEPARATOR
Disks:
$DISKS
$SEPARATOR
Free space:
$FREE_SPACE_HEADER
$FREE_SPACE_INFO
$SEPARATOR
Your home dir:
$HOME_DIR
$SEPARATOR
Ping (ya.ru):
$PING_OUTPUT
$SEPARATOR
Active users:
$ACTIVE_USERS
[$USER@$HOSTNAME ~]\$ █ " > $OUTPUT_PATH
fi
