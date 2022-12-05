/**Пользователь ввел число, а на экран вывелись все числа
от введенного до 0. */

const userNumber = +prompt("Enter any number")

let n = userNumber;

while (n >= 0) {
    console.log(n);
    --n;
}