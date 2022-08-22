// let i = 0;

// while (i < wordsArray.length) {
//   console.log(wordsArray[i]);
//   i++;
// }

// while (true) {
//   console.log(wordsArray[i]);
//   i++;
// }

// do {
//   console.log(wordsArray[i]);
//   i++;
// } while (i < wordsArray.length);


/*console.log('veikia')
let customClassElements = document.getElementsByClassName('custom-class')
let customIdElement = document.getElementById('custom-id')
for (let i =0; i < customClassElements.length; i++) {
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    customClassElements[i].style.backgroundColor = "#" + randomColor;
}
// customIdElement.style.backgroundColor = 'grey'
console.log()*/
// customClassElements[3].style.backgroundColor = 'green'
let customClassElements = document.querySelectorAll('.custom-class')
let custIdElement = document.querySelector('#custom-ID')
custIdElement.style.padding = '10px'
custIdElement.style.backgroundColor = 'red'
custIdElement.textContent = 'mano random textas'
customClassElements[4].innerHTML = '<h1>Naujas tekts su h1</h1>'
// console.log(custIdElement)

