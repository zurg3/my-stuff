local a, oper, b

if #arg >= 3 then
  a = tonumber(arg[1])
  oper = arg[2]
  b = tonumber(arg[3])
else
  a = tonumber(io.read())
  oper = io.read()
  b = tonumber(io.read())
end

local opers = {
  ["+"] = function(x, y) return x + y end,
  ["-"] = function(x, y) return x - y end,
  ["*"] = function(x, y) return x * y end,
  ["/"] = function(x, y) return x / y end
}

if a and b and opers[oper] then
  print(opers[oper](a, b))
else
  print("Your input is incorrect!")
end
