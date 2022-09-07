// Sukurkite input elementą (formos ar mygtuko nereikia), kur vartotojas galės įrašyti savo vardą.
// Kai rašo - keičiasi puslapio stilius. Jei įrašytos yra du simboliai arba mažiau - viso puslapio fonas raudonas.
// Jei daugiau nei du simboliai - puslapio fonas žalias.

document.getElementById("userName").addEventListener("keyup", myFunction);

function myFunction(event) {
  event.preventDefault();
  if (this.value.length > 2) {
    document.querySelector("body").style.backgroundColor = "green";
  } else {
    document.querySelector("body").style.backgroundColor = "red";
  }
}


// // CAO sprendimas:

// document.getElementById('userName').addEventListener('input', event => {
//   const name = event.target.value;
//   document.body.style.backgroundColor = name.length < 3 ? 'red' : 'green';
// });
