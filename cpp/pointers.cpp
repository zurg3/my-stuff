#include <iostream>
using namespace std;

int main() {
  int a = 33;
  int *b = &a;
  int c = *b;

  cout << a << " " << &a << " " << *&a << endl;
  cout << b << " " << *b << endl;
  cout << c << endl;

  return 0;
}
