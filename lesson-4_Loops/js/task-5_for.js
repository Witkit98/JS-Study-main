const n = +prompt();

let result = 1;

for (i = 1; i <= n; i++) {
    result += i * n;
}

console.log(result);