console.log("test detail");
let urlAPI = "https://mindhub-xj03.onrender.com/api/amazing";
const queryString = location.search;
const urlParams = new URLSearchParams(queryString);

let id = urlParams.get("id");
console.log("test id " + id);


// usage
getData().then((data) => {
  console.dir(data.events);
  let events = data.events;
  console.log(events);
  console.log("test array " + events);
  console.log(events.find(evento => evento._id == id));
  let detail = events.find((evento) => evento._id == id);
  console.log(detail);

  let detcards = document.getElementById("carddeatail");
  // console.log(detcards);

  detcards.innerHTML = `<div class="event-card">
                            <img src="${detail.image}" alt="image.detail">
                            <div class="event-info">
                            <p class="card-text m-0">${detail.date}</p>
                                <h2 class="card-title my-3">${detail.name}</h2>
                                <p class="card-text m-0">${detail.category}</p>
                                <p class="card-text m-0">${
                                  detail.description
                                }</p>
                                <div class="row card-footer center">
                                  <div class="col">
                                          <p class="card-text"><small class="text-muted">Capacity: ${
                                            detail.capacity
                                          }</small></p>
                                      </div>
                                      <div class="col">
                                          <p class="card-text"><small class="text-muted"> assistance: ${ detail.assistance || detail.estimate} </small ></p >
                                      </div>
                                </div>
                                <div class="row card-footer center">
                                    <div class="col">
                                        <p class="card-text"><small class="text-muted">Price: $${
                                          detail.price
                                        }</small></p>
                                    </div>
                                    <div class="col">
                                        <p class="card-text"><small class="text-muted">Place: ${
                                          detail.place
                                        }</small></p>
                                    </div>
                                </div>
                          </div>
                    </div>`;
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