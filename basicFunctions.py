def divide(dividend, divisor): 
    quotient = dividend / divisor
    remainder = dividend % divisor
    return quotient, remainder

# print(divide(24, 2))

def calculate_stuff(x, y): 
    (q, r) = divide(x, y)
    print (q, r)

calculate_stuff(24,4)