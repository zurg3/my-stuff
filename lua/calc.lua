io.write("Enter the first number: ")
a = io.read()
io.write("Enter the second number: ")
b = io.read()

a = tonumber(a)
b = tonumber(b)

print(string.format("%g+%g=%g", a, b, a + b))
print(string.format("%g-%g=%g", a, b, a - b))
print(string.format("%g*%g=%g", a, b, a * b))
print(string.format("%g/%g=%g", a, b, a / b))
