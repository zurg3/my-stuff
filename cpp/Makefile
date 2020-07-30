#########
# Windows
ifeq ($(OS), Windows_NT)

CXX = g++

all: calc.exe num_systems.exe

calc.exe: calc.cpp
	mkdir calc_cpp_win
	$(CXX) calc.cpp -static -o calc_cpp_win\calc.exe

num_systems.exe: num_systems.cpp
	mkdir num_systems_cpp_win
	$(CXX) num_systems.cpp -static -o num_systems_cpp_win\num_systems.exe

clean:
	rmdir calc_cpp_win /s /q
	rmdir num_systems_cpp_win /s /q

#######
# Linux
else

CXX = g++

all: calc git_puller num_systems

calc: calc.cpp
	mkdir calc_cpp_linux
	$(CXX) calc.cpp $(CXXFLAGS) -o calc_cpp_linux/calc

git_puller: git_puller.cpp
	$(CXX) git_puller.cpp $(CXXFLAGS) -std=c++17 -o git_puller

num_systems: num_systems.cpp
	mkdir num_systems_cpp_linux
	$(CXX) num_systems.cpp $(CXXFLAGS) -o num_systems_cpp_linux/num_systems

clean:
	rm -rf calc_cpp_linux
	rm -f git_puller
	rm -rf num_systems_cpp_linux

endif
