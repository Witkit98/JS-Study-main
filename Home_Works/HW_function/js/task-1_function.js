/**Описать функцию InvDigits(K), меняющую порядок следования цифр целого
положительного числа K на обратный (K — параметр целого типа, являющийся
одновременно входным и выходным). С помощью этой процедуры поменять
порядок следования цифр на обратный для каждого из пяти данных целых чисел. */

function invertDigits(k) {
    if (typeof k !== 'number') {
        throw 'The argument has to be a number!';
    }

    let result = 0;
    let value = k;

    while (value > 0) {
        const lastDigit = value % 10;
        result *= 10;
        result += lastDigit;
        value -= lastDigit;
        value /= 10;
    }

    return result;
}

console.log(invertDigits(123));
console.log(invertDigits(12345));
console.log(invertDigits(23));
console.log(invertDigits(237891256));
console.log(invertDigits(1));

// Error cases
console.log(invertDigits("ashjgdasjd"));
console.log(invertDigits(false));
console.log(invertDigits(null));