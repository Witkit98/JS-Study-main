const hours = +prompt("Enter your hours")
const minutes = +prompt("Enter your minutes")
const seconds = +prompt("Enter your seconds")

const hoursCorrect = hours >= 0 && hours < 24
const minutesCorrect = minutes >= 0 && minutes < 60
const secondsCorrect = seconds >= 0 && seconds < 60


if (hoursCorrect && minutesCorrect && secondsCorrect) {
    console.log(hours, minutes, seconds)
} else {
    console.log("Eror kurwa!")
}