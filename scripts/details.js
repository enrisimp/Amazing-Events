const queryString = window.location.search;
console.log(queryString);

const urlParams = new URLSearchParams(queryString);

let id = urlParams.get("id");
console.log(id);

console.log("test id " + all);
console.log("test find " + all.filter(x => x._id === id));
let detail = all.filter(x => x._id === id);
console.log(detail);

let detcards = document.getElementById("carddeatail");
console.log(cards);

 htmlCard = `<div class="row border p-4 ">
                        <div class="col-sm-5">
                            <img src="./assets/Music_Concert.jpg" class="card-img-top" alt="musicconcert">
                        </div>
                        <div class="col-sm-7 center">
                            <div class="card-body details">
                                <h5 class="card-title my-3">Titulo</h5>
                                <p class="card-text m-0">lorem*20</p>
                                <p class="card-text m-0">Texto Descriptivo</p>
                                <p class="card-text m-0">Texto Descriptivo</p>
                            </div>
                        </div>
                    </div>`;
  detcards.innerHTML += htmlCard;
                    