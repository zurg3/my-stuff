#########
# Windows
ifeq ($(OS), Windows_NT)

all: calc.exe num_systems.exe

calc.exe: calc.cpp
	mkdir calc_cpp_win
	g++ calc.cpp -Wall -static -static-libgcc -static-libstdc++ -o calc_cpp_win\calc.exe

num_systems.exe: num_systems.cpp
	mkdir num_systems_cpp_win
	g++ num_systems.cpp -Wall -static -static-libgcc -static-libstdc++ -o num_systems_cpp_win\num_systems.exe

clean:
	rmdir calc_cpp_win /s /q
	rmdir num_systems_cpp_win /s /q

#######
# Linux
else

all: calc git_puller num_systems

calc: calc.cpp
	mkdir calc_cpp_linux
	g++ calc.cpp -o calc_cpp_linux/calc

git_puller: git_puller.cpp
	mkdir git_puller_cpp_linux
	g++ git_puller.cpp -std=c++17 -o git_puller_cpp_linux/git_puller

num_systems: num_systems.cpp
	mkdir num_systems_cpp_linux
	g++ num_systems.cpp -o num_systems_cpp_linux/num_systems

clean:
	rm -rf calc_cpp_linux
	rm -rf git_puller_cpp_linux
	rm -rf num_systems_cpp_linux

endif
