#########
# Windows
ifeq ($(OS), Windows_NT)

all: Calc

Calc:
	mkdir Calc
	javac Calc.java
	move Calc.class Calc\Calc.class

clean:
	rmdir Calc /s /q

#######
# Linux
else

all: Calc

Calc:
	mkdir Calc
	javac Calc.java
	mv Calc.class Calc/Calc.class

clean:
	rm -rf Calc

endif
