puts "Argc: #{ARGV.length}\n\n"

puts "Argv:"
for i in 0...ARGV.length
  puts "#{i} - #{ARGV[i]}"
end
