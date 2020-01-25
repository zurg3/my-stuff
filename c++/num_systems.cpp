#include <iostream>
#include <iomanip>
#include <bitset>
using namespace std;

int main() {
  cout << "BIN\t\t" << "OCT\t" << "DEC\t" << "HEX" << endl << endl;

  for (int i = 1; i <= 100; i++) {
    cout << bitset<8>(i).to_string() << "\t" << setbase(8) << i << "\t" << setbase(10) << i << "\t" << setbase(16) << i << endl;
    cout << ".....................................\n";
  }
  
  return 0;
}
