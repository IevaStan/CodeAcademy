// FUNKCIJOS
// function multiplication(n1, n2) {
//   return n1 * n2;
// }
// console.log(multiplication(4, 5));

// function subtraction(n1, n2) {
//   return n1 - n2;
// }
// console.log(subtraction(7, 8));
// console.log(multiplication(2, subtraction(15, 6)));

// function randomNumber(min, max) {
//   let random = Math.random();
//   random = random * max;
//   random = random - min;
//   random = Math.floor(random);
//   return random;
// }
// console.log(randomNumber(1, 10));

// CAO UŽDUOTYS - FUNKCIJOS

// // 1.
// let userName = prompt("Please enter your name", "John");
// function alertName(userName) {
//   alert(userName);
// }
// console.log(alertName(userName));

// // 2.
// function randomNumber() {
//   return Math.floor(Math.random() * 5) + 1;
// }
// randomNumber();

// // 3.
// // kaip padaryti, kad veiktų su promptu?
// function fullNameLength(name, surname) {
//   return name.length + surname.length;
// }
// fullNameLength("John", "Johnson");
// console.log(fullNameLength("John", "Johnson"));

// // 4.
// function letterNumber(index) {
//   const letters = [
//     "A",
//     "B",
//     "C",
//     "D",
//     "E",
//     "F",
//     "G",
//     "H",
//     "I",
//     "J",
//     "K",
//     "L",
//     "M",
//     "N",
//     "O",
//     "P",
//     "Q",
//     "R",
//     "S",
//     "T",
//     "U",
//     "V",
//     "W",
//     "X",
//     "Y",
//     "Z",
//   ];
//   return letters[index - 1];
// }
// letterNumber(6);
// console.log(letterNumber(6));

// // 5.
// function myFunction(n1, n2, operator) {
//   if (operator === "sum") {
//     return n1 + n2;
//   } else {
//     if (operator === "sub") {
//       return n1 - n2;
//     }
//     if (operator === "div") {
//       return n1 / n2;
//     } else {
//       return n1 * n2;
//     }
//   }
// }
// myFunction(5, 6, "sub");
// console.log(myFunction(5, 6, "sub"));

// // 6.
// function randomNumber() {
//   return Math.floor(Math.random() * 10) + 1;
// }

// function powNumber(number) {
//   return Math.pow(number, 2);
// }
// powNumber(randomNumber());
// console.log(powNumber(randomNumber()));
