#include <stdio.h>

int main()
{
  float addition, subtraction, multiplication, division;
  float a;
  float b;
  printf("Enter the first number: ");
  scanf("%f", &a);
  printf("Enter the second number: ");
  scanf("%f", &b);
  addition = a + b;
  subtraction = a - b;
  multiplication = a * b;
  division = a / b;
  printf("%g+%g=%g\n", a, b, addition);
  printf("%g-%g=%g\n", a, b, subtraction);
  printf("%g*%g=%g\n", a, b, multiplication);
  printf("%g/%g=%g\n", a, b, division);
  return 0;
}
