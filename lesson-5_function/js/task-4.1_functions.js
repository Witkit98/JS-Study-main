/**
 * Вернуть количество символов в числе
 */

function countDigits(k) {
    if (typeof k !== 'number') {
        throw 'Argument type error!';
    }

    let count = 0;
    let value = k;

    while (value > 0) {
        value -= value % 10;
        value /= 10;
        count++;
    }

    return count;
}

console.log(countDigits(123));
console.log(countDigits(32145));
console.log(countDigits(1));
console.log(countDigits(12));
console.log(countDigits(33234324234));