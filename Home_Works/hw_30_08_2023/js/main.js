function numbersArray(value) {
  const arr = [];
  for (let i = value; i > 0; i--) {
    arr.push(random());
  }
  return arr;
}

function random() {
  return Math.trunc(Math.random() * 100);
}

const array = numbersArray(100);
////
function findMax(arr) {
  let max = arr[0];
  let maxIndex = 0;

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
      maxIndex = i;
    }
  }

  return [maxIndex, max];
}

function findMin(arr) {
  // TODO: Code here...
  let min = arr[0];
  let minIndex = 0;

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
      minIndex = i;
    }
  }

  return [minIndex, min];
}

console.log("MAX", findMax(array));
console.log("MIN", findMin(array));
