console.log("veikia");

// Su prompt box paimti iš vartotojo du skaičius
// Skaičius sudėti (Google: javascript how to convert string to number)
// Grąžinti į kosole arba į alert box

let answerOne = prompt("Please enter the first number", "1");
console.log(answerOne);
let numberOne = +answerOne;
let answerTwo = prompt("Please enter the second number", "2");
console.log(answerTwo);
// console.log(typeof answerTwo);
let numberTwo = Number(answerTwo);
// arba float (leidzia nustatyti trumpmena)
// console.log(typeof numberTwo)
let sum = numberOne + numberTwo;
alert(`The sum of numbers your entered is ${sum}`);

// Su promtp box paimti vardą vartotojo
let yourName = prompt("Please enter your name", "John");
// Paimti iš vartotojo veiksmą kurį nori atlikti (dalyba, daugyba,atimti ir t.t.)
let operation = prompt("Please enter math operation", "e.g. +, -, /, *");
console.log(operation);
let finalAnswer = eval(numberOne + operation + numberTwo);
console.log(eval(numberOne + operation + numberTwo));
let custIdElement = document.querySelector("#answer");
custIdElement.textContent = `Dear ${yourName}, the answer to your equation is ${finalAnswer}`;
