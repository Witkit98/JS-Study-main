/**
 * Описать функцию InvDigits(K), меняющую порядок следования цифр целого
положительного числа K на обратный (K — параметр целого типа, являющийся
одновременно входным и выходным). С помощью этой процедуры поменять
порядок следования цифр на обратный для каждого из пяти данных целых чисел.
*/

function invertDigitsTs(k: number): number {
    let result: number = 0;
    let value: number = k;

    while (value > 0) {
        const lastDigit = value % 10;
        result *= 10;
        result += lastDigit;
        value -= lastDigit;
        value /= 10;
    }

    return result;
}

console.log(invertDigitsTs(123));
console.log(invertDigitsTs(12345));
console.log(invertDigitsTs(23));
console.log(invertDigitsTs(237891256));
console.log(invertDigitsTs(1));