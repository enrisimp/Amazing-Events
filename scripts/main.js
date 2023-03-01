console.log("test");

var data = {
  currentDate: "2022-01-01",
  events: [
    {
      _id: 1,
      image: "https://i.postimg.cc/Fs03hQDt/Collectivities-Party.jpg",
      name: "Collectivities Party",
      date: "2021-12-12",
      description:
        "Enjoy your favourite dishes, from different countries, in a unique event for the whole family.",
      category: "Food Fair",
      place: "Room A",
      capacity: 45000,
      assistance: 42756,
      price: 5,
    },
    {
      _id: 2,
      image: "https://i.postimg.cc/ZmD3Xf57/Korean-style.jpg",
      name: "Korean style",
      date: "2022-08-12",
      description:
        "Enjoy the best Korean dishes, with international chefs and awesome events.",
      category: "Food Fair",
      place: "Room A",
      capacity: 45000,
      assistance: 42756,
      price: 10,
    },
    {
      _id: 3,
      image: "https://i.postimg.cc/GmHRkbNV/Jurassic-Park.jpg",
      name: "Jurassic Park",
      date: "2021-11-02",
      description:
        "Let's go meet the biggest dinosaurs in the paleontology museum.",
      category: "Museum",
      place: "Field",
      capacity: 82000,
      assistance: 65892,
      price: 15,
    },
    {
      _id: 4,
      image: "https://i.postimg.cc/c4C2zXm8/Parisian-Museum.jpg",
      name: "Parisian Museum",
      date: "2022-11-02",
      description:
        "A unique tour in the city of lights, get to know one of the most iconic places.",
      category: "Museum",
      place: "Paris",
      capacity: 8200,
      estimate: 8200,
      price: 3500,
    },
    {
      _id: 5,
      image: "https://i.postimg.cc/KYD0jMf2/comicon.jpg",
      name: "Comicon",
      date: "2021-02-12",
      description:
        "For comic lovers, all your favourite characters gathered in one place.",
      category: "Costume Party",
      place: "Room C",
      capacity: 120000,
      assistance: 110000,
      price: 54,
    },
    {
      _id: 6,
      image: "https://i.postimg.cc/RZ9fH4Pr/halloween.jpg",
      name: "Halloween Night",
      date: "2022-02-12",
      description: "Come with your scariest costume and win incredible prizes.",
      category: "Costume Party",
      place: "Room C",
      capacity: 12000,
      estimate: 9000,
      price: 12,
    },
    {
      _id: 7,
      image: "https://i.postimg.cc/PrMJ0ZMc/Metallica-in-concert.jpg",
      name: "Metallica in concert",
      date: "2022-01-22",
      description: "The only concert of the most emblematic band in the world.",
      category: "Music Concert",
      place: "Room A",
      capacity: 138000,
      estimate: 138000,
      price: 150,
    },
    {
      _id: 8,
      image: "https://i.postimg.cc/KvsSK8cj/Electronic-Fest.jpg",
      name: "Electronic Fest",
      date: "2021-01-22",
      description:
        "The best national and international DJs gathered in one place.",
      category: "Music Concert",
      place: "Room A",
      capacity: 138000,
      assistance: 110300,
      price: 250,
    },
    {
      _id: 9,
      image: "https://i.postimg.cc/fyLqZY9K/10-K-for-life.jpg",
      name: "10K for life",
      date: "2021-03-01",
      description: "Come and exercise, improve your health and lifestyle.",
      category: "Race",
      place: "Soccer field",
      capacity: 30000,
      assistance: 25698,
      price: 3,
    },
    {
      _id: 10,
      image: "https://i.postimg.cc/zv67r65z/15kny.jpg",
      name: "15K NY",
      date: "2022-03-01",
      description:
        "We'll be raising funds for hospitals and medical care in this unique event held in The Big Apple.",
      category: "Race",
      place: "New York",
      capacity: 3000000,
      assistance: 2569800,
      price: 3,
    },
    {
      _id: 11,
      image: "https://i.postimg.cc/Sst763n6/book1.jpg",
      name: "School's book fair",
      date: "2022-10-15",
      description: "Bring your unused school book and take the one you need.",
      category: "Book Exchange",
      place: "Room D1",
      capacity: 150000,
      estimate: 123286,
      price: 1,
    },
    {
      _id: 12,
      image: "https://i.postimg.cc/05FhxHVK/book4.jpg",
      name: "Just for your kitchen",
      date: "2021-11-09",
      description:
        "If you're a gastronomy lover come get the cookbook that best suits your taste and your family's.",
      category: "Book Exchange",
      place: "Room D6",
      capacity: 130000,
      assistance: 90000,
      price: 100,
    },
    {
      _id: 13,
      image: "https://i.postimg.cc/vH52y81C/cinema4.jpg",
      name: "Batman",
      date: "2021-03-11",
      description: "Come see Batman fight crime in Gotham City.",
      category: "Cinema",
      place: "Room D1",
      capacity: 11000,
      assistance: 9300,
      price: 225,
    },
    {
      _id: 14,
      image: "https://i.postimg.cc/T3C92KTN/scale.jpg",
      name: "Avengers",
      date: "2022-10-15",
      description:
        "Marvel's Avengers Premier in 3d, the start of an epic saga with your favourite superheroes.",
      category: "Cinema",
      place: "Room D1",
      capacity: 9000,
      estimate: 9000,
      price: 250,
    },
  ],
};

