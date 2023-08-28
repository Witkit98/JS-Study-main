let count = 10;

const intervalId = setInterval(() => {
  console.log(`Interval count: ${count}`);
  count--;

  if (count < 1) {
    clearInterval(intervalId);
    console.log("Interval stopped");
  }
}, 1000);
