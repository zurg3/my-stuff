a = gets.chomp.to_f
b = gets.chomp
c = gets.chomp.to_f

if b == "+"
  puts a + c
elsif b == "-"
  puts a - c
elsif b == "*"
  puts a * c
elsif b == "/"
  puts a / c
else
  puts "Your input is incorrect!"
end
