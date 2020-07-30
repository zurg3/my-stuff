# this program probably works only on Linux.

import sys
import os

# os_user = os.getlogin()
# example_path = str('/home/' + os_user + '/Git')

if str(sys.argv[1]) != '':
    git_path = str(sys.argv[1])
else:
    print('Enter the path of directory with cloned Git repositories.')
    # print('Example:', example_path)
    git_path = str(input('-> '))

git_repos = os.listdir(git_path)

git_repos.sort(key=str.lower)

print()

git_path_len = len(git_path) - 1

for i in range(len(git_repos)):
    if git_path[git_path_len] != '/':
        git_pull_path = str(git_path + '/' + git_repos[i])
    elif git_path[git_path_len] == '/':
        git_pull_path = str(git_path + git_repos[i])

    os.chdir(git_pull_path)

    percentage_of_completion = (i + 1) / len(git_repos) * 100
    percentage_of_completion = str(round(percentage_of_completion, 1))

    print(str(str(i + 1)) + ' / ' + str(len(git_repos)))
    print(git_repos[i])
    os.system('git pull')
    print(percentage_of_completion + '% done.')
    print()
