const pyramid = (lines) => {
    const tab = '\n';
    let result = '';

    for (let i = 0; i < lines; i++) {
        for (let j = 0; j < lines - i; j++) {
            result += " ";
        }
        for (let k = 0; k < 2 * i + 1; k++) {
            result += "*";
        }
        result += tab;
    }

    console.log(result);
};

pyramid(5);
pyramid(3);
pyramid(10);
pyramid(40);

function func(num, operation) {
    console.log(operation(num));
}

func(5, function (num) { return num * num });