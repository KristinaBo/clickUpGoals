const fs = require('fs');

const data = JSON.parse(fs.readFileSync('../spaces.json', 'utf8'));

data.folders.forEach(folder => {
    folder.lists.forEach(list => {
        console.log('List ID:', list.id);

        if (list.name.startsWith('test')) {
            console.log('Space Name:', list.space.name);
            console.log('Space ID:', list.space.id);
        }
    });
});