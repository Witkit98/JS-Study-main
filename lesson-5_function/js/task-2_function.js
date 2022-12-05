function getNumbers(num) {
    let result = '';

    for (let i = 1; i <= num; i++) {
        result += `${i} `;
    }

    return result;
}

const sixNumberString = getNumbers(6);

console.log(getNumbers(5));