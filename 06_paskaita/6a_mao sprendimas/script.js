let cars = [
  { brand: "opel", model: "ascona", color: "red" },
  { brand: "ford", model: "mondeo", color: "#005588" },
  { brand: "honda", model: "civic", color: "#000000" },
  { brand: "kia", model: "ceed", color: "rgb(255,255,0)" },
];

for (let i = 0; i < cars.length; i++) {
  document.getElementById(
    "demo"
  ).innerHTML += `<div style="background-color: ${cars[i].color}">${cars[i].brand} ${cars[i].model} </div>`;
  document.getElementById("demo").innerHTML += `<br>`;
}
