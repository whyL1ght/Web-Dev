n = int(input())
cnt = 0
while n:
    if int(input()) == 0:
        cnt+=1
    n-=1
print(cnt)
