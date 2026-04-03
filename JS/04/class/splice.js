let arr = [1, 2, 3];

console.log("First:", arr);

arr.splice(arr.length, 0, 4);
console.log("push:", arr);


arr.splice(arr.length - 1, 1);
console.log("pop:", arr);

arr.splice(0, 0, 1);
console.log("unshift:", arr);

arr.splice(0, 1);
console.log("shift:", arr);