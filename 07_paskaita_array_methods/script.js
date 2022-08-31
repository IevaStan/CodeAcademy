// // JOIN TARP ELEMENTŲ LEIDŽIA PRIDĖTI NORIMĄ SIMBOLĮ
// // POP IŠIMA PASKUTINĮ ELEMENTĄ
// // PUSH PRIDEDA ELEMENTĄ PABAIGOJE
// // SHIFT IŠIMA PIRMĄ ELEMENTĄ
// // UNSHIFT PRIDEDA ELEMENTĄ PRIEKYJE
// // [] PERRAŠO ELEMENTĄ NORIMOJE VIETOJE
// // PATOGUS BŪDAS PRIDĖTI ELEMENTĄ Į PABAIGĄ
// // DELETE VENGTINAS NAUDOTI NES PALIEKA "EMPTY" REIKŠMES
// // CONCAT SUJUNGIA DU ARRAY:
// // CONCAT SUJUNGIA IR DAUGIAU ARRAY:
// // Į ARRAY GALIMA TIESIOGIAI PRIDĖTI ELEMENTĄ:
// // SPLICE PRIDEDA ELEMENTUS Į ARRAY
// // SLICE IŠKERPA ELEMENTUS Į NAUJĄ ARRAY NUO NURODYTO ELEMENTO BET NEPAŠALINA IŠ PIRMINIO ARRAY
// // SLICEUI GALIMA NURODYTI NUO KURIO IKI KURIO ELEMENTO IŠKIRPTI, NEĮSKAITANT PASKUTINIOJO


// let show = function() {
//   console.log('Anonymous function');
// };

// show();

// let person = {
//   name: "Vytenis",
//   city: function () {
//     console.log ("Cia is person function");
//     return "tralialia";
//   }
// }

// console.log(person)
// person.show()
// ()()

// (function() {
//   console.log('IIFE');
// })();

// // TIESIOG PAVERSTI Į STRING
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// document.getElementById("demo").innerHTML = fruits.toString();
// console.log(fruits)

// // JOIN TARP ELEMENTŲ LEIDŽIA PRIDĖTI NORIMĄ SIMBOLĮ
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// document.getElementById("demo").innerHTML = fruits.join(" * ");

// // POP IŠIMA PASKUTINĮ ELEMENTĄ
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// // fruits.pop();
// let fruit = fruits.pop();
// console.log(fruit) // parodo kurį elementą išmetė
// document.getElementById("demo").innerHTML = fruits

// // PUSH PRIDEDA ELEMENTĄ PABAIGOJE
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.push("Kiwi");
// document.getElementById("demo").innerHTML = fruits

// // SHIFT IŠIMA PIRMĄ ELEMENTĄ
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.shift();
// document.getElementById("demo").innerHTML = fruits

// // UNSHIFT PRIDEDA ELEMENTĄ PRIEKYJE
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// console.log(fruits)
// fruits.unshift("Lemon");
// console.log(fruits)
// document.getElementById("demo").innerHTML = fruits

// // [] PERRAŠO ELEMENTĄ NORIMOJE VIETOJE
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// console.log(fruits)
// fruits[2] = "mano vaisius"
// console.log(fruits)


// // PATOGUS BŪDAS PRIDĖTI ELEMENTĄ Į PABAIGĄ
// fruits[fruits.length] = "Kiwi";

// // DELETE VENGTINAS NAUDOTI NES PALIEKA "EMPTY" REIKŠMES
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// delete fruits[1];
// console.log(fruits)

// // CONCAT SUJUNGIA DU ARRAY:
// const myGirls = ["Cecilie", "Lone"];
// const myBoys = ["Emil", "Tobias", "Linus"];
// const myChildren = myGirls.concat(myBoys);
// console.log(myGirls)
// console.log(myBoys)
// console.log(myChildren)

// // CONCAT SUJUNGIA IR DAUGIAU ARRAY:
// const arr1 = ["Cecilie", "Lone"];
// const arr2 = ["Emil", "Tobias", "Linus"];
// const arr3 = ["Robin", "Morgan"];
// const myChildren = arr1.concat(arr2, arr3);
// console.log(arr1)
// console.log(arr2)
// console.log(arr3)
// console.log(myChildren)

// // Į ARRAY GALIMA TIESIOGIAI PRIDĖTI ELEMENTĄ:
// const arr1 = ["Emil", "Tobias", "Linus"];
// const myChildren = arr1.concat("Peter");
// console.log(myChildren)

// // SPLICE PRIDEDA ELEMENTUS Į ARRAY
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.splice(2, 0, "Lemon", "Kiwi");
// // pirmas skaicius rodo nuo kelintos vietos norite prideti nauja Elementa
// // antras skaicius nutodoo kiek elementų ištrinti
// console.log(fruits);

// const fruits1 = ["Banana", "Orange", "Apple", "Mango"];
// fruits1.splice(2, 2, "Lemon", "Kiwi");
// console.log(fruits1)

// const fruits2 = ["Banana", "Orange", "Apple", "Mango"];
// fruits2.splice(0, 1);
// console.log(fruits2)

// // SLICE IŠKERPA ELEMENTUS Į NAUJĄ ARRAY NUO NURODYTO ELEMENTO BET NEPAŠALINA IŠ PIRMINIO ARRAY

// const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
// const citrus = fruits.slice(1);
// console.log(fruits)
// console.log(citrus)

// const fruits1 = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
// const citrus1 = fruits1.slice(3);
// console.log(fruits1)
// console.log(citrus1)

// const fruits3 = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
// const citrus3 = fruits3.slice(2);
// console.log(fruits3);
// console.log(citrus3);


// // SLICEUI GALIMA NURODYTI NUO KURIO IKI KURIO ELEMENTO IŠKIRPTI, NEĮSKAITANT PASKUTINIOJO
// const fruits2 = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
// const citrus2 = fruits2.slice(1, 3);
// console.log(fruits2);
// console.log(citrus2);




// // DU METODAI DARANTYS TĄ PATĮ:
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// document.getElementById("demo").innerHTML = fruits.toString();


// const fruits1 = ["Banana", "Orange", "Apple", "Mango"];
// document.getElementById("demo").innerHTML = fruits1;