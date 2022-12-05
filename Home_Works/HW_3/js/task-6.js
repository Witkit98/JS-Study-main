/**Написать конвертор валют. Пользователь вводит количе-
ство USD, выбирает, в какую валюту хочет перевести: EUR,
UAH или AZN, и получает в ответ соответствующую сумму. */
const balans = +prompt("Enter currency with USD");
const currency = prompt("Enter what currency transfer you need UAH or AZN ");
const uah = 36.75;
const azn = 1.70;

switch (currency) {
    case "UAH":
        console.log(balans * uah + " UAH");
        break;
    case "AZN":
        console.log(balans * azn + " AZN");
        break;
    default:
        console.log("No more");
}