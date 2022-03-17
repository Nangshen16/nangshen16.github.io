#partA
myList = [4,6,8,10]
# print(myList);
myList2 = myList[:]
myList2.append(66)
print(myList)
print(myList2)
myList3 = myList[:]
myList3.pop(-2)
print(myList3)
print('--------------------')

#partB
# count(sub,[start,[end]])
# count returns the number of occurrences of substring sub in the range [start,end]
# sub is the substring to be searched
# start from index.First character starts with 0index. By default search starts from 0 index.
# end − Search ends from this index. First character starts from 0 index. By default search ends at the last index.
str = "Count method returns the number of occurrences of substring sub in the range [start,end]"
sub = 'i';
print(str.count(sub))
print(str);

#endswith(suffix,[start,[end]])
print('endswith() method returns True if a string ends with the given suffix otherwise returns False')
messages = "endswith method"
result = messages.endswith('method')
print(result)
#find/index(sub,[start,[end]])
print('find/index() method determines if string str occurs in string or in substring of string if starting index beg and ending end are given. This method is same as find(), but raises an exception if sub is not found. ')

#join()
print('join() method takes all items in an iterable and joins them into one string')
favFruits = ('Berries', 'Cataloupe', 'Papaya')
print('____'.join(favFruits));

#replace()
print('replace() method replaces a specified phrase with another specified phrase')
favCities = "New York City is my favorite place"
replace_text = favCities.replace('New York', 'Rome')
print(replace_text);

print('split() method splits a string into a list ');
python = "This assignment 9 is the last work for this class"
y = python.split()
print(y)

print('The splitlines() method splits a string into a list. The splitting is done at line breaks');
message7 = "Hi Professor\Thank you so much for teaching us Python3"
sp = message7.splitlines()
print(sp)

print('startswith() method returns True if the string starts with the specified value, otherwise False.')
message8 = 'Reddit used Python to develop their applications'
print(message8.startswith('Java'))
print(message8.startswith('Reddit'))

print('The Python strip() method removes any spaces or specified characters at the start and end of a string. strip() returns a new string without the characters you have specified to remove')
message9 = 'Returns a copy of the string by removing '
print('Message9:', message9.strip())








print('-------------------')
#part3
#create a function
def check_prime(n):
    if (n==1):
        return False
    elif (n==2):
        return True;
    else:
        for x in range(2,n):
            if(n% x==0):
                return False
        return True
print(check_prime(9));
print(check_prime(3));
print(check_prime(11));
print(check_prime(0));
print(check_prime(12));
print('-----------------')
# PartD:
#create a function called disStuInfo
def disStuInfo(schoolID,*firstName,**lastEmail):
    for key, value in lastEmail.items():
        # print(f"{key}: {value}")
        print(value)
print('10001')
disStuInfo(schoolID= 10001, firstName ="John", lastName= "Smith", lastEmail ="jSmith@gmail.com" )
print('')
print('10001')
disStuInfo(schoolID=10001, firstName="Peter", lastName="Poter", lastEmail= "petter@yahoo.com")
print('')
print('10001')
disStuInfo(schoolID=10001, firstName="unmatched", lastName="JackLast", lastEmail="j@gmail.com")






