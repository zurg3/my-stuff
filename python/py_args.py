import sys

print('Argc:', len(sys.argv), '\n')

print('Argv:')
for i in range(len(sys.argv)):
    print(i, '-', sys.argv[i])
