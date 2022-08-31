// // UPPERCASE
// let message = "Hello world!";
// console.log(message)
// let x = message.toUpperCase();
// console.log(message.toUpperCase())

// THIS
// const person = {
//   firstName: "John",
//   lastName: "Doe",
//   id: 5566,
//   fullName: function() {
//     return this.firstName + " " + this.lastName;
//   }
// };  
// console.log(person)
// console.log(person.fullName())

// const person1 = {
//   firstName: "John1",
//   lastName: "Doe1",
//   id: 5566,
//   fullName: function() {
//     return person1.firstName + " " + person1.lastName;
//   }
// };  
// console.log(person1)
// console.log(person1.fullName())

// person.name = function () {
//   return this.firstName + " " + this.lastName;
// };

// document.querySelector("button").innerText = "Click to Remove Me!";
// document.querySelector("button").addEventListener("click", () => document.querySelector("button").style = "display: none")
// // document.querySelector("button").addEventListener("click", () => this.style = "display: none") 
// // kodėl "this" šiuo atveju inline veikia, o js - ne? 


// APPENDCHILD - prideda node-elementą kaip paskutinį vaikinį elementą

// const node = document.createElement("li");
// const textnode = document.createTextNode("Water");
// node.appendChild(textnode);
// document.getElementById("myList").appendChild(node);


// Move an item from one list to another:
const node = document.getElementById("myList2").lastElementChild;
document.getElementById("myList1").appendChild(node);