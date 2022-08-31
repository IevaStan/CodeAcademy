document.querySelector("form").addEventListener("submit", submitFunction);

function submitFunction(event) {
  event.preventDefault();
  let size = document.getElementById("size").value;
  
  let triangle = "";
  for (let i = 0; i < size; i++) {
    for (j = 0; j <= i; j++) {
      triangle += "*";
    }
    triangle += "<br>";
    document.getElementById("triangle").innerHTML = triangle;
  }
}