if __name__ == '__main__':
    n = int(input())
    arr = map(int, input().split())
    _max = -100
    _second = -101
    for x in arr:
        if _max < x:
            _second = _max
            _max = x
        elif _second < x and _max != x:
            _second = x
    print(_second)
      
