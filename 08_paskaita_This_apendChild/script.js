let cars = [
    {brand: 'opel', model: 'ascona', color: 'red'},
    {brand: 'ford', model: 'mondeo', color:'#005588'},
    {brand: 'honda', model: 'civic', color: '#000000'},
    {brand: 'kia', model: 'ceed', color: 'rgb(255,255,0)'},
]
//
// for (let i=0; i<cars.length;i++ ) {
//     document.getElementById('carlist').appendChild(createCard(cars[i]))
// }
function createsAlert(title) {
    let alert = document.createElement('div')
    alert.innerText = title
    alert.className = 'alert alert-primary'
    return alert;
}
let body = document.querySelector('body')
    //<!--<div class="alert alert-primary">-->
    //<!--    Mūsų mandras JS skurtas alert'as-->
    //<!--</div>-->
for (let i=0; i<cars.length;i++ ) {
    let alert = document.createElement('div')
    alert.innerText = cars[i].brand
    alert.className = 'alert alert-primary'
    body.appendChild(alert)
}
console.log(createsAlert())



// // UŽDUOTIS SU BOOTSTRAP
// let body = document.querySelector("body");

// let listGroup = document.createElement("ol");
// listGroup.className = "list-group list-group-numbered";

// let listGroupItem = document.createElement("li");
// listGroupItem.className =
//   "list-group-item d-flex justify-content-between align-items-start";

// let listGroupItemDiv = document.createElement("div");
// listGroupItemDiv.className = "ms-2 me-auto";

// let listGroupItemDivInnerDiv = document.createElement("div");
// listGroupItemDivInnerDiv.className = "fw-bold";
// listGroupItemDivInnerDiv.innerText = "Subheading1";

// let badge = document.createElement("span")
// badge.className = "badge bg-primary rounded-pill"
// badge.innerText= "41"

// body.appendChild(listGroup)
// listGroup.appendChild(listGroupItem);
// listGroupItem.appendChild(listGroupItemDiv);
// listGroupItem.appendChild(badge)
// listGroupItemDiv.appendChild(listGroupItemDivInnerDiv);
// listGroupItemDiv.innerHTML += "Cras justo odio";

// console.log(listGroup);
