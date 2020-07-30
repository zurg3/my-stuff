/*
this program probably works only on Linux.

Compile: g++ git_puller.cpp -std=c++17 -o git_puller
*/

#include <iostream>
#include <string>
#include <unistd.h>
#include <vector>
#include <cstdlib>
#include <filesystem>
#include <algorithm>
#include <iomanip>
using namespace std;

int main(int argc, char *argv[]) {
  string os_user = getlogin();
  string example_path = string("/home/" + os_user + "/Git");
  string git_path;
  vector<string> git_repos;
  int git_path_len;
  string git_pull_path;
  float percentage_of_completion;

  if (argc == 2) {
    git_path = argv[1];
  }
  else if (argc == 1) {
    cout << "Enter the path of directory with cloned Git repositories." << endl;
    cout << "Example: " << example_path << endl;
    cout << "-> ";
    cin >> git_path;
  }

  for (const auto &entry : filesystem::directory_iterator(git_path)) {
    git_repos.push_back(entry.path().filename().string());
  }

  sort(git_repos.begin(), git_repos.end());

  cout << endl;

  git_path_len = git_path.length() - 1;

  for (int i = 0; i < git_repos.size(); i++) {
    if (git_path[git_path_len] != '/') {
      git_pull_path = string(git_path + "/" + git_repos[i]);
    }
    else if (git_path[git_path_len] == '/') {
      git_pull_path = string(git_path + git_repos[i]);
    }

    chdir(git_pull_path.c_str());

    percentage_of_completion = (float)(i + 1) / (float)git_repos.size() * 100;

    cout << i + 1 << " / " << git_repos.size() << endl;
    cout << git_repos[i] << endl;
    system("git pull");
    cout << fixed << setprecision(1) << percentage_of_completion << "% done." << endl;
    cout << endl;
  }

  return 0;
}
