console.log("test");

let urlAPI = "https://mindhub-xj03.onrender.com/api/amazing";
// let urlAPI = "./api.json";

// usage
getData().then((data) => {
  // VARIABLES
  events = data.events;
  let cards = document.getElementById("cardholder");
  // console.log(cards);
  // let fragment = document.createDocumentFragment();
  let upcomingEvents = [];
  categoria = [];

  for (let evento of events) {
    categoria.push(evento.category);
    if (data.currentDate < evento.date) {
      upcomingEvents.push(evento);
    }
  }
  //console.log(upcomingEvents);

  //------CATEGORY ----------
  // busco que no haya categorías repetidas
  let x = (categoria) => categoria.filter((v, i) => categoria.indexOf(v) === i);
  let filtra = x(categoria);
  // document.write(filtra);
  // console.log(filtra);

  // Creo los checkbox por categoría
  let cat = document.getElementById("cat");
  for (let category of filtra) {
    let categorizador = `<div class="col" id="fullcheck">
                                <input type="checkbox" name="category" id="${category}" value="${category}" checked>
                                <label for="${category}" class="checkbox-inline">${category}</label>
                            </div>`;
    cat.innerHTML += categorizador;
  }

  // obtengo los checkbox de categoría
  const categoryCheckboxes = document.querySelectorAll(
    'input[name="category"]'
  );

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

    const filteredEvents = upcomingEvents.filter(function (event) {
      return selectedCategories.includes(event.category);
    });

    displayEvents(filteredEvents);
  }

  // Busca/Filtra los eventos segun la busqueda
  function searchEvents() {
    const searchTerm = search.value.toLowerCase();
    const filteredEvents = upcomingEvents.filter((event) => {
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

  // Inicio de todos los eventos
  displayEvents(upcomingEvents);

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
