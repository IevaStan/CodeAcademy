// Pakoreguokite antrą pratimą, kad mygtukas suktųsi ratu - laikrodžio rodykle.

document.querySelector("button").style = "position:absolute; top:0; left:0";
let corner = 0;
const cornerStyles = [
  "position:absolute; top:0; right:0;",
  "position:absolute; bottom:0; right:0;",
  "position:absolute; bottom:0; left:0;",
  "position:absolute; top:0; left:0;",
];

function changePosition(event) {
  if (corner < cornerStyles.length) {
    document.querySelector("button").style = cornerStyles[corner];
    corner++;
  }
  if (corner === cornerStyles.length) {
    corner = 0;
  }
}

document.querySelector("button").addEventListener("click", changePosition);
