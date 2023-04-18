const {readFileSync, writeFileSync} = require('fs');
// const fs = require('fs)
// Different way to export the method 
console.log('start')

const first = readFileSync('./content/first.txt', 'utf-8')
const second = readFileSync('./content/second.txt', 'utf-8')

// console.log(first)
console.log(first, second)

// Writing to file: if the file is no there then node will create a new file
// if the file is there, then node will 
// overwrite all of its content with the new data/info
writeFileSync(
    './content/result_sync.txt', 
    `Here is the result : ${first}, ${second}`, {flag: 'a'}
)

console.log('done with this task')
console.log('starting the next one')