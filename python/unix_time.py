import time
import datetime


def unix__time():
    a = time.time()
    u = int(a // 1)
    return u


k = input('k = ')
if k == '':
    print('|--------------------------------------------------------|')
    print('| UTC Time            | Local Time          | UNIX Time  |')
    print('|--------------------------------------------------------|')
    while True:
        now_time_local = datetime.datetime.now()
        local_time = now_time_local.strftime('%H:%M:%S %d.%m.%Y')
        now_time_utc = datetime.datetime.utcnow()
        utc_time = now_time_utc.strftime('%H:%M:%S %d.%m.%Y')
        unix_time = unix__time()
        local_time = str(local_time)
        utc_time = str(utc_time)
        unix_time = str(unix_time)
        print('| ' + utc_time + ' | ' + local_time + ' | ' + unix_time + ' |')
        time.sleep(1)
elif k != '':
    k = int(k)
    print('|--------------------------------------------------------|')
    print('| UTC Time            | Local Time          | UNIX Time  |')
    print('|--------------------------------------------------------|')
    for i in range(k):
        now_time_local = datetime.datetime.now()
        local_time = now_time_local.strftime('%H:%M:%S %d.%m.%Y')
        now_time_utc = datetime.datetime.utcnow()
        utc_time = now_time_utc.strftime('%H:%M:%S %d.%m.%Y')
        unix_time = unix__time()
        local_time = str(local_time)
        utc_time = str(utc_time)
        unix_time = str(unix_time)
        print('| ' + utc_time + ' | ' + local_time + ' | ' + unix_time + ' |')
        time.sleep(1)
    print('|--------------------------------------------------------|')
else:
    print('Something is wrong!')
