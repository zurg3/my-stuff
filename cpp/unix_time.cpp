#include <iostream>
#include <cstdlib>
#include <string>
#include <ctime>
#include <iomanip>
#if defined(WIN32) || defined(_WIN32)
  #include <windows.h>
#else
  #include <unistd.h>
#endif
using namespace std;

void print_separator() {
  cout << "|--------------------------------------------------------|" << endl;
}

void print_table_head() {
  print_separator();
  cout << "| UTC Time            | Local Time          | UNIX Time  |" << endl;
  print_separator();
}

void print_time() {
  time_t now = time(NULL);

  tm local_time = *localtime(&now);
  tm utc_time = *gmtime(&now);
  int unix_time = now;

  cout << "| ";
  cout << put_time(&utc_time, "%H:%M:%S %d.%m.%Y");
  cout << " | ";
  cout << put_time(&local_time, "%H:%M:%S %d.%m.%Y");
  cout << " | ";
  cout << unix_time;
  cout << " |" << endl;

  #if defined(WIN32) || defined(_WIN32)
    Sleep(1000);
  #else
    sleep(1);
  #endif
}

int main(int argc, char *argv[]) {
  if (argc == 1) {
    print_table_head();

    while (true) {
      print_time();
    }
  }
  else if (argc == 2) {
    print_table_head();

    for (int i = 0; i < stoi(argv[1]); i++) {
      print_time();
    }

    print_separator();
  }
  else {
    cout << "Something is wrong!" << endl;
  }

  return 0;
}
