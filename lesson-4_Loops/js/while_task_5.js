//*Посчитать факториал введенного пользователем числа.
const userNumber = +prompt("enter any number")

let i = 1;
let result;

while (i <= userNumber) {
    i++;
    result += i * userNumber;
}
console.log(result);