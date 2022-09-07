// H1 elemente parašykite savo vardą. Paspaudus ant vardo - tegul jūsų vardas atsiranda per vidurį ekrano, 
// dvigubai didesniu font'o dydžiu ir raudona spalva.

document.querySelector("h1").addEventListener("click", () => 
{
    document.querySelector("h1").style.textAlign = "center";
    document.querySelector("h1").style.fontSize = "4rem";
    document.querySelector("h1").style.color = "red"
}
)