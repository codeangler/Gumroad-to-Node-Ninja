// console.log('hello world');;
// let x = process.argv[0];
// let y = process.argv[1];
let command = process.argv[2];
let x = Number(process.argv[3]);
let y = Number(process.argv[4]);
// console.log(z, aa, ab);

// let a = process.env.A;
// let b = process.env.B;
// let c = process.env.C;

// switch(command){
//   case "add": 
//     console.log( x + y ) ;
//   case "sub": 
//     console.log( x - y );
//   default: console.log('please select opersation')
// }

if (command === "add") {
  console.log( x + y);
}
if (command === "sub") {
  console.log( x - y);
}

// console.log(command);