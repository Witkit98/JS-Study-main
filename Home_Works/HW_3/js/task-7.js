/**Запросить у пользователя сумму покупки и вывести сумму
к оплате со скидкой: от 200 до 300 – скидка будет 3%, от 300
до 500 – 5%, от 500 и выше – 7%. */
const check = +prompt("enter the amount on the check")

if (check >= 200 && check < 300) {
    console.log(check * 0.97)
} else if (check >= 300 && check < 500) {
    console.log(check * 0.95)
} else if (check >= 500) {
    console.log(check * 0.93)
}