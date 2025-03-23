x = input()
i = len(x)-1
while x[i] == '0':
    i -= 1
while i >= 0:
    print(x[i], end="")
    i -=1  
