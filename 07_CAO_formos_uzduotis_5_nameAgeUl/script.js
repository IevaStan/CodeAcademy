document.querySelector("form").addEventListener("submit", submitFunction);

function submitFunction(event) {
  event.preventDefault();
  let name = document.getElementById("name").value;
  let age = document.getElementById("age").value;
  for (let i = 0; i < age; i++) {
    document.querySelector("ul").innerHTML += `<li>${name}</li>`;
  }
}



// // CAO sprendimas
// function handleFormSubmit(event) {
//   event.preventDefault();
//   const name = document.getElementById('name').value;
//   const numberOfElements = Number(document.getElementById('numberOfElements').value);
  
//   const list = document.getElementById('list');
//   list.innerHTML = '';
//   for (let i = 0; i < numberOfElements; i++) {
//     const listItem = document.createElement('li');
//     listItem.innerText = name;
//     list.append(listItem);
//   }
// }

// document.querySelector('form').addEventListener('submit', handleFormSubmit);