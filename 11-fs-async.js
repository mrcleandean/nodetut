const { readFile, writeFile } = require('fs');
console.log('Task Starting');
readFile('./content/first.txt', 'utf-8', (err, res) => {
    if (err) {
        console.log(err)
        return;
    }
    const first = res;
    readFile('./content/second.txt', 'utf-8', (err, res) => {
        if (err) {
            console.log(err);
            return;
        }
        const second = res;
        readFile('./content/third.txt', 'utf-8', (err, res) => {
            if (err) {
                console.log(err);
                return;
            }
            const third = res;
            writeFile('./content/result-async.txt', `This be the async: \n\n ${first} \n ${second} \n ${third}`, (err, res) => {
                if (err) {
                    console.log(err);
                    return;
                }
                console.log('Task Completed');
            });
        })
    })
});
console.log('Starting Next Task');