import random
# Write a function that takes in an input of characters (integer), and a special var (boolean), and create a random password.

def random_password(int, boolean):
    result = ''
    if boolean == False:
        alpha = "AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz1234567890"
    else:
        alpha = "AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz1234567890!@#$%&*"
    for num in range(0, int):
        # Solution 1
        # print(random.choice(alpha))
        result += random.choice(alpha)

        # Solution 2
        # print(alpha[random.randint(0, len(alpha))])
        # result += alpha[random.randint(0, len(alpha))]
    print(result)

random_password(15, True)