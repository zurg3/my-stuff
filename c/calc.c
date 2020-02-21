#include <stdio.h>

int main() {
  float a, b;

  printf("Enter the first number: ");
  scanf("%f", &a);
  printf("Enter the second number: ");
  scanf("%f", &b);

  printf("%g+%g=%g\n", a, b, a + b);
  printf("%g-%g=%g\n", a, b, a - b);
  printf("%g*%g=%g\n", a, b, a * b);
  printf("%g/%g=%g\n", a, b, a / b);

  return 0;
}
