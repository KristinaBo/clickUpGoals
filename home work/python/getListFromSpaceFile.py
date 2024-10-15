import json

with open('../spaces.json', 'r', encoding='utf-8') as file:
    data = json.load(file)

for folder in data['folders']:
    for lst in folder['lists']:
        print(f"List ID: {lst['id']}")

        if lst['name'].startswith('test'):
            print(f"Space Name: {lst['space']['name']}")
            print(f"Space ID: {lst['space']['id']}")