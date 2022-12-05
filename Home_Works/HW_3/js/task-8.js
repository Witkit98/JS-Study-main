/**Запросить у пользователя длину окружности и периметр
квадрата. Определить, может ли такая окружность поме-
ститься в указанный квадрат. */
const radius = +prompt("Enter radius of the circle")
const square = +prompt("Enter perimeter of the square")
const result = radius + radius === square
    ? "Помещается"
    : "Не помещается"
console.log(result)