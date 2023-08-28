const element = document.getElementById("box");
let position = 0;

const animationInterval = setInterval(() => {
  position += 5;
  element.style.left = position + "px";
  element.style.top = position + "px";

  if (position >= 200) {
    clearInterval(animationInterval);
  }
}, 50);
