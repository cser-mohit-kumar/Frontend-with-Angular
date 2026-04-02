// var a;
let b;
// const c;

// a=1
b='ascf'


var v1=123
let v2='qwert'
const v3=98


v1=34
v2='poiuy'
// v3=23
function greet1() {
  console.log("Hello!");
}

const greet = function() {
  console.log("Hello!");
};

let a = function sum(a,b){
    console.log(a+b);
}
function calc(a,b,opFn){
    console.log(opFn(a,b));
}
calc(10,5,a);

function calcu(a,b,op){
    if(op=='+'){
        return (a,b)=>a+b;
    }else if(op=='-'){
        return (a,b)=>a-b;
    }else if(op=='*'){
        return (a,b)=>a*b;
    }else if(op=='/'){
        return (a,b)=>a/b;
    }
}



console.log(calcu(1,2,'+'));
// console.log(calc(10,5,a));
console.log(v1);
console.log(v2);
console.log(v3);
console.log(window)
greet1();
console.log(greet)
console.log(greet1())
