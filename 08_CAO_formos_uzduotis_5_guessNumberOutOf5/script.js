function submitFunction(event) {
  event.preventDefault();
  let randomNumber = Math.floor(Math.random() * 5) + 1;
  console.log(randomNumber);
  let guessNumber = Number(document.getElementById("number").value);
  console.log(guessNumber);
  if (randomNumber === guessNumber) {
    alert("Atspėjai!");
  } else {
    alert("Neatspėjai!");
  }
}

document.querySelector("form").addEventListener("submit", submitFunction);
