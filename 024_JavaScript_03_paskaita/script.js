// let answer = prompt("Please enter your name");

// if (answer === "rokas") {
//   console.log("Taip, Rokas");
// } else {
//   alert("Neteisingai, ne Rokas");
// }

// console.log(answer);
// console.log(typeof answer);
// // promptas visada grąžins stringą

// // SWITCHAS
// let answer = prompt("Please enter your name");
// let text = "Čia bus nustatytas atsakymas";
// switch (answer) {
//   case "Rokas":
//     text = "Taip, Rokas";
//     break;
//   case "Vytenis":
//     text = "Taip, Vytenis";
//     break;
//   default:
//     text = "No value found";
// }
// console.log(text);

// CONDITIONAL (TERNARY) OPERATOR
// true/false/4>2 ? klaustukas sako kad bus tikrinama ir po klaustuko renkamės teisingas atsakymas:neteisingas atsakymas

// let isMember = true;
// let price = isMember ? "$2.00" : "$10.00";
// console.log(price)

// // OBJEKTAI
// let person = {
//   name: "Vytenis",
//   age: 40,
// };
// console.log(person.name);
// console.log(person.age);

// // ARRAY
// // du būdai iškonsologinti amžių iš objekto ar Array
// let person = {
//   name: "Vytenis",
//   age: 40,
// };
// console.log(person.age);
// let personArray = [
//   "Vytenis",
//   40,
//   4,
//   { name: "Šitą noriu iškonsologinti", pet: "cat" },
// ];
// console.log(personArray[1]);
// console.log(personArray);
// console.log(personArray[3].name);

console.log(wordsArray.length);
// iškonsologinti masyvo ilgį
console.log(wordsArray);
// iškonsologinti 5 elementą iš masyvo
console.log(wordsArray[4]);

for (let i = 0; i < wordsArray.length; i++) {
  console.log("Array indexo numeris", i);
}

let raides = ["a", "b", "c", "d"];
console.log(raides[2]);
for (let i = 0; i < raides.length; i++) {
  let raide = raides[i];

  console.log("Raidziu array indexo numeris", i);
  console.log("Raidė pagal array numerį", raides[i]);
  console.log(raide);
}
