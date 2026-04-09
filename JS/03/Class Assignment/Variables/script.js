// only declarations
var a;
let b;
// const c; // its not possible

// initialization
a = 20;
b = 'qwer';

// redeclaration
var a = 123456;
// let b = 'hhh';

// declaration + initialization
let v1 = 12345678;
var v2 = 98765;
const v3 = 345678;

// re initialization
v1 = 'qwerty';
v2 = 'poluytre';
//v3 = 'qwerty'; // TypeError: Attempted to assign to readonly property.

console.log(v1);
console.log(v2);
console.log(v3);
console.log(window);// global object in browser RTE