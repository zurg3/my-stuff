#include <iostream>
using namespace std;

int main() {
  for (char i = 'A'; i <= 'Z'; i++) {
    if (i != 'Z') {
      cout << i << " ";
    }
    else if (i == 'Z') {
      cout << i << endl;
    }
  }

  for (char i = 'a'; i <= 'z'; i++) {
    if (i != 'z') {
      cout << i << " ";
    }
    else if (i == 'z') {
      cout << i << endl;
    }
  }

  return 0;
}
