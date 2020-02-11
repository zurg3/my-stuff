#include <iostream>
#include <iomanip>
using namespace std;

int main() {
  int a, b;
  
  cout << "Enter the 1st num: ";
  cin >> a;
  
  cout << "Enter the 2nd num: ";
  cin >> b;
  
  cout << a << " + " << b << " = " << a + b << endl;
  cout << setbase(16);
  cout << a << " + " << b << " = " << a + b << endl;
  
  return 0;
}
