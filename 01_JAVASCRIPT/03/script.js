// // 1.Su window.prompt box, įrašytą vertę grąžinti su console.log. Įrašyta vertė turi būti priskirta variable pavadinimu answer.

// let answer = prompt("What's your name?", "John Johnson");
// console.log(answer);

// // 2.Gautą atsakymą (answer) patikrinti ar tai skaičius, jei tai skaičius grąžinti tą skaičių per alert box. Jei tai ne skaičius, grąžinti alert box su žinute, kad tai ne skaičius ir įrašytą verte. (google JS how to check if its a number)

// console.log(typeof answer);
// if (isNaN(answer)) {
//   alert(`Your name is ${answer}`);
// } else {
//   alert(`Yove've entered ${answer} as your name. Please enter your real name!`);
// }
// // Bet atsakymas visada bus stingas

// 3.Panaudoti for loop. Eiti per wordsArray ir kai žodis yra lygus nulla,
// alert box grąžinti tekstą: Radom žodį nulla.

console.log(wordsArray);

// "Rastas žodis nulla"
// "Žodis nerastas"
let answer = prompt("Iveskite zodi")
for (let i = 0; i < wordsArray.length; i++) {
  let word = wordsArray[i];
  if (word === answer) {
    console.log("Rastas žodis ", word, "sąraše Nr. ", i+1);
  } else {
    console.log("Žodis nerastas");
  }
}

// // Sunkesnis variantas. Galite naudoti prompt box įraštą žodį ir patikrinti ar toks yra wordsArray.

