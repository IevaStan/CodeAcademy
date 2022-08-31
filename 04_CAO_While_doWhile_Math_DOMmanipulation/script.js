// WHILE ir DO...WHILE

// let i = 0;
// while (i < 3) {
//   console.log("Ieva");
//   i++;
// }

// let combo = "";
// const myName = "Ieva";
// let times = 5;
// do {
//   combo += myName;
//   times--;
// } while (times > 0);
// console.log(combo);

// MATH

// document.getElementById("demo").innerHTML = Math.PI

// let angle = 0;
// console.log(Math.cos(angle));

// const random1to5 = Math.floor(Math.random() * 5) + 1
// console.log(random1to5);

// const random5to12 = Math.floor(Math.random() * 8) + 5
// console.log(random5to12)

// let random1to5 = Math.floor(Math.random() * 5) + 1;
// console.log(random1to5);
// if ((random1to5 === 1)) {
//   alert("Sveikiname! Jūs laimėjote xx");
// } else {
//   alert("Deja, šį kartą nieko nelaimėjote. Bandykite rytoj dar kartą.");
// }

// DOM manipuliacija

// document.body.innerHTML = "<h2>Ieva</h2>"

// let userName = prompt("Please enter your name", "John");
// document.getElementById("name").textContent = userName;

// console.log(document.getElementsByTagName("li")[2].textContent)
// document.getElementsByTagName("li")[2].textContent = "Sūris"
// arba
// document.querySelector('li:last-child').textContent = 'Sūris';

// Kompleksiniai DOM Selektoriai

// document.querySelector(".bluetext > span").textContent = "blue"
let firstItem = document.querySelector("li:first-child").textContent;
console.log(firstItem);
let secondItem = document.querySelector("li:nth-child(2)").textContent;
console.log(secondItem);
document.querySelector("li:first-child").textContent = secondItem;
document.querySelector("li:nth-child(2)").textContent = firstItem;
