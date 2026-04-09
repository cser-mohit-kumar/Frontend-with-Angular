function outer(){
    let a = 100
    let b = 200
    return function inner(){
        console.log(a);
    }
}
//debugger
let result = outer();
result();