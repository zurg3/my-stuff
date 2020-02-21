print 'Enter the first number: '
a = gets.chomp
print 'Enter the second number: '
b = gets.chomp

print(sprintf("%g+%g=%g\n", a, b, a.to_f + b.to_f))
print(sprintf("%g-%g=%g\n", a, b, a.to_f - b.to_f))
print(sprintf("%g*%g=%g\n", a, b, a.to_f * b.to_f))
print(sprintf("%g/%g=%g\n", a, b, a.to_f / b.to_f))
