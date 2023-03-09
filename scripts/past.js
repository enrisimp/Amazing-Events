console.log("test");

events = data.events;
let cards = document.getElementById("cardholder");
console.log(cards);
let fragment = document.createDocumentFragment();
let pastEvents = [];

for (let evento of events) {
    if (data.currentDate > evento.date) {
      pastEvents.push(evento);
    // let card = document.createElement("div");
    // card.className = "col center";
    // card.innerHTML = ` <div class="card border">
    //                         <img src="${evento.image}" class="card-img-top cardFoto" alt="cinema">
    //                         <div class="card-body">
    //                             <h5 class="card-title center">${evento.name}</h5>
    //                             <p class="card-text center">${evento.description}</p>
    //                             <div class="row card-footer">
    //                                 <div class="col">
    //                                     <p class="card-text"><small class="text-muted">Price: $${evento.price}</small></p>
    //                                 </div>
    //                                 <div class="col center">
    //                                     <a href="./details.html?id=${evento._id}" class="btn btn-primary">Ver mas</a>
    //                                 </div>
    //                             </div>
    //                         </div>
    //                     </div>`;
    // htmlCard = ` <div class="col center">
    //                     <div class="card border">
    //                         <img src="${evento.image}" class="card-img-top cardFoto" alt="cinema">
    //                         <div class="card-body">
    //                             <h5 class="card-title center">${evento.name}</h5>
    //                             <p class="card-text center">${evento.description}</p>
    //                             <div class="row card-footer">
    //                                 <div class="col">
    //                                     <p class="card-text"><small class="text-muted">Price: $${evento.price}</small></p>
    //                                 </div>
    //                                 <div class="col center">
    //                                      <a href="./details.html?id=${evento._id}" class="btn btn-primary">Ver mas</a>
    //                                 </div>
    //                             </div>
    //                         </div>
    //                     </div>
    //                 </div>`;
    // htmlCards += htmlCard;
    // fragment.appendChild(card);
  }
}
// cards.innerHTML = htmlCards;
// cards.appendChild(fragment);
console.log(pastEvents);


//------CATEGORY ----------
categoria = [];
for (let evento of events) {
  categoria.push(evento.category);
  //   console.log("el categoria es " + evento.category);
//   console.log(categoria);
}
// console.log(categoria);

// busco que no haya categorías repetidas
let x = (categoria) => categoria.filter((v, i) => categoria.indexOf(v) === i);
let filtra = x(categoria);
// document.write(filtra);
// console.log(filtra);

let cat = document.getElementById("cat");
for (let category of filtra) {
    let categorizador = `<div class="col">
                                <input type="checkbox" name="category" id="${category}" value="${category}" checked>
                                <label for="${category}" class="checkbox-inline">${category}</label>
                            </div>`;
    cat.innerHTML += categorizador;
                          

}
// cat.innerHTML = categorizador;

events = data.events;
// let cards = document.getElementById("cardholder");
console.log(cards);
// let fragment = document.createDocumentFragment();

const categoryCheckboxes = document.querySelectorAll('input[name="category"]');

// le aplico un event listener a cada checkbox
categoryCheckboxes.forEach(function (checkbox) {
  checkbox.addEventListener("change", updateEvents);
});

// le aplico un event listener al Search
search.addEventListener("input", searchEvents);
searchbtn.addEventListener("click", searchEvents);

// Filtra los eventos segun la categoría
function updateEvents() {
  // Creo un array con los values de los checked
  const selectedCategories = Array.from(categoryCheckboxes)
    .filter(function (checkbox) {
      return checkbox.checked;
    })
    .map(function (checkbox) {
      return checkbox.value;
    });

  const filteredEvents = pastEvents.filter(function (event) {
    return selectedCategories.includes(event.category);
  });

  displayEvents(filteredEvents);
}

// Busca/Filtra los eventos segun la busqueda
function searchEvents() {
  const searchTerm = search.value.toLowerCase();
  const filteredEvents = pastEvents.filter((event) => {
    const nameMatch = event.name.toLowerCase().includes(searchTerm);
    const descriptionMatch = event.description
      .toLowerCase()
      .includes(searchTerm);
    return nameMatch || descriptionMatch;
  });
  displayEvents(filteredEvents);
}

// MUESTRA EVENTOS FILTRADOS
function displayEvents(eventOs) {
  let eventList = document.getElementById("cardholder");

  // BORRAR LISTA DE CARDS
  eventList.innerHTML = "";

  // CREA CARDS
  eventOs.forEach(function (evento) {
    let card = document.createElement("div");
    card.className = "col center";
    card.innerHTML = ` <div class="card border">
                            <img src="${evento.image}" class="card-img-top cardFoto" alt="cinema">
                            <div class="card-body">
                                <h5 class="card-title center">${evento.name}</h5>
                                <p class="card-text center">${evento.description}</p>
                                <div class="row card-footer">
                                    <div class="col">
                                        <p class="card-text"><small class="text-muted">Price: $${evento.price}</small></p>
                                    </div>
                                    <div class="col center">
                                        <a href="./details.html?id=${evento._id}" class="btn btn-primary">Ver mas</a>
                                    </div>
                                </div>
                            </div>
                        </div>`;
    eventList.appendChild(card);
  });
}

// Inicio de todos los eventos
displayEvents(pastEvents);
// updateEvents();