console.log("test");

events = data.events;
let cards = document.getElementById("cardholder");
console.log(cards);
let fragment = document.createDocumentFragment();
let pastEvents = [];

for (let evento of events) {
    if (data.currentDate > evento.date) {
      pastEvents.push(evento);
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
    fragment.appendChild(card);
  }
}
// cards.innerHTML = htmlCards;
cards.appendChild(fragment);
console.log(pastEvents);

categoria = [];
for (let evento of events) {
//   console.log("el categoria es " + evento.category);
  categoria.push(evento.category);
//   console.log(categoria);
}
console.log(categoria);
let x = (categoria) => categoria.filter((v, i) => categoria.indexOf(v) === i);
let filtra = x(categoria);
document.write(filtra);
// console.log(filtra);

let cat = document.getElementById("cat");
for (let category of filtra) {
    let categorizador = `<div class="col">
                                <input type="checkbox" name="${category}" id="${category}" value="${category}" checked>
                                <label for="${category}" class="checkbox-inline">${category}</label>
                            </div>`;
    cat.innerHTML += categorizador;
                          

}
// cat.innerHTML = categorizador;