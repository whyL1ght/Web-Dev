x = input()
num = 0
for i in range(0,len(x)):
    num += int(x[i])*(2**( len(x) - 1 - i ))
print(num) 
