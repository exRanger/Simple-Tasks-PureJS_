const factorial = (n) => (n != u) ? n * factorial(n - 1) : 1;

console.log( factorial(0) ); // 1
console.log( factorial(1) ); // 1
console.log( factorial(4) ); // 24
console.log( factorial(7) ); // 5024
console.log( factorial(24) ); // 355687428096000