// JS pasirašykite, kad mygtukas position: absolute ir jo lokacija - viršus, kairė.
// Paspaudus ant mygtuko, jis turi peršokti į apačią dešinę pusę.
// Paspaudus vėl - į viršų, kairę pusę. Ir taip šokinėti įstrižai per ekraną
// kiekvieno paspaudimo metu.

document.querySelector('button').style = 'position:absolute; top:0; left:0;';

let virsuje = true;
function changePosition() {
    document.querySelector('button').style = virsuje ? 
  'position:absolute; bottom:0; right:0;' : 'position:absolute; top:0; left:0;';
  virsuje = !virsuje;
}

document.querySelector('button').addEventListener('click', changePosition);