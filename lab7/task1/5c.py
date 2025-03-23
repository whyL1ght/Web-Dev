def xor(x,y):
    if(x and not y):
        return True
    if(not x and y ):
        return True
    return False

print(xor(False, False))    
