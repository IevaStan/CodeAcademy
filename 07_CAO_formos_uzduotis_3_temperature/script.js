document.querySelector("form").addEventListener("submit", submitFunction);

function submitFunction(event) {
  event.preventDefault();
  let celcius = document.getElementById("celcius").value;
  console.log(celcius);
  let farenheit = (celcius * 9) / 5 + 32;
  document.querySelector("h1").innerHTML = `${celcius}°C
  atitinka ${farenheit}°F
  `;
}
