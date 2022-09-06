let count = "";

function submitFunction(event) {
  event.preventDefault();
  let randomNumber = Math.floor(Math.random() * 5) + 1;
  console.log(randomNumber);
  let guessNumber = Number(document.getElementById("number").value);
  console.log(guessNumber);
  count++;
  if (randomNumber === guessNumber) {
    alert("Atspėjai iš " + count + " karto");
  } else {
    alert("Neatspėjai! Bandei " + count + " kartų");
  }
}

document.querySelector("form").addEventListener("submit", submitFunction);
