/*let name = "Wietal";
let age = 23;
alert(name);
console.log(name);
*/
const min = 60;
const sec = 60;
console.log(sec * min);
/*
const a = +prompt("Enter first numer");
const b = +prompt("Enter second numer")
console.log(a + b);
*/
// const c = +prompt("Enter first nimer")
// const d = c % 10;
// const e = ((c % 100) - d) / 10;
// const f = (c - (c % 100)) / 100;
// console.log(d * 100 + e * 10 + f)
const a = +prompt("a");
const b = +prompt("b");
const c = +prompt("c");
const D = b * b - 4 * a * c;
const x1 = (Math.sqrt(D) - b) / (2 * a);
const x2 = (-Math.sqrt(D) - b) / (2 * a);
console.log(x1);
console.log(x2);