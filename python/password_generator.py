import random
import string

k01 = int(input('Passwords: '))
k02 = int(input('Password length: '))

pw = []
for i in range(k01):
    for j in range(k02):
        v = random.randint(1, 2)
        if v == 1:
            pw.append(random.choice(string.ascii_letters))
        else:
            pw.append(str(random.randint(0, 9)))
    pwd = ''.join(pw)
    print(pwd)
    pw.clear()
