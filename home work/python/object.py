import json

# Step 1: Create a JSON object (dictionary in Python)
# data = {
#     "employees": [
#         {
#             "name": "Alice",
#             "age": 30,
#             "department": "HR"
#         },
#         {
#             "name": "Bob",
#             "age": 25,
#             "department": "IT"
#         },
#         {
#             "name": "Charlie",
#             "age": 35,
#             "department": "Finance"
#         }
#     ]
# }


with open('spaces.json', 'r') as json_file:
    loaded_data = json.load(json_file)

# Step 4: Output the loaded data
print("Loaded Data:")
print(loaded_data)
print(loaded_data['folders'][0]['id'])

# Accessing specific data
