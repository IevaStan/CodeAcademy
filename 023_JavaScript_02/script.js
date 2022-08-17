// console.log('veikia!!!!')
// let age = 15
// age = age + 5
// console.log(age)
// age = age + 5
// age = age + 5
// age = age + 5
// age = age + 5
// age = age + 5
// age = age + 5
// age = age + 5
// age = age + 5
// age = age + 5
// console.log(age)
// age = age + 5
// age = age + 5
// age = age + 5
// age = age + 5
// age = age + 5
// age = age + 5
// age = age + 5
// age = age + 5
// console.log(age)

// console.log(typeof age)

// let text;
// console.log(text)
// if (confirm("Įkyri žinutė") == true) {
//   text = "Pasirinkote OK";
// } else {
//   text = "Atšaukėte registraciją";
// }
// console.log(text)

// let age = 15;
// console.log(age);

// let confirmAge = confirm("Ar Jums yra 18?")
// console.log(confirmAge)

// if (confirmAge) {
//   console.log("Pilnametis, tau jau 18 " + confirmAge);
// } else {
//   console.log("Pienburnis, dar paauk" + " " + confirmAge);
// }

// let number = 8;
// if (number > 0) {
//   console.log(`${number} yra teigiamas skaičius`);
// } else if (number < 0) {
//   console.log(`${number} yra neigiamas skaičius`);
// } else {
//   console.log(`${number} yra lygus nuliui`);
// }

// 2 === 2
// 2 == "2"
// 2 !== 2
// 5 < 5
// 5 >= 4
// true !== false
// 9 - 5 === 4
// 5 * 5 !== "25"
// true && true
// 2 === 5 && true
// 6 * 6 === 36 && 15 - 9 == "6"
// false || false
// 10 === 10 || 5 == 2
// 2 * 2 / 2 == "1" || 5 * 5 === 25
// 14 * 2 !== "28" || "Jonas" == "Jonas"
// 10 && 15 > 10
// "Petras" && 0
// ("Petras" || "Jonas") && (22 * 5 || 15 - 1 === 13)
// "jonas" === "Jonas"
// "Petras" + 5 === "Petras" + "5"
// "Jonas" + 5 + 5 === "Jonas10"
// 5 + 10 + "Antanas" === "15Antanas"
// 2 + 1 + "Jonas" + 3 + 2 === "3Jonas5"
// 10 % 1 === 1
// 5 * "5" === 25

// let legalAge = 21
// let clientAge = 43
// if(clientAge > legalAge) {
//     alert(`OK, klientui jau ${legalAge}`)
// }
// else {
//     alert("dar palauk " + clientAge)
// }

// let vardas = "Ieva"
// if (vardas.length > 6) {
//   alert("Ilgas vardas")
// } else {
//   console.log(vardas.length)
// }

// let age = 0.5;
// if (age >= 100 || age <= 0) {
//   alert("Invalid age");
// } else if (age > 0 && age < 18) { 
//     // užtektų tik (age < 18)
//   alert("Child");
// } else {
//   alert("Adult");
// }

let car = "Opel";
if (
  car === "VW" ||
  car === "Audi" ||
  car === "Bentley" ||
  car === "Bugatti" ||
  car === "Lamborghini" ||
  car === "Porsche"
) {
  alert("Car model belongs to VW group");
} else if (car === "BMW" || car === "Mini" || car === "Rolls-Royce") {
  alert("Car model belongs to BMW group");
}
else {
    alert("Car model belongs to other group")
}