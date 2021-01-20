#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <time.h>
#if defined(WIN32) || defined(_WIN32)
  #include <windows.h>
#else
  #include <unistd.h>
#endif

void print_separator() {
  printf("|--------------------------------------------------------|\n");
}

void print_table_head() {
  print_separator();
  printf("| UTC Time            | Local Time          | UNIX Time  |\n");
  print_separator();
}

void print_time() {
  time_t now = time(NULL);

  struct tm local_time = *localtime(&now);
  struct tm utc_time = *gmtime(&now);
  int unix_time = now;

  char local_time_buffer[80];
  char utc_time_buffer[80];

  strftime(local_time_buffer, 80, "%H:%M:%S %d.%m.%Y", &local_time);
  strftime(utc_time_buffer, 80, "%H:%M:%S %d.%m.%Y", &utc_time);

  printf("| %s | %s | %d |\n", utc_time_buffer, local_time_buffer, unix_time);

  #if defined(WIN32) || defined(_WIN32)
    Sleep(1000);
  #else
    sleep(1);
  #endif
}

int main(int argc, char *argv[]) {
  if (argc == 1) {
    print_table_head();

    while (1) {
      print_time();
    }
  }
  else if (argc == 2) {
    print_table_head();

    for (int i = 0; i < atoi(argv[1]); i++) {
      print_time();
    }

    print_separator();
  }
  else {
    printf("Something is wrong!\n");
  }

  return 0;
}
