#########
# Windows
ifeq ($(OS), Windows_NT)

all: calc.exe

calc.exe: calc.c
	mkdir calc_c_win
	gcc calc.c -static -o calc_c_win\calc.exe

clean:
	rmdir calc_c_win /s /q

#######
# Linux
else

all: calc

calc: calc.c
	mkdir calc_c_linux
	gcc calc.c -o calc_c_linux/calc

clean:
	rm -rf calc_c_linux

endif
