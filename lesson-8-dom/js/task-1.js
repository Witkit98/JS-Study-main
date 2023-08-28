const test = document.querySelector("p");

test.textContent = "Ventil";

const firstLi = document.querySelectorAll("li");

firstLi.textContent = "First LI";
const lastLi = document.querySelector("ul").lastElementChild;
lastLi.textContent = "seccond li";

const changeTextContent = document.querySelectorAll("h1");

for (let i = 0; i < changeTextContent.length; i++) {
  changeTextContent[i].textContent = `Changed #${i + 1}`;
}
