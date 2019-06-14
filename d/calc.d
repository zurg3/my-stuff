import std.stdio;

void main() {
  float addition, subtraction, multiplication, division;
  float a;
  float b;
  write("Enter the first number: ");
  readf(" %f", &a);
  write("Enter the second number: ");
  readf(" %f", &b);
  addition = a + b;
  subtraction = a - b;
  multiplication = a * b;
  division = a / b;
  writefln("%g+%g=%g", a, b, addition);
  writefln("%g-%g=%g", a, b, subtraction);
  writefln("%g*%g=%g", a, b, multiplication);
  writefln("%g/%g=%g", a, b, division);
}
