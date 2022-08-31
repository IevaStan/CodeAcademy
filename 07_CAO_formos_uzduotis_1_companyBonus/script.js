document.querySelector("form").addEventListener("submit", submitFunction);

function submitFunction(event) {
  event.preventDefault();
  let experience = document.getElementById("experience").value;
  console.log(experience);
  if (experience >= 20) {
    document.querySelector("h1").innerHTML = "Jums priklauso 200 eurų bonusas";
  } else if (experience >= 10) {
    document.querySelector("h1").innerHTML = "Jums priklauso 100 eurų bonusas";
  } else {
    document.querySelector("h1").innerHTML = "Jums priklauso 50 eurų bonusas";
  }
}
