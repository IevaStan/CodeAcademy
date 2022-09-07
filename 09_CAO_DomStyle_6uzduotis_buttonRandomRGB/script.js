// Sukurkite mygtuką HTML'e. O su JS pasirašykite array su keturiom spalvom
// (["red", "green", "blue", "yellow"]). Paspaudus ant mygtuko - tegul jo spalva
// pasikeičia į atsitiktinę spalvą.

let colorArray = ["red", "green", "blue", "yellow"];
document.querySelector("button").addEventListener("click", colorChange);

function colorChange(event) {
  // event.preventDefault();
  let i = Math.floor(Math.random() * 4);
  console.log(i);
  document.querySelector("button").style.backgroundColor = colorArray[i];
}


// // CAO sprendimas:
// const buttonColors = ["red", "green", "blue", "yellow"]
// document.querySelector('button').addEventListener('click', event => {
//   const randomIndex = Math.round(Math.random() * 4);
//   event.target.style.backgroundColor = buttonColors[randomIndex];
// });
