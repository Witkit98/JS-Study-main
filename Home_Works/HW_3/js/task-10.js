/**Запросить дату (день, месяц, год) и вывести следующую
за ней дату. Учтите возможность перехода на следующий
месяц, год, а также високосный год. */

let userDay = +prompt("Enter any day");
let userMonth = +prompt("Enter any month");
let userYear = +prompt("Enter any year");
//chek leap Year or noth.
const feb = userYear % 400 === 0 && (userYear % 4 === 0 || !(userYear % 100 === 0))
    ? 29
    : 28;

let daysInMonth;

//month case
switch (userMonth) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
        daysInMonth = 31;
        break;
    case 2:
        daysInMonth = feb;
        break;
    case 4:
    case 6:
    case 9:
    case 11:
        daysInMonth = 30;
        break;
    default:
}

userDay++;

if (userDay > daysInMonth) {
    userDay = 1;
    userMonth++;
}

if (userMonth > 12) {
    userMonth = 1;
    userYear++;
}

const date = `${userDay}.${userMonth}.${userYear}`;

console.log(date);