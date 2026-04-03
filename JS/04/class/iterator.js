let arr = [1, 2, 3, 4, 5];

arr.forEach(num => console.log(num));

const double = arr.map(num => num * 2);
console.log(doubled);

const even = arr.filter(num => num % 2 === 0);
console.log(even);

const sum = arr.reduce((acc, num) => acc + num, 0);
console.log(sum);

