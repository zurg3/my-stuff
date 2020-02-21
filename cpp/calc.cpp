#include <iostream>
using namespace std;

int main() {
  float a, b;

  cout << "Enter the first number: ";
  cin >> a;
  cout << "Enter the second number: ";
  cin >> b;

  cout << a << "+" << b << "=" << a + b << endl;
  cout << a << "-" << b << "=" << a - b << endl;
  cout << a << "*" << b << "=" << a * b << endl;
  cout << a << "/" << b << "=" << a / b << endl;

  return 0;
}
