# calc

a = gets.chomp
b = gets.chomp
c = gets.chomp

if b == '+'
  d = a.to_f + c.to_f
  print a, ' + ', c, ' = ', d
  puts
elsif b == '-'
  d = a.to_f - c.to_f
  print a, ' - ', c, ' = ', d
  puts
elsif b == '*'
  d = a.to_f * c.to_f
  print a, ' * ', c, ' = ', d
  puts
elsif b == '/'
  d = a.to_f / c.to_f
  print a, ' / ', c, ' = ', d
  puts
else
  puts 'Your input is incorrect!'
end
