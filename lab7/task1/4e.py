n = int(input())
arr = list(map(int, input().split()))
cnt = 0
for i in range(1,n-2):
    if (arr[i] > 0 and arr[i+1] > 0) or (arr[i] < 0 and arr[i+1] < 0): cnt +=1 
print("YES" if cnt else "NO")
