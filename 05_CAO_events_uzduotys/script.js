// // 4.
// let counter = 0;
// document.querySelector("button").addEventListener("click", () => {
//   counter++;
//   document.querySelector("h1").innerText = counter;
// });

// // 5.
// document.querySelector("p").addEventListener("copy", () => {
//   event.preventDefault();
//   alert("Do not copy");
// });

// // 6. MANO
// function randomNumber() {
//   return Math.floor(Math.random() * 100) + 1;
// }
// document.querySelector("button").addEventListener("click", () => {
//   document.querySelector("h1").textContent = randomNumber();
// });

// // 6. CAO
// function generateRandomNumber() {
//   return Math.floor(Math.random() * 100) + 1;
// }
// document.querySelector("button").addEventListener("click", () => {
//   const randomNumber = generateRandomNumber();
//   document.querySelector("h1").innerText = randomNumber;
// });

// // 7.
// document
//   .getElementById("adult")
//   .addEventListener(
//     "click",
//     () => (document.querySelector("h1").innerText = "Alus")
//   );
// document
//   .getElementById("underage")
//   .addEventListener(
//     "click",
//     () => alert("Nepilnametis - nieko neturim")
//   );

// // 8.
// function randomNumber1to3() {
//   return Math.floor(Math.random() * 3) + 1;
// }
// document.getElementById("first").addEventListener("click", () => {
//   let guess = randomNumber1to3();
//   console.log(guess);
//   guess === 1 ? alert("Yay!") : alert("Nay!");
// });
// document.getElementById("second").addEventListener("click", () => {
//   let guess = randomNumber1to3();
//   console.log(guess);
//   guess === 2 ? alert("Yay!") : alert("Nay!");
// });
// document.getElementById("third").addEventListener("click", () => {
//   let guess = randomNumber1to3();
//   console.log(guess);
//   guess === 3 ? alert("Yay!") : alert("Nay!");
// });

// // 9.
// let btns = document.querySelectorAll("button");
// for (i of btns) {
//   i.addEventListener(
//     "click",
//     () => (document.querySelector("h1").innerHTML = "Neklausote manęs")
//   );
// }

// 10.
document
  .querySelector("h1")
  .addEventListener(
    "mousemove",
    () => (document.querySelector("h1").innerHTML = "Kiek galima neklausyti?")
  );
