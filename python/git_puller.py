# this program probably works only on Linux.

import sys
import os

argc = len(sys.argv)

if argc > 1:
    git_repos_num = argc - 1

    print()

    for i in range(1, argc):
        os.chdir(sys.argv[i])

        progress = i / git_repos_num * 100
        progress = str(round(progress, 1))

        print(f'{i} / {git_repos_num}')
        print(sys.argv[i])
        # os.system('pwd')
        os.system('git pull')
        print(f'{progress}% done.')
        print()
else:
    print('Usage examples:')
    print('python git_puller.py /home/user/git/repo1 /home/user/git/repo2 /home/user/git/repo3')
    print('python git_puller.py $HOME/git/{repo1,repo2,repo3}" << endl')
    print('python git_puller.py $(xargs -a git_repos.txt)')
