# List of numbers
numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

# Initialize counters for even and odd numbers
even_count = 0
odd_count = 0

# Loop through each number in the list
for number in numbers:
    # Check if the number is even or odd
    if number % 2 == 0:
        even_count += 1  # Increment even count
    else:
        odd_count += 1   # Increment odd count



def test():
    print('dsdsds')

# Output the results
print(f"Total even numbers: {even_count}")
print(f"Total odd numbers: {odd_count}")
test()