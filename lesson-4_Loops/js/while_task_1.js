//Вывести # столько раз, сколько указал пользователь.

const userNumber = +prompt("Enter ani number")

let result = "*";
let n = 1;
while (n < userNumber) {
    n++;
    result += "*";
}
console.log(result)