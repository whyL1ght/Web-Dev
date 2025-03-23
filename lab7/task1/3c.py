import math
a,b = map(int, input().split())
for x in range(a,b+1):
    if int(math.sqrt(x)) == math.sqrt(x):
        print(x, end=" ")
