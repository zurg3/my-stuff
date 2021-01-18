#include <stdio.h>

int main(int argc, char *argv[]) {
  printf("Argc: %d\n\n", argc);

  printf("Argv:\n");
  for (int i = 0; i < argc; i++) {
    printf("%d - %s\n", i, argv[i]);
  }

  return 0;
}
