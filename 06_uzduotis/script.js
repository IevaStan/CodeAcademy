let myBtn = document.querySelector("input[type=button]");
function btnClick() {
  let myName = document.getElementById("name").value;
  console.log(myName);
}

myBtn.addEventListener("click", btnClick);

//nuo čia

let answerOne = prompt("Please enter the first number", "1");
console.log(answerOne);
let numberOne = +answerOne;
let answerTwo = prompt("Please enter the second number", "2");
console.log(answerTwo);
let yourName = prompt("Please enter your name", "John");
console.log(yourName);
let operation = prompt("Please enter math operation, e.g. +, -, /, *", "*");
console.log(operation);
let finalAnswer = eval(numberOne + operation + numberTwo);
console.log(eval(numberOne + operation + numberTwo));
let custIdElement = document.querySelector("#answer");
custIdElement.textContent = `Dear ${yourName}, the answer to your equation is ${finalAnswer}`;

//iki čia susimesk kodą į btnClick funkciją (ištrink tai kas prie tai jame yra).
//btnClick bus funkcija, kuri aktyvuosis paspaudus mygtuką HTML'e, ir įmes visus aprašytus prompt'us.
//text input galima ištrinti.