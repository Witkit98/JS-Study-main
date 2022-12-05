const userNumber = +prompt("enter jour nomber")
const result = userNumber % 5 === 0
    ? "Кратное пяти"
    : "Не кратное пяти";
console.log(result);