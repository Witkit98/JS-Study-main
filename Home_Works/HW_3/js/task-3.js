/**Запросить у пользователя трехзначное и число и проверить,
есть ли в нем одинаковые цифры.
 */
const threeDigitNumber = +prompt("Enter three-digit number");
const firstNumber = threeDigitNumber % 10;
const secondNumber = ((threeDigitNumber % 100) - firstNumber) / 10;
const thirdNumber = (threeDigitNumber - (threeDigitNumber % 100)) / 100;

if (firstNumber === secondNumber || firstNumber === secondNumber || secondNumber === thirdNumber) {
    console.log("Есть повторения");
} else { console.log("Нет повторений") }