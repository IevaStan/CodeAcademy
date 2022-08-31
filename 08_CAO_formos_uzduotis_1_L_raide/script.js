document.querySelector("form").addEventListener("submit", submitFunction);

function submitFunction(event) {
  event.preventDefault();
  let n = document.getElementById("numberN").value;
  let letterL = "";
  for (let i = 0; i < n - 1; i++) {
    letterL += "L";
    letterL += "<br>";
  }
  for (let i = 1; i <= n; i++) {
    letterL += "L";
  }
  document.getElementById("letterL").innerHTML = letterL;
}
