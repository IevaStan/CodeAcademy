// <!--<ol class="list-group list-group-numbered">-->
// <!--    <li class="list-group-item d-flex justify-content-between align-items-start">-->
// <!--        <div class="ms-2 me-auto">-->
// <!--            <div class="fw-bold">Subheading</div>-->
// <!--            Cras justo odio-->
// <!--        </div>-->
// <!--        <span class="badge bg-primary rounded-pill">14</span>-->
// <!--    </li>-->
// <!--</ol>-->
for (let i=0; i<cars.length;i++ ) {
  let listGroup = document.createElement('ol')
  listGroup.className = 'list-group list-group-numbered'
  let listGroupItem = document.createElement('li')
  listGroupItem.className = 'list-group-item d-flex justify-content-between align-items-start'
  let listGroupItemDiv = document.createElement('div')
  listGroupItemDiv.className = 'ms-2 me-auto'
  let listGroupItemDivInnerDiv = document.createElement('div')
  listGroupItemDivInnerDiv.className = 'fw-bold'
  listGroupItemDivInnerDiv.innerText = cars[i].brand
  let badge = document.createElement('span')
  badge.className = 'badge bg-primary rounded-pill'
  badge.innerText = '14'
  listGroup.appendChild(listGroupItem)
  listGroupItem.appendChild(listGroupItemDiv)
  listGroupItem.appendChild(badge)
  listGroupItemDiv.appendChild(listGroupItemDivInnerDiv)
  listGroupItemDiv.innerHTML += cars[i].modelz
  console.log(listGroup)
  body.appendChild(listGroup)
}

// let listGroup = document.createElement('ol')
//     listGroup.className = 'list-group list-group-numbered'
//     let listGroupItem = document.createElement('li')
//     listGroupItem.className = 'list-group-item d-flex justify-content-between align-items-start'
//     let listGroupItemDiv = document.createElement('div')
//     listGroupItemDiv.className = 'ms-2 me-auto'
//     let listGroupItemDivInnerDiv = document.createElement('div')
//     listGroupItemDivInnerDiv.className = 'fw-bold'
//     listGroupItemDivInnerDiv.innerText = cars[i].brand
//     let badge = document.createElement('span')
//     badge.className = 'badge bg-primary rounded-pill'
//     badge.innerText = '14'
//     listGroup.appendChild(listGroupItem)
//     listGroupItem.appendChild(listGroupItemDiv)
//     listGroupItem.appendChild(badge)
//     listGroupItemDiv.appendChild(listGroupItemDivInnerDiv)
//     listGroupItemDiv.innerHTML += cars[i].modelz
//     console.log(listGroup)
//     body.appendChild(listGroup)