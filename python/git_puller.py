# this program probably works only on Linux.
# I recommend you add this script to shell's aliases (file .bashrc)

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
if git_path[git_path_len] != '/':
    for i in range(len(git_repos)):
        git_pull_path = str(git_path + '/' + git_repos[i])
        os.chdir(git_pull_path)
        percentage_of_completion = (i + 1) / len(git_repos) * 100
        percentage_of_completion = round(percentage_of_completion, 1)
        percentage_of_completion = str(percentage_of_completion)
        print(str(str(i + 1)) + ' / ' + str(len(git_repos)))
        print(git_repos[i])
        os.system('git pull')
        print(percentage_of_completion + '% done.')
        print()
elif git_path[git_path_len] == '/':
    for i in range(len(git_repos)):
        git_pull_path = str(git_path + git_repos[i])
        os.chdir(git_pull_path)
        percentage_of_completion = (i + 1) / len(git_repos) * 100
        percentage_of_completion = round(percentage_of_completion, 1)
        percentage_of_completion = str(percentage_of_completion)
        print(str(str(i + 1)) + ' / ' + str(len(git_repos)))
        print(git_repos[i])
        os.system('git pull')
        print(percentage_of_completion + '% done.')
        print()
