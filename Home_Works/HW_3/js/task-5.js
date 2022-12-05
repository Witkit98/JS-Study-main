/**Запросить у пользователя пятиразрядное число и опреде-
лить, является ли оно палиндромом. */
const userNumber = +prompt("Enter five-digit number")
const strA = String(userNumber)
const result = +(strA[4] + strA[3] + strA[2] + strA[1] + strA[0]) === userNumber
    ? "палиндром"
    : "Не является палиндромом"
console.log(result)