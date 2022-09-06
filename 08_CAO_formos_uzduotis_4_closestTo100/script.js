document.querySelector("form").addEventListener("submit", submitFunction);

function submitFunction(event) {
  event.preventDefault();
  m = document.getElementById("firstNumber").value;
  n = document.getElementById("secondNumber").value;
  console.log(m);
  console.log(n);
  let o = 100 - m;
  let p = 100 - n;
  if (m > n) {
    alert("Skaičius " + m + " yra arčiau 100 nei skaičius " + n);
  } else {
    alert("Skaičius " + n + " yra arčiau 100 nei skaičius " + m);
  }
}
