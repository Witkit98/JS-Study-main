const timeoutId = setTimeout(() => {
  console.log("This won't be executed");
}, 1000);

clearTimeout(timeoutId);
console.log("Timeout cleared");
