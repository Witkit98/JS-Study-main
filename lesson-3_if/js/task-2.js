const userAge = +prompt("Enter your age")
if (userAge < 0 || userAge > 120) {
    console.log("Error")
} else {
    console.log("Ok")
}