#!/bin/bash

command -v lftp > /dev/null

if [[ $? == "0" ]]; then
  tor_browser_base_link="https://dist.torproject.org/torbrowser/"
  tor_browser_platform="linux64"

  tor_browser_versions=($(lftp -c "open $tor_browser_base_link; cls -1"))
  for (( i = 0; i < ${#tor_browser_versions[@]}; i++ )); do
    echo "${tor_browser_versions[$i]}" | grep -qE "(0|[1-9]\d*)\.(0|[1-9]\d*)\.(0|[1-9]\d*)"
    if [[ $? == "0" ]]; then
      tor_browser_stable_versions+=(${tor_browser_versions[$i]//\/})
    fi
  done

  echo "Select Tor Browser version:"
  for (( i = 0; i < ${#tor_browser_stable_versions[@]}; i++ )); do
    echo "$(($i + 1)) - ${tor_browser_stable_versions[$i]}"
  done
  read -p "-> " tor_browser_version

  tor_browser_version=${tor_browser_stable_versions[$(($tor_browser_version - 1))]}

  echo "Select Tor Browser language:"
  echo "1 - English (English)"
  echo "2 - Русский (Russian)"
  echo "3 - Deutsch (German)"
  echo "4 - Espanol (Spanish)"
  echo "5 - Francais (French)"
  echo "6 - Italiano (Italian)"
  read -p "-> " tor_browser_lang

  if [[ $tor_browser_lang == "1" ]]; then
    tor_browser_lang="en-US"
  elif [[ $tor_browser_lang == "2" ]]; then
    tor_browser_lang="ru"
  elif [[ $tor_browser_lang == "3" ]]; then
    tor_browser_lang="de"
  elif [[ $tor_browser_lang == "4" ]]; then
    tor_browser_lang="es-ES"
  elif [[ $tor_browser_lang == "5" ]]; then
    tor_browser_lang="fr"
  elif [[ $tor_browser_lang == "5" ]]; then
    tor_browser_lang="it"
  fi

  echo "Select Tor Browser installation path"
  read -e -p "-> " tor_browser_path

  wget "${tor_browser_base_link}${tor_browser_version}/tor-browser-$tor_browser_platform-${tor_browser_version}_$tor_browser_lang.tar.xz"
  tar -xvJf "tor-browser-$tor_browser_platform-${tor_browser_version}_$tor_browser_lang.tar.xz" --directory $tor_browser_path
  rm "tor-browser-$tor_browser_platform-${tor_browser_version}_$tor_browser_lang.tar.xz"

  echo ""
  echo "Tor Browser v$tor_browser_version has been installed."
elif [[ $? == "1" ]]; then
  echo "You need install 'lftp' package to use this script!"
fi
