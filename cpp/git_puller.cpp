/*
this program probably works only on Linux.

Compile: g++ git_puller.cpp -std=c++20 -o git_puller
Compile (static): g++ git_puller.cpp -static -std=c++20 -o git_puller
*/

#include <iostream>
#include <string>
#include <cstdlib>
#include <unistd.h>
#include <iomanip>
using namespace std;

int main(int argc, char *argv[]) {
  int git_repos_num;
  float progress;

  if (argc > 1) {
    git_repos_num = argc - 1;

    cout << endl;

    for (int i = 1; i < argc; i++) {
      chdir(argv[i]);

      progress = (float)i / (float)git_repos_num * 100;

      cout << i << " / " << git_repos_num << endl;
      cout << argv[i] << endl;
      //system("pwd");
      system("git pull");
      cout << fixed << setprecision(1) << progress << "% done." << endl;
      cout << endl;
    }
  }
  else {
    cout << "Usage examples:" << endl;
    cout << "git_puller /home/user/git/repo1 /home/user/git/repo2 /home/user/git/repo3" << endl;
    cout << "git_puller $HOME/git/{repo1,repo2,repo3}" << endl;
    cout << "git_puller $(xargs -a git_repos.txt)" << endl;
  }

  return 0;
}
