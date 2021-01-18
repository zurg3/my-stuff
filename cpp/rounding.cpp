#include <iostream>
#include <cstdlib>
#include <ctime>
#include <cmath>
using namespace std;

float generate_float(unsigned short min_value, unsigned short max_value) {
  return min_value + static_cast<float>(rand()) / static_cast<float>(RAND_MAX / (max_value - min_value));
}

int main() {
  srand(time(NULL));

  float a = generate_float(3, 9);

  cout << "round(" << a << "): " << round(a) << endl;
  cout << "floor(" << a << "): " << floor(a) << endl;
  cout << "ceil(" << a << "): " << ceil(a) << endl;

  return 0;
}
