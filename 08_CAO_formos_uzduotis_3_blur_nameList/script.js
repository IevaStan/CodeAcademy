document.getElementById("userName").addEventListener("blur", myFunction);

function myFunction(event) {
  event.preventDefault();
  document.querySelector("div").innerHTML += "userName, ";
}
