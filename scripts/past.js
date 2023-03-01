console.log("test");

events = data.events;
let cards = document.getElementById("cardholder");
console.log(cards);
let fragment = document.createDocumentFragment();

for (let evento of events) {
  if (data.currentDate > evento.date) {
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
                                        <a href="./details.html" class="btn btn-primary">Ver mas</a>
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
    //                                     <a href="./details.html" class="btn btn-primary">Ver mas</a>
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

categoria = [];
for (let evento of events) {
  console.log("el categoria es " + evento.category);
  categoria.push(evento.category);
  console.log(categoria);
}
console.log(categoria);
let x = (categoria) => categoria.filter((v, i) => categoria.indexOf(v) === i);
let filtra = x(categoria);
document.write(filtra);
console.log(filtra);

let cat = document.getElementById("cat");
let categorizador = `<div class="form-check d-flex flex-row category">
                        <div class="col">
                            <input type="checkbox" name="${filtra[0]}" id="category1" value="1">
                            <label for="category1">${filtra[0]}</label>
                        </div>
                        <div class="col">
                            <input type="checkbox" name="${filtra[1]}" id="category2" value="2">
                            <label for="category2">${filtra[1]}</label>
                        </div>
                        <div class="col">
                            <input type="checkbox" name="${filtra[2]}" id="category3" value="3">
                            <label for="category3">${filtra[2]}</label>
                        </div>
                        <div class="col">
                            <input type="checkbox" name="${filtra[3]}" id="category4" value="4">
                            <label for="category4">${filtra[3]}</label>
                        </div>
                        <div class="col">
                            <input type="checkbox" name="${filtra[4]}" id="category5" value="5">
                            <label for="category5">${filtra[4]}</label>
                        </div>
                        <div class="col">
                            <input type="checkbox" name="${filtra[5]}" id="category5" value="6">
                            <label for="category5">${filtra[5]}</label>
                        </div>
                        <div class="col">
                            <input type="checkbox" name="${filtra[6]}" id="category5" value="7">
                            <label for="category5">${filtra[6]}</label>
                        </div>
                    </div>`;
cat.innerHTML = categorizador;