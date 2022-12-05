const number = +prompt("Enter your number")
if (number < 0) {
    console.log("-" + number)
} else if (number > 0) {
    console.log("+" + number)
} else if (number === 0) {
    console.log("=" + number)
}