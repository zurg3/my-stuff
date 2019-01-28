io.write("Enter the first number: ")
a = io.read()
io.write("Enter the second number: ")
b = io.read()

a = tonumber(a)
b = tonumber(b)

addition = a + b
subtraction = a - b
multiplication = a * b
division = a / b

print(string.format("%g+%g=%g", a, b, addition))
print(string.format("%g-%g=%g", a, b, subtraction))
print(string.format("%g*%g=%g", a, b, multiplication))
print(string.format("%g/%g=%g", a, b, division))
