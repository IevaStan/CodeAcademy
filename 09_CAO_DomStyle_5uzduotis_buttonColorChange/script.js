// Pasikoreguokime penktą pratimą - šį kartą array nereikės, keisime RGB spalvas.
// Paspaudus ant mygtuko, susigeneruoja trys random skaičiai (nuo 0 iki 255, imtinai),
// šie skaičiai atvaizduoja spalvų paletę (red, green, blue => RGB).
// Padarykite, kad paspaudus ant mygtuko, jo fono spalva pasikeistų į atsiktinę spalvą pagal RGB paletę

document.querySelector("button").addEventListener("click", colorChange);

function colorChange(event) {
  let r = Math.floor(Math.random() * 254) + 1;
  let g = Math.floor(Math.random() * 254) + 1;
  let b = Math.floor(Math.random() * 254) + 1;
  let color = "rgb(" + r + ", " + g + ", " + b + ")";
  console.log(color);
  document.querySelector("button").style.backgroundColor = color;
}

// // CAO sprendimas:
// function generateRandomColor() {
//   const randomBetween = (min, max) => min + Math.floor(Math.random() * (max - min + 1));
//   const r = randomBetween(0, 255);
//   const g = randomBetween(0, 255);
//   const b = randomBetween(0, 255);
//   return `rgb(${r},${g},${b})`;
// }

// document.querySelector('button').addEventListener('click', event => {
//   event.target.style.backgroundColor = generateRandomColor();
// });
