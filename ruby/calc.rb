print "Enter the first number: "
a = gets.chomp.to_f
print "Enter the second number: "
b = gets.chomp.to_f

print(sprintf("%g+%g=%g\n", a, b, a + b))
print(sprintf("%g-%g=%g\n", a, b, a - b))
print(sprintf("%g*%g=%g\n", a, b, a * b))
print(sprintf("%g/%g=%g\n", a, b, a / b))
