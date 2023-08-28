function actualitiTime() {
  const time = new Date();
  const hours = time.getHours();
  const minute = time.getMinutes();
  const second = time.getSeconds();
  return hours + ":" + minute + ":" + second;
}

const box = document.getElementById("time");

setInterval(function () {
  box.textContent = actualitiTime();
}, 1000);
