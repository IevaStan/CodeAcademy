let cars = [
  { brand: "Opel", model: "Ascona", color: "red" },
  { brand: "Ford", model: "Mondeo", color: "#005588" },
  { brand: "Honda", model: "Civic", color: "#000000" },
  { brand: "Kia", model: "Ceed", color: "rgb(255,255,0)" },
  { brand: "Peugeot", model: "208", color: "blue" },
  { brand: "Tesla", model: "Model 3", color: "salmon" },
  { brand: "Toyota", model: "Yaris", color: "slateblue" },
  { brand: "Fiat", model: "500", color: "wheat" },
  { brand: "Cupra", model: "Formentor", color: "royalblue" },
  { brand: "Renault", model: "Mégane E-Tech", color: "orchid" },
  { brand: "Hyundai ", model: "Ioniq 5", color: "purple" },
  { brand: "Porsche", model: "Taycan", color: "aqua" },
];

let persons = [
  { brand: "Opel", model: "Ascona", color: "red" },
  { brand: "Ford", model: "Mondeo", color: "#005588" },
  { brand: "Honda", model: "Civic", color: "#000000" },
  { brand: "Kia", model: "Ceed", color: "rgb(255,255,0)" },
  { brand: "Peugeot", model: "208", color: "blue" },
  { brand: "Tesla", model: "Model 3", color: "salmon" },
  { brand: "Toyota", model: "Yaris", color: "slateblue" },
  { brand: "Fiat", model: "500", color: "wheat" },
  { brand: "Cupra", model: "Formentor", color: "royalblue" },
  { brand: "Renault", model: "Mégane E-Tech", color: "orchid" },
  { brand: "Hyundai ", model: "Ioniq 5", color: "purple" },
  { brand: "Porsche", model: "Taycan", color: "aqua" },
];

let body = document.querySelector("body");

let container = document.createElement("div");
container.className = "container";

let row = document.createElement("div");
row.className = "row";

body.appendChild(container);
container.appendChild(row);

for (let i = 0; i < cars.length; i++) {
  createCard(cars[i])
  }


for (let i = 0; i < persons.length; i++) {
  createCard(persons[i])
}


function createCard(data) {
  
  
  let column = document.createElement("div");
  column.className = "col";

  let card = document.createElement("div");
  card.className = "card";
  card.style = "width: 18rem";

  let img = document.createElement("img");
  // img.src = "https://picsum.photos/200/150";
  img.src = "  https://source.unsplash.com/random/200x150/?car";
  img.className = "card-img-top";
  img.alt = "nuotrauka apie kažką";

  let cardBody = document.createElement("div");
  cardBody.className = "card-body";

  let cardTitle = document.createElement("h5");
  cardTitle.className = "card-title";
  cardTitle.innerText = data.brand;

  let cardText = document.createElement("p");
  cardText.className = "card-text";
  cardText.innerText = data.model;

  let cardButton = document.createElement("a");
  cardButton.className = "btn btn-primary";
  cardButton.href = "#";
  cardButton.style.backgroundColor = data.color;
  cardButton.innerText = "Buy this car";

  row.appendChild(column);
  column.appendChild(card);
  card.appendChild(img);
  card.appendChild(cardBody);
  cardBody.appendChild(cardTitle);
  cardBody.appendChild(cardText);
  cardBody.appendChild(cardButton);
  
}