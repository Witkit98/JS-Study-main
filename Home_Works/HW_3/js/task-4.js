/*Запросить у пользователя год и проверить, високосный он
или нет. Високосный год либо кратен 400, либо кратен 4 и
при этом не кратен 100.*/
const userYear = +prompt("enter any year")
const result = userYear % 400 === 0 && (userYear % 4 === 0 || !(userYear % 100 === 0))
    ? "Высокостный"
    : "Не высокостный";
console.log(result);