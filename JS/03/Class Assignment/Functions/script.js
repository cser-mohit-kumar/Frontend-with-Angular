
function greetUser() {
    console.log("Hello! Welcome 😊");
}



function addNumbers(a, b) {
    console.log("Sum is:", a + b);
}


function multiply(x, y) {
    return x * y;
}

let result = multiply(4, 5);
console.log("Multiplication:", result);

function sayHi(name ) {
    console.log("Hi " + name);
}

sayHi();        
sayHi("Aarya"); 


const square = (n) => {
    return n * n;
};

console.log("Square:", square(6));

let a = function(){
    console.log('hello');
}

let b = function sum(a,b){
    return a+b;
}
//HIGH ORDER FN
function calc(a,b,opFn){
    console.log(opFn(a,b));
}
calc(10,20,b);

function abc(){
    console.log(arguments);
}
abc(1,2,3,4,5,6,7);

let arrow = ()=>{
    console.log(arguments);
    
}
arrow(1,2,3,4,5,6,7,8,9);// !Error- ReferenceError: arguments is not defined