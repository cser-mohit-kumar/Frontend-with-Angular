let timeoutId = setTimeout(() => {
  console.log("setTimeout executed");
}, 2000);

let count = 0;
let intervalId = setInterval(() => {
  count++;
  console.log("setInterval:", count);
  if (count === 5) {
    clearInterval(intervalId);
  }
}, 1000);