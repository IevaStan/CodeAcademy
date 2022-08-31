// const age = 41;
// let birthyear = 2022 - age;
// console.log(`Your birthyear is ${birthyear}`)

// SWITCH

// let car = "BMW";
// switch (car) {
//   case "VW":
//   case "Audi":
//   case "Bentley":
//   case "Bugatti":
//   case "LAmborgini":
//   case "Porsche":
//     console.log("The car belongs to VW group");
//     break;
//   case "BMW":
//   case "Mini":
//   case "Rolls-Royce":
//     console.log("The car belongs to BMW group");
//     break;
//   default:
//     console.log("The car model is unknown");
// }

// let userinput = "Avietė";
// switch (userinput) {
//   case "Agurkas":
//   case "Kopūstas":
//   case "Pomidoras":
//   case "Agurotis":
//   case "Patisonas":
//   console.log("Daržovė");
//   break;
//   case "Obuolys":
//   case "Kriaušė":
//   case "Slyva":
//   case "Persikas":
//   case "Melionas":
//   console.log("Vaisius");
//   break;
//   case "Serbentas":
//   case "Braškė":
//   case "Mėlynė":
//   case "Avietė":
//   case "Vyšnia":
//   console.log("Uoga");
//   break;
//   default:
//     console.log("Atvejis neaprašytas")
// }

// let weekDay = 0;
// switch (weekDay) {
//   case 0:
//     console.log("pirmadienis");
//     break;
//   case 1:
//     console.log("antradienis");
//     break;
//   case 2:
//     console.log("trečiadienis");
//     break;
//   case 3:
//     console.log("ketvirtadienis");
//     break;
//   case 4:
//     console.log("penktadienis");
//     break;
//   case 5:
//     console.log("šeštadienis");
//     break;
//   case 6:
//     console.log("sekmadienis");
//     break;
//   default:
//     console.group("Įvedėte neteisingą savaitės dieną");
// }
// console.log(weekDay);

// TERNARY OPERATORS (ONE LINER)

// const username = "Ieva";
// console.log(username.length < 5 ? "Short name" : "Long name");

// const legalAge = 18;
// const clientAge = 14;
// console.log(clientAge >= legalAge ? "Can drive" : "Can't drive");

// const legalAge = 18;
// const clientAge = 16;
// console.log(
//   clientAge <= 0 |
//   clientAge > 120
//     ? "Invalid number"
//     : clientAge >= legalAge
//     ? "Can drive"
//     : "Can't drive"
// );
// console.log(clientAge)

// let phone = "iPhone";
// let isIphoneUser = phone === "iPhone";
// console.log(isIphoneUser)

// ĮVADAS Į CIKLUS

// let myName = "Ieva";
// for (let i=0; i < 10; i++) {
//   console.log(myName);
// }

// let myName = "Ieva";
// let repeat = 10;
// for (let i=0; i < repeat; i++) {
//   console.log(myName);
// }

let myName = "Ieva";
let repeat = 10;
for (let i=0; i < repeat; i++) {
  console.log(`${i}. ${myName}`);
}

  // for (let i=10; i>0; i--) {
  //   console.log(i)
  // }