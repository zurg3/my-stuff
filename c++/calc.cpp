#include <iostream>
using namespace std;

int main()
{
  float addition, subtraction, multiplication, division;
  float a;
  float b;
  cout << "Enter the first number: ";
  cin >> a;
  cout << "Enter the second number: ";
  cin >> b;
  addition = a + b;
  subtraction = a - b;
  multiplication = a * b;
  division = a / b;
  cout << a << "+" << b << "=" << addition  << endl;
  cout << a << "-" << b << "=" << subtraction << endl;
  cout << a << "*" << b << "=" << multiplication  << endl;
  cout << a << "/" << b << "=" << division  << endl;
  return 0;
}
