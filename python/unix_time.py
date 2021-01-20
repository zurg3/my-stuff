import time
import datetime


def unix__time():
    a = time.time()
    u = int(a // 1)
    return u


def print_separator():
    print('|--------------------------------------------------------|')


def print_table_head():
    print_separator()
    print('| UTC Time            | Local Time          | UNIX Time  |')
    print_separator()


def print_time():
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


k = input('k = ')
if k == '':
    print_table_head()
    while True:
        print_time()
elif k != '':
    k = int(k)
    print_table_head()
    for i in range(k):
        print_time()
    print_separator()
else:
    print('Something is wrong!')
