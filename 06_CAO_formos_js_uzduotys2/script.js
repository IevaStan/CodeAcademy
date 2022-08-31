priceAdult = 6;
priceKids = 0.5 * priceAdult;
priceSeniors = 0.66 * priceAdult;
document.querySelector("form").addEventListener("submit", submitFunction);

function submitFunction(event) {
  event.preventDefault();
  if (document.querySelector("input[name=age]").value < 18) {
    console.log("Vaikas");
    document.querySelector("h1").innerHTML = `Bilieto kaina ${priceKids} €`;
  } else {
    if (document.querySelector("input[name=age]").value > 60) {
      console.log("Senjoras");
      document.querySelector(
        "h1"
      ).innerHTML = `Bilieto kaina ${priceSeniors} €`;
    } else {
      console.log("Suaugęs");
      document.querySelector("h1").innerHTML = `Bilieto kaina ${priceAdult} €`;
    }
  }
}

// // CAO sprendimas:
// const ageInput = document.getElementById("age");
// const form = document.querySelector("form");
// const priceDisplay = document.getElementById("price");

// function handleFormSubmit(event) {
//   event.preventDefault()
//   const price = 6;
//   const age = Number(ageInput.value);

//   if (age >= 60) {
//     priceDisplay.textContent = (0.5 * price).toFixed(2);
//   } else if (age < 18) {
//     priceDisplay.textContent = (0.45 * price).toFixed(2);
//   } else {
//     priceDisplay.textContent = price.toFixed(2);
//   }
// }

// form.addEventListener("submit", handleFormSubmit);

