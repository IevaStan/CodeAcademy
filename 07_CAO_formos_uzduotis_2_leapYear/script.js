document.querySelector("form").addEventListener("submit", submitFunction);

function submitFunction(event) {
  event.preventDefault();
  let year = document.getElementById("year").value;
  console.log(year);
  if (year % 4 === 0 && year % 100 != 0) {
    document.querySelector("h1").innerHTML = year + " metai yra keliamieji";
  } else if (year % 400 === 0) {
    document.querySelector("h1").innerHTML = year + " metai yra keliamieji";
  } else {
    document.querySelector("h1").innerHTML = year + " metai nėra keliamieji";
  }
}
