console.log("test");
let urlAPI = "https://mindhub-xj03.onrender.com/api/amazing";
// let urlAPI = "./api.json";

let Pcategory = [];
let Ucategory = [];
let upcomingEvents = [];
let pastEvents = [];
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
// usage
getData().then((data) => {
  events = data.events;
  // console.log(events);
  for (let evento of events) {
    if (data.currentDate < evento.date) {
      // porcentaje de asistencia
      evento.attendance = (evento.estimate / evento.capacity) * 100;
      // evento.attendance = evento.attendance.toFixed(2);
      Ucategory.push({
        category: evento.category,
        attendance: 0,
        capacity: 0,
        percentage: 0,
      });
      upcomingEvents.push(evento);
    } else {
      // porcentaje de asistencia
      evento.attendance = (evento.assistance / evento.capacity) * 100;
      // evento.attendance = evento.attendance.toFixed(2);
      Pcategory.push({
        category: evento.category,
        attendance: 0,
        capacity: 0,
        percentage: 0,
      });
      pastEvents.push(evento);
      // console.log(evento.attendance);
    }
  }
  // console.log(Pcategory);
  // console.log(Ucategory);
  // console.log(pastEvents);
  // console.log(upcomingEvents);

  for (let cat of Pcategory) {
    // console.log(cat);
    for (let evento of pastEvents) {
      if (cat.category == evento.category) {
        cat.attendance += evento.assistance;
        cat.capacity += evento.capacity;
      }
    }
    cat.percentage = (cat.attendance / cat.capacity) * 100;
  }
  // console.log(Pcategory);

  for (let cat of Ucategory) {
    // console.log(cat);
    for (let evento of upcomingEvents) {
      if (cat.category == evento.category) {
        cat.attendance += evento.estimate;
        cat.capacity += evento.capacity;
      }
    }
    cat.percentage = (cat.attendance / cat.capacity) * 100;
  }
  // console.log(Ucategory);

  for (let categoria of events) {
    console.log(categoria);
  }
});
