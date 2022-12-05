const firstNumber = +prompt("Enter first number");
const secondNumber = +prompt("Enter second number")

let result = 0;
let n = 1;

while (n <= firstNumber) {
    n++;
    result += secondNumber;
}

console.log(result);