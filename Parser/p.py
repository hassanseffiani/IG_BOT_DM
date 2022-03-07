#!/bin/python3

# with open(r'test', 'r') as file:
#     data = file.read()
#     data = data.replace(" profile picture", "")
# with open(r'test', 'w') as file:
#     file.write(data)
lines = open( 'test', "r" ).readlines()[::2]
_file = open("test2", "w")
j = 0
for i in lines:
    i = i.replace('\n',',')
    _file.write(i)
    j+=1
    if (j == 20):
        break