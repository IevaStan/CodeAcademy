document.querySelector("form").addEventListener("submit", submitFunction);

function submitFunction(event) {
  event.preventDefault();
  let n = document.getElementById("numberN").value;
  let letterC = "";
  for (let i = 1; i <= n - 1; i++) {
    letterC += "C";
  }
  for (let i = 0; i < n - 1; i++) {
    letterC += "C";
    letterC += "<br>";
  }
  for (let i = 1; i <= n; i++) {
    letterC += "C";
  }
  document.getElementById("letterC").innerHTML = letterC;
}
