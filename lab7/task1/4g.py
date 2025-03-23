n = int(input())
arr = list(map(int, input().split()))
for i in range(int(n/2)):
    j = n - i - 1
    temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp
    
print(*arr)