console.log((events = data.events));
console.log((nevents = events.length));
// console.log(events);
upcomingEvents = [];
pastEvents = [];

// for (let i = 0; i < nevents; i++){
//     console.log("el nombre es " + events[i].name);
//     if (data.currentDate > events[i].date) {
//         console.log("Pasado " + events[i].date);
//         pastEvents.push(events[i]);
//     } else {
//         console.log("Futuro " + events[i].date);
//         upcomingEvents.push(events[i]);
//     }
// }

// for (let evento of data.events) {
//   console.log("el nombre es " + evento.name);
//   if (data.currentDate > evento.date) {
//          console.log("Pasado " + evento.date);
//          pastEvents.push(evento);
//      } else {
//          console.log("Futuro " + evento);
//          upcomingEvents.push(evento);
//      }
//   }

// console.log("Upcoming events " + upcomingEvents);
// for (let event in upcomingEvents) {
//     card = {
//         img: upcomingEvents[event].image,
//         title: upcomingEvents[event].name,
//         text: upcomingEvents[event].description,
//         price: upcomingEvents[event].price,
//         id: upcomingEvents[event]._id
//     };
//       console.log("Card " + event + " " + Object.entries(card));
//   for (let datos in card) {
//     console.log(datos + " - " + card[datos]);
//   }
//   console.table(card);
//   // document.write(Object.entries(card));
//   console.log("Card " + event + " " + Object.entries(card));
// }

// console.log("Past Events " + pastEvents);
// for (let event in pastEvents) {
//   card = {
//     img: upcomingEvents[event].image,
//     title: upcomingEvents[event].name,
//     text: upcomingEvents[event].description,
//     price: upcomingEvents[event].price,
//     id: upcomingEvents[event]._id,
//   };
//   console.log("Card " + event + " " + Object.entries(card));
//   for (let datos in card) {
//     console.log(datos + " - " + card[datos]);
//   }
//   console.table(card);
//   // document.write(Object.entries(card));
// }

categoria = [];
for (let evento of events) {
  console.log("el categoria es " + evento.category);
  categoria.push(evento.category);
  console.log(categoria);
}
console.log(categoria);
let x = (categoria) => categoria.filter((v, i) => categoria.indexOf(v) === i);
document.write(categoria);
let filtra = x(categoria);
document.write(filtra);
console.log(filtra);
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
document.innerHTML = categorizador;
document.write(categorizador);
