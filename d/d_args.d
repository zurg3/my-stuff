import std.stdio;

void main(string[] args) {
  writefln("Argc: %d\n", args.length);

  writefln("Argv:");
  for (int i = 0; i < args.length; i++) {
    writefln("%d - %s", i, args[i]);
  }
}
