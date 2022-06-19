const { readFileSync, writeFileSync } = require('fs');
console.log('Starting Task 1');
const first = readFileSync('./content/first.txt', 'utf8');
const second = readFileSync('./content/second.txt', 'utf8');
const third = readFileSync('./content/third.txt', 'utf8');

writeFileSync(
    './content/result-sync.txt', 
    `This be the sync: \n\n ${first} \n ${second} \n ${third}`
);
console.log('Task Completed');
console.log('Starting Task 2');
