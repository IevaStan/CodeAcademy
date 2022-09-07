let persons = [
  {
    name: "rokas",
    categories: ["a", "b", "c"],
    owned_cars: [
      {
        brand: "Ford",
        model: "focus",
        car_options: {
          color: "red",
          transmission: "auto",
        },
      },
      {
        brand: "Opel",
        model: "zafira",
        car_options: {
          color: "yellow",
          transmission: "manual",
        },
      },
    ],
  },
  {
    name: "vytenis",
    categories: ["b"],
    owned_cars: [
      {
        brand: "Ford",
        model: "mondeo",
        car_options: {
          color: "blue",
          transmission: "auto",
        },
      },
      {
        brand: "Volkswagen",
        model: "passat",
        car_options: {
          color: "brown",
          transmission: "auto",
        },
      },
    ],
  },
  {
    name: "petras",
    categories: ["b", "c", "e"],
    owned_cars: [
      {
        brand: "Honda",
        model: "civic",
        car_options: {
          color: "red",
          transmission: "auto",
        },
      },
      {
        brand: "Volkswagen",
        model: "Passat",
        car_options: {
          color: "indigo",
          transmission: "auto",
        },
      },
      {
        brand: "Honda",
        model: "civic",
        car_options: {
          color: "black",
          transmission: "manual",
        },
      },
    ],
  },
  {
    name: "dovilė",
    categories: ["b", "c"],
    owned_cars: [
      {
        brand: "Peugeot",
        model: "206",
        car_options: {
          color: "lawngreen",
          transmission: "manual",
        },
      },
      {
        brand: "Audi",
        model: "A6",
        car_options: {
          color: "hotpink",
          transmission: "manual",
        },
      },
    ],
  },
  {
    name: "lilija",
    categories: ["a", "b", "c"],
    owned_cars: [
      {
        brand: "Mercedes-Benz",
        model: "C",
        car_options: {
          color: "#BD9BD6",
          transmission: "auto",
        },
      },
      {
        brand: "Volkswagen",
        model: "Passat",
        car_options: {
          color: "indigo",
          transmission: "auto",
        },
      },
      {
        brand: "Citroën",
        model: "C4",
        car_options: {
          color: "#0d2845",
          transmission: "auto",
        },
      },
    ],
  },
];

let body = document.querySelector("body");
let container = document.createElement("div");
container.className = "container";
let row = document.createElement("div");
row.className = "row";

body.appendChild(container);
container.appendChild(row);

for (let i = 0; i < persons.length; i++) {
  createCard(persons[i]);
}

function createCard(data) {
  let card = document.createElement("div");
  card.className = "card";
  card.style.width = "100%";

  let cardBody = document.createElement("div");
  cardBody.className = "card-body";
  let cardTitle = document.createElement("h3");
  cardTitle.className = "card-title";
  cardTitle.style.textTransform = "uppercase";
  cardTitle.innerText = data.name;
  let cardSubtitle = document.createElement("h4");
  cardTitle.className = "card-title";
  cardSubtitle.innerText = "Categories";

  row.appendChild(card);
  card.appendChild(cardBody);
  cardBody.appendChild(cardTitle);
  cardBody.appendChild(cardSubtitle);

  let driverCategoriescontainer = document.createElement("div");
  driverCategoriescontainer.className = "d-flex";
  driverCategoriescontainer.style.marginLeft = "30px";

  for (let j = 0; j < data.categories.length; j++) {
    let driveCategory = document.createElement("div");
    driveCategory.className = "card-text";
    driveCategory.innerText += data.categories[j];
    driveCategory.style.border = "1px solid black";
    driveCategory.style.padding = "10px";
    driveCategory.style.borderRadius = "5px";
    driveCategory.style.textTransform = "uppercase";
    driverCategoriescontainer.appendChild(driveCategory);
  }
  cardBody.appendChild(driverCategoriescontainer);

  let ownedcarsContainer = document.createElement("div");
  ownedcarsContainer.style.margin = "20px 0 10px 0";
  ownedcarsContainer.style.padding = "10px";
  ownedcarsContainer.style.border = "1px solid black";
  ownedcarsContainer.style.alignItems = "center";
  let ownedcarsTitle = document.createElement("h4");
  ownedcarsTitle.style.padding = "10px";
  ownedcarsTitle.innerText = "Cars owned: ";

  cardBody.appendChild(ownedcarsContainer);
  ownedcarsContainer.appendChild(ownedcarsTitle);
  ownedcarsContainer.className = "d-flex";

  for (let j = 0; j < data.owned_cars.length; j++) {
    let ownedcarsCard = document.createElement("div");
    ownedcarsCard.style =
      "border: 1px solid black; padding: 10px; margin: 2px; width: 20%; height: 25vh";
    ownedcarsCard.style.backgroundColor = data.owned_cars[j].car_options.color;
    let ownedcarsCardBrand = document.createElement("h4");
    ownedcarsCardBrand.innerText = data.owned_cars[j].brand;
    let ownedcarsCardModel = document.createElement("h4");
    ownedcarsCardModel.innerText = data.owned_cars[j].model;

    let ownedcarsCardTransmission = document.createElement("h6");
    ownedcarsCardTransmission.innerText = "Transmission: ";
    ownedcarsCardTransmission.innerText +=
      data.owned_cars[j].car_options.transmission;
    ownedcarsCardTransmission.style.color = "darkgrey";

    ownedcarsContainer.appendChild(ownedcarsCard);
    ownedcarsCard.appendChild(ownedcarsCardBrand);
    ownedcarsCard.appendChild(ownedcarsCardModel);
    ownedcarsCard.appendChild(ownedcarsCardTransmission);
  }
}