function add(a, b) {
    return a + b;
}
function subtract(a, b) {
    return a - b;
}
function multiply(a, b) {
    return a * b;
}
function divide(a, b) {
    return b === 0 ? "Cannot divide by 0" : a / b;
}

// Using opFn (Higher Order Function)
function calculatorFn(a, b, opFn) {
    return opFn(a, b);
}

// Using operator string
function calculatorOp(a, b, op) {
    if (op === "+") return a + b;
    if (op === "-") return a - b;
    if (op === "*") return a * b;
    if (op === "/") return b === 0 ? "Cannot divide by 0" : a / b;
}


console.log("Using opFn:");
console.log("Addition:", calculatorFn(10, 5, add));
console.log("Subtraction:", calculatorFn(10, 5, subtract));
console.log("Multiplication:", calculatorFn(10, 5, multiply));
console.log("Division:", calculatorFn(10, 5, divide));

console.log("\nUsing op:");
console.log("Addition:", calculatorOp(10, 5, "+"));
console.log("Subtraction:", calculatorOp(10, 5, "-"));
console.log("Multiplication:", calculatorOp(10, 5, "*"));
console.log("Division:", calculatorOp(10, 5, "/"));