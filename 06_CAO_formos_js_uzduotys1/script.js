// // 1, 2 užduotys
// document.querySelector("form").addEventListener("submit", submitFunction);
// function submitFunction(event) {
//   event.preventDefault();
//   alert(document.querySelector("input[name=name]").value);
//   document.querySelector("h1").innerHTML =
//     document.querySelector("input[name=age]").value;
// }

// 3 užduotis
document.querySelector("form").addEventListener("submit", submitFunction);
function submitFunction(event) {
  event.preventDefault();
  let userName = document.querySelector("input[name=name]").value;
  if (document.querySelector("input[name=age]").value >= 18) {
    document.querySelector("h1").innerHTML = `Vairuoti gali: ${userName}`;
  } else {
    document.querySelector("h1").innerHTML = `Vairuoti negali: ${userName}`;
  }
}
