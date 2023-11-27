let fs = require('fs');

console.log(fs);

// returns undefined
// let result = fs.writeFileSync('./writtenByNode.txt', "This is written by node.");
// console.log(result);

fs.writeFileSync('./writtenByNode.txt', "This is written by node.", 'utf8');

let data = fs.readFileSync('./writtenByNode.txt', 'utf8');
console.log(data);

