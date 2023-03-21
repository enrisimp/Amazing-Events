console.log("test");

let urlAPI = "https://mindhub-xj03.onrender.com/api/amazing";
// let urlAPI = "./api.json";
let categoryCheckboxes = [];
let events = [];
let pastEvents = [];

// usage
getData().then((data) => {
  // VARIABLES
  events = data.events;
  categories = [];

  for (let evento of events) {
    if (!categories.includes(evento.category)) {
      categories.push(evento.category);
    }
    if (data.currentDate > evento.date) {
      pastEvents.push(evento);
    }
  }
  //console.log(pastEvents);

  //------CATEGORY ----------
  // busco que no haya categorías repetidas
  // let x = (categoria) => categoria.filter((v, i) => categoria.indexOf(v) === i);
  // let filtra = x(categoria);
  // document.write(filtra);
  // console.log(filtra);

  createCheckboxes(categories);

  // obtengo los checkbox de categoría y le aplico un event listener a cada checkbox
  categoryCheckboxes = document.querySelectorAll('input[name="category"]');
  categoryCheckboxes.forEach(function (checkbox) {
    checkbox.addEventListener("change", searchEvents);
  });

  // le aplico un event listener al Search
  search.addEventListener("input", searchEvents);
  searchbtn.addEventListener("click", searchEvents);

  // Inicio de todos los eventos
  displayEvents(pastEvents);

  // updateEvents();
});

// Consigue los datos
async function getData() {
  try {
    //////genero un error para mostrar
    //throw new Error('se exploto el servidor')
    let respuesta = await fetch(urlAPI);
    // console.log(respuesta)
    let datos = await respuesta.json();
    //  console.log(datos.events);
    return await datos;
  } catch {
    console.log("ocurrio un error con mi api");
  }
}

// MUESTRA EVENTOS FILTRADOS
function displayEvents(eventOs) {
  let eventList = document.getElementById("cardholder");
  let fragment = document.createDocumentFragment();

  // BORRAR LISTA DE CARDS
  eventList.innerHTML = "";

  if (eventOs.length == 0) {
    let mensaje = document.createElement("div");
    mensaje.innerHTML = `<p> no hay resultados. Modifique los filtros </p>`;
    eventList.appendChild(mensaje);
  } else {
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
}

// FILTROS

// Busca/Filtra los eventos segun la busqueda
function searchEvents() {
  let textoBusqueda = search.value.toLowerCase();
  // console.log(textoBusqueda);
  let checked = getChequeados();
let filteredEvents = pastEvents.filter((event) => {
  let nameMatch = event.name.toLowerCase().includes(textoBusqueda);
  let descriptionMatch = event.description
    .toLowerCase()
    .includes(textoBusqueda);
  if (nameMatch || descriptionMatch) {
    return true;
  }
  return false;
});
    if (checked.length > 0) {
        filteredEvents = filteredEvents.filter(event => {
          return checked.some((check) => event.category.includes(check));
        });
  }
  ;
  displayEvents(filteredEvents);
}

//   // Filtra los eventos segun la categoría
//   function updateEvents() {
//     // Creo un array con los values de los checked
//     const selectedCategories = Array.from(categoryCheckboxes)
//       .filter(function (checkbox) {
//         return checkbox.checked;
//       })
//       .map(function (checkbox) {
//         return checkbox.value;
//       });

//     const filteredEvents = events.filter(function (event) {
//       return selectedCategories.includes(event.category);
//     });

//     displayEvents(filteredEvents);
// }
  
function createCheckboxes(categories) {
  // Creo los checkbox por categoría
  let cat = document.getElementById("cat");
  for (let category of categories) {
    let categorizador = `<div class="col" id="fullcheck">
                                <input type="checkbox" name="category" id="${category}" value="${category}">
                                <label for="${category}" class="checkbox-inline">${category}</label>
                            </div>`;
    cat.innerHTML += categorizador;
  }
}

function getChequeados() {
  let chequeados = [];
  categoryCheckboxes.forEach((checkbox) => {
    if (checkbox.checked) {
      chequeados.push(checkbox.value);
    }
  });
  console.log(chequeados);
  return chequeados;
}