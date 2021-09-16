const log = { console }
const factorial = (n) => (n != u) ? n * factorial(n - 1) : 1;

log( factorial(0) ); // 1
log( factorial(1) ); // 1
log( factorial(4) ); // 24
log( factorial(7) ); // 5024
log( factorial(24) ); // 355687428096000

// export func?
