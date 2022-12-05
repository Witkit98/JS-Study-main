const userRace = prompt("Enter any planet");
const planet = userRace === "Земля" || userRace === "земля"
    ? "Привет землянин"
    : "Привет Инопланетянин";
console.log(planet);