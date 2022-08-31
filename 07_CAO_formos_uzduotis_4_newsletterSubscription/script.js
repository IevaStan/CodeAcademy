document.querySelector("form").addEventListener("submit", submitFunction);

function submitFunction(event) {
  event.preventDefault();
  let email = document.getElementById("email").value;
  let agree = document.querySelector("input[type=checkbox]").checked;
  if (agree === true) {
    document.querySelector(
      "h1"
    ).innerHTML = `El. paštas ${email} sėkmingai užregistruotas`;
  } else {
    document.querySelector("h1").innerHTML = "Registracija nesėkminga";
  }
}
