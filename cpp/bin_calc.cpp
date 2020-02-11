#include <iostream>
#include <bitset>
using namespace std;

int main() {
  int a, b;
  const unsigned int n = 8;
  
  cout << "Enter the 1st num (0 - 255): ";
  cin >> a;
  
  cout << "Enter the 2nd num (0 - 255): ";
  cin >> b;
  
  if (((a > 255) || (b > 255)) || ((a + b) > 255)) {
    return 1;
  }
  else {
    auto bin1 = bitset<n>(a);
    auto bin2 = bitset<n>(b);
    
    cout << bin1.to_ulong() << " + " << bin2.to_ulong() << " = " << bin1.to_ulong() + bin2.to_ulong() << endl;
    cout << bin1.to_string() << " + " << bin2.to_string() << " = " << bitset<n>(bin1.to_ulong() + bin2.to_ulong()) << endl;
    
    return 0;
  }
}
