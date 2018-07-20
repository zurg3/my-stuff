print 'Enter the first number: '
a = gets.chomp
print 'Enter the second number: '
b = gets.chomp

addition = a.to_f + b.to_f
subtraction = a.to_f - b.to_f
multiplication = a.to_f * b.to_f
division = a.to_f / b.to_f

print(sprintf("%g+%g=%g", a, b, addition))
puts
print(sprintf("%g+%g=%g", a, b, subtraction))
puts
print(sprintf("%g+%g=%g", a, b, multiplication))
puts
print(sprintf("%g+%g=%g", a, b, division))
puts
