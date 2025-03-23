def min(a, b, c, d):
    if a > b:
        a = b
    if c > d:
        c = d
    if a > c:
        a = c
    return a

a, b, c, d = map(int, input().split())
print(min(a, b, c, d))
