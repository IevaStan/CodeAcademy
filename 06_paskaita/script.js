// let tempArray = [1,2,3,444,545,545,4,545345,647567,567,567,456,3445,345,345,3453,45345,45,456,456,456,23423,45,6467,64,47634,5345,345,345,34534,57,64647,345,3453,45345,3534,5364,5754,5443,53453,452354,325,45,45745,6345,345,345,345]
//
// function toCelsius(name) {
//     console.log(name)
// }
// for (let i =0; i < tempArray.length; i++) {
//     let result = toCelsius(tempArray[i])
//     console.log(result)
// }

// toCelsius('Vytenis')
// toCelsius('Rokas')

// let myBtn = document.querySelector('input[type=button]')
// function btnClick() {
//     let myName = document.getElementById('name').value
//     console.log(myName)
// }

// myBtn.addEventListener('click', btnClick)

let cars = [
  { brand: "opel", model: "ascona", color: "red" },
  { brand: "ford", model: "mondeo", color: "#005588" },
  { brand: "honda", model: "civic", color: "#000000" },
  { brand: "kia", model: "ceed", color: "rgb(255,255,0)" },
];
// einu per savo visa cars array
for (let i = 0; i < cars.length; i++) {
  // turiu div'a html'e su id demo
  let demo = document.getElementById("demo");
  // butent += sako, kad prideti prie egzistuojancio html. Jeigu tik = tai jis ji perraso
  // info: https://www.w3schools.com/js/js_string_templates.asp
  // pirmu variantu naudoju Variable Substitutions :)
  demo.innerHTML += `<div style="background-color: ${cars[i].color}"> ${cars[i].brand} </div>`;
  // cia sukuriu tiesiog tarpeli tarp elementu, kad matytusi tarpas HTML'e
  demo.innerHTML += "<br>";
  //cia naudoju paprasciausia string'o sudejimo buda kai turi 'kazkas' + 'kazkas'
  demo.innerHTML +=
    '<div style="background-color: ' +
    cars[i].color +
    '"' +
    ">" +
    cars[i].brand +
    "</div>";
  // cia tiesiog pakeiciau is ' i "
  demo.innerHTML +=
    "<div style='background-color: " +
    cars[i].color +
    "'" +
    ">" +
    cars[i].brand +
    "</div>";
  // cia sukuriu tiesiog tarpeli tarp elementu, kad matytusi tarpas HTML'e
  demo.innerHTML += "<br>";
}
