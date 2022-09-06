const WINNING_COMBINATIONS = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];
let cells = document.getElementsByClassName("cell");
let first = true;
for (let i = 0; i < cells.length; i++) {
  // pridejom eventa kuris klausosi paspaudimo ir paleidzia funkcija clickOnSquare
  cells[i].addEventListener("click", clickOnSquare);
}
function clickOnSquare() {
  // tikrina ar kvadratukas tuscias, jei tuscias kad i ji kazka irasytu
  if (!this.innerText.length) {
    // symool yra tiesiog X ar O, o nusprendziam pagal kintamaji first
    //jeigu true
    // true ? grizta pirmas atsakyams : 'X'
    //jeigu false
    // true ? 'O' : grizta antras atsakyams
    let symbol = first ? "O" : "X";

    // irasom verte i kvaratuka
    this.innerText = symbol;
    // jau kai irasem i kvadratuka first nustatom i priesga vert (true -> false, jeigu false -> true)
    first = !first;
    // einam i for loop'a per laimejimu kombinacijos
    for (let i = 0; i < WINNING_COMBINATIONS.length; i++) {
      // nustatatau i kintamaji, laimindos kombinacijos index'a is array
      let firstIndex = WINNING_COMBINATIONS[i][0];
      let secondIndex = WINNING_COMBINATIONS[i][1];
      let thirdIndex = WINNING_COMBINATIONS[i][2];
      // su nusistatytu index'u pasiimu kvadratuka/elementa
      let firstCell = cells[firstIndex];
      let secondCell = cells[secondIndex];
      let thirdCell = cells[thirdIndex];
      // pasiimu elemento verte/content'a
      let firstCellContent = firstCell.textContent;
      let secondCellContent = secondCell.textContent;
      let thirdCellContent = thirdCell.textContent;
      // tirkinu ar kvadratukas nera tuscias
      if (
        firstCellContent.length &&
        secondCellContent.length &&
        thirdCellContent.length
      ) {
        // tikrinu kvadratuku vertes ar jos lygios
        if (
          firstCell.textContent === secondCell.textContent &&
          secondCell.textContent === thirdCell.textContent
        ) {
          //jeigu lygios, tai parodau laimetoja
          alert("Laimetojas: " + symbol);
        }
      }
    }
  }
}

//Pradinis palanas:
//1. Padaryti, kad paspaudus ant laukelio įdėtu X arba O
//2. Kai įdedamas X ar O tikrinti ar yra laimėtojas. WINNING_COMBINATIONS yra sąrašas kombinacijų, kurios jei atitinka laimėjo (pagalvokit kaip jis gali veikti :) taip, aš irgi užtrukau kol supratau)
//3 Kai kažkas, tai pranešti laimėtoją
//Dar padaryti, kai bus pdaryta viskas:
//lygiosios
//pradėti iš naujo
//sekti rezultatus, kas kiek kartų laimėjo (jei dar nebūsum praėję, papasakoti apie local storage, session storage)
