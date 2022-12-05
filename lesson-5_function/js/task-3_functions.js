const System = {
    out: {
        println: console.log,
    }
};

System.out.println("Hello, World!");

const firstNumber = +prompt("Enter jour first number");
const operator = prompt("Enter jour operator");
const secondNumber = +prompt("Enter jour secondNumber");

function calculate(a, operator, b) {
    switch (operator) {
        case "+":
            return a + b;
        case "-":
            return a - b;
        case "*":
            return a * b;
        case "/":
            return a / b;
        default:
            throw "Wrong operator!";
    }
}

System.out.println(calculate(firstNumber, operator, secondNumber));