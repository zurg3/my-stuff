import std.stdio;

void main() {
  float a, b;

  write("Enter the first number: ");
  readf(" %f", &a);
  write("Enter the second number: ");
  readf(" %f", &b);

  writefln("%g+%g=%g", a, b, a + b);
  writefln("%g-%g=%g", a, b, a - b);
  writefln("%g*%g=%g", a, b, a * b);
  writefln("%g/%g=%g", a, b, a / b);
}
