def power(a: float, n: int) -> float:
    result = 1.0
    base = a  
    while n > 0:
        if n % 2 == 1:  
            result *= base
        base *= base  
        n //= 2  

    return result

a, n = map(float, input().split())  
n = int(n) 
print(power(a, n))
