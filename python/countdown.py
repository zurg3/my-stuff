import time

n = 60
for i in range(n, 0, -1):
    n = str(n)
    if (len(n) == 2) and (n[1] == '1') and (n[0] != '1') or (n == '1'):
        s = 'секунду'
    elif (len(n) == 2) and (n[1] == '2') and (n[0] != '1') or (n == '2'):
        s = 'секунды'
    elif (len(n) == 2) and (n[1] == '3') and (n[0] != '1') or (n == '3'):
        s = 'секунды'
    elif (len(n) == 2) and (n[1] == '4') and (n[0] != '1') or (n == '4'):
        s = 'секунды'
    else:
        s = 'секунд'
    n = int(n)
    print(n)
    n = n - 1
    print('Программа завершит свою работу через', i, s)
    time.sleep(1)
