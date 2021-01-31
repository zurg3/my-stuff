all: hello calc

hello:
	nasm -f elf hello.asm
	ld -m elf_i386 -s -o hello hello.o
	rm hello.o

calc:
	nasm -f elf calc.asm
	ld -m elf_i386 -s -o calc calc.o
	rm calc.o
