try {
    console.log("1:", a); 
} catch (e) {
    console.log("Error in a:", e.message);
}

try {
    console.log("2:", b); 
} catch (e) {
    console.log("Error in b:", e.message);
}

try {
    console.log("3:", c); 
} catch (e) {
    console.log("Error in c:", e.message);
}

var a = 10;
let b = 20;
const c = 30;


sayHello(); 

try {
    sayHi(); 
} catch (e) {
    console.log("Error in sayHi:", e.message);
}


function sayHello() {
    console.log("4: Hello from function declaration");
}


var sayHi = function () {
    console.log("5: Hello from function expression");
};


sayHi(); 