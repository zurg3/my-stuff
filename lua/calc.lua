-- calc

a = io.read()
b = io.read()
c = io.read()

a = tonumber(a)
c = tonumber(c)

if b == '+' then
  d = a + c
  print(d)
elseif b == '-' then
  d = a - c
  print(d)
elseif b == '*' then
  d = a * c
  print(d)
elseif b == '/' then
  d = a / c
  print(d)
else
  print('Your input is incorrect!')
end
