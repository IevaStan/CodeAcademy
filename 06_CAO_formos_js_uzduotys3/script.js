document.querySelector("form").addEventListener("submit", submitFunction);

function submitFunction(event) {
  event.preventDefault();
  let age = document.getElementById("age").value;
  let convicted = document.querySelector("input[type=checkbox]").checked;
  if (age >= 18 && age < 30 && convicted === true) {
    document.querySelector("h1").innerHTML = "Esate kviečiamas į kariuomenę";
  } else {
    document.querySelector("h1").innerHTML = "Deja, jūs netinkamas kariuomenei";
  }
}
