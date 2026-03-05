print(string.format("Argc: %d\n", #arg))

print("Argv:")
for i = 1, #arg do
  print(string.format("%d - %s", i, arg[i]))
end
