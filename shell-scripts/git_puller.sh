#!/bin/bash

if (( $# >= 1 )); then
  echo ""

  for (( i = 1; i <= $#; i++ )); do
    cd ${!i}

    progress=$(($i * 100 / $#))

    echo "$i / $#"
    echo "$(basename ${!i})"
    # pwd
    git pull
    echo "$progress% done."
    echo ""
  done
else
  echo "Usage examples:"
  echo "$(basename $0) /home/user/git/repo1 ~/git/repo2 \$HOME/git/repo3"
  echo "$(basename $0) /home/user/git/{repo1,repo2,repo3}"
  echo "$(basename $0) /home/user/git/*"
  echo "$(basename $0) \$(xargs -a git_repos.txt)"
fi
