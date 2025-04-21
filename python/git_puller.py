# this program probably works only on Linux.

import sys
import os

argv = sys.argv
argc = len(argv)

if argc > 1:
    git_repos_num = argc - 1

    print()

    for i in range(1, argc):
        os.chdir(argv[i])

        progress = i / git_repos_num * 100

        print(f'{i} / {git_repos_num}')
        print(argv[i])
        # print(os.getcwd())
        os.system('git pull')
        print(f'{round(progress, 1)}% done.')
        print()
else:
    print('Usage examples:')
    print('python git_puller.py /home/user/git/repo1 ~/git/repo2 $HOME/git/repo3')
    print('python git_puller.py /home/user/git/{repo1,repo2,repo3}')
    print('python git_puller.py /home/user/git/*')
    print('python git_puller.py $(xargs -a git_repos.txt)')
