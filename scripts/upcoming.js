console.log("test");

events = data.events;
let cards = document.getElementById("cardholder");
console.log(cards);
let fragment = document.createDocumentFragment();

for (let evento of events) {
  if (data.currentDate < evento.date) {
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