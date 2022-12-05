const firstNumber = +prompt("Enter jour first number")
const operator = prompt("Enter jour operator")
const secondNumber = +prompt("Enter jour secondNumber")
switch (operator) {
    case "+":
        console.log(firstNumber + secondNumber)
        break;
    case "-":
        console.log(firstNumber - secondNumber)
        break
    case "*":
        console.log(firstNumber * secondNumber)
        break;
    case "/":
        console.log(firstNumber / secondNumber)
        break;
    default:
        console.log("А нахуя тебе больше то?")
}