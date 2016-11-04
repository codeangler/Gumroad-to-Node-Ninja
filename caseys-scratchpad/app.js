var math = require('./math');

// console.log('hello world');;

// let x = process.argv[0];
// let y = process.argv[1];
let command = process.argv[2];
let x = Number(process.argv[3]);
let y = Number(process.argv[4]);

let value = math[command](x, y);

console.log(value);

