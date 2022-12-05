/**Запросить у пользователя его возраст и определить, кем он
является: ребенком (0–2), подростком (12–18), взрослым
(18_60) или пенсионером (60– ...).**/
const userAge = +prompt("enter jour age")
if (userAge >= 0 && userAge <= 2) {
    console.log("Вы грудничёк")
} else if (userAge >= 2 && userAge <= 12) {
    console.log("Вы ребёнок")
} else if (userAge >= 12 && userAge <= 18) {
    console.log("Вы подросток")
} else if (userAge >= 18 && userAge <= 60) {
    console.log("Вы Взрослый")
} else if (userAge >= 60) {
    console.log("Вы пенсионер")
}
