#include <stdio.h>

int main() {
  char get_char;

  printf("Press any key: ");
  scanf("%c", &get_char);

  printf("0x%X is pressed.\n", get_char);

  return 0;
}
