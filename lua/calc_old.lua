local a = tonumber(io.read())
local b = io.read()
local c = tonumber(io.read())

if b == "+" then
  print(a + c)
elseif b == "-" then
  print(a - c)
elseif b == "*" then
  print(a * c)
elseif b == "/" then
  print(a / c)
else
  print("Your input is incorrect!")
end
