a,b,c,d = map(int, input().split(" "))
if d == 0: exit()
for i in range(a,b+1):
    if i%d == c:
        print(i, end=" ")
