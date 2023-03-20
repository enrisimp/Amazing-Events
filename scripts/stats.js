console.log("test");
// let urlAPI = "https://mindhub-xj03.onrender.com/api/amazing";
let urlAPI = "./assets/api.json";

let upcomingEvents = [];
let pastEvents = [];
let Pcategory = [];
let Ucategory = [];
let PcategoryO = [];
let UcategoryO = [];
    
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
      evento.revenues = evento.estimate * evento.price;
      if (!Ucategory.includes(evento.category)) {
        Ucategory.push(evento.category);
        // Ucategory.push({
        //   category: evento.category,
        //   revenues: 0,
        //   attendance: 0,
        //   capacity: 0,
        //   percentage: 0,
        // });
      }
      upcomingEvents.push(evento);
    } else {
      // porcentaje de asistencia
      evento.attendance = (evento.assistance / evento.capacity) * 100;
      evento.revenues = evento.assistance * evento.price;
      if (!Pcategory.includes(evento.category)) {
        Pcategory.push(evento.category);
        // Pcategory.push({
        //   category: evento.category,
        //   revenues: 0,
        //   attendance: 0,
        //   capacity: 0,
        //   percentage: 0,
        // });
      }
      pastEvents.push(evento);
      // console.log(evento.attendance);
    }
  }
  const PcategoryO = Pcategory.map((category) => {
    return {
      name: category,
      revenues: 0,
      attendance: 0,
      capacity: 0,
      percentage: 0,
    };
  });

  const UcategoryO = Ucategory.map((category) => {
    return {
      name: category,
      revenues: 0,
      attendance: 0,
      capacity: 0,
      percentage: 0,
    };
  });
  console.log(PcategoryO);
  console.log(UcategoryO);
  console.log(pastEvents);
  console.log(upcomingEvents);

  // Render + calculos Moyores y menores

  let table = document.getElementById("table");
  // console.log(table);
  let hightest = getHigh(pastEvents);
  let lowest = getLow(pastEvents);
  let largest = getLarge(events);
  // console.log(lowest);
  // console.log(hightest);
  // console.log(largest);
   table.innerHTML += `<tr>
      <td>${hightest.name}</td>
      <td>${lowest.name}</td>
      <td>${largest.name}</td>
                </tr>`;

  // Render + calculos x categoria
  // let table = document.getElementById("table");
  // console.log(table);
  table.innerHTML += `<tr>
                    <th colspan="3" id="upcoming">Upcoming events statistics by category</th>
                </tr>
                <tr>
                    <td>Categories</td>
                    <td>Revenues</td>
                    <td>Porcentage of attendance</td>
                </tr>`;
  for (let cat of UcategoryO) {
    // console.log(cat);
    for (let evento of upcomingEvents) {
      if (cat.name == evento.category) {
        cat.revenues += evento.revenues;
        cat.attendance += evento.estimate;
        cat.capacity += evento.capacity;
      }
      // console.log(cat);
    }
    cat.percentage = (cat.attendance / cat.capacity) * 100;
    table.innerHTML += ` <tr>
                    <td>${cat.name}</td>
                    <td>$ ${cat.revenues}</td>
                    <td>${Math.round(cat.percentage)} %</td>
                </tr>`;
  }
  // console.log(filtraUcategory);

  //// By Past Category
  table.innerHTML += `<tr>
                    <th colspan="3" id="past">Past events statistics by category</th>
                </tr>
                <tr>
                    <td>Categories</td>
                    <td>Revenues</td>
                    <td>Porcentage of attendance</td>
                </tr>`;
  for (let cat of PcategoryO) {
    // console.log(cat);
    for (let evento of pastEvents) {
      if (cat.name == evento.category) {
        cat.attendance += evento.assistance;
        cat.revenues += evento.revenues;
        cat.capacity += evento.capacity;
      }
    }
    cat.percentage = (cat.attendance / cat.capacity) * 100;
    table.innerHTML += ` <tr>
                    <td>${cat.name}</td>
                    <td>$ ${cat.revenues}</td>
                    <td>${Math.round(cat.percentage)} %</td>
                </tr>`;
  }
  // console.log(filtraPcategory);
  // for (let categoria of events) {
  //   console.log(categoria);
  // }
});

function getHigh(eventos) {
  return eventos.reduce((acumulador, valorActual) => {
    if (valorActual.attendance > acumulador.attendance) {
      return valorActual;
    } else {
      return acumulador;
    }
  });
}

function getLow(eventos) {
  return eventos.reduce((acumulador, valorActual) => {
    if (valorActual.attendance < acumulador.attendance) {
      return valorActual;
    } else {
      return acumulador;
    }
  });
}

function getLarge(eventos) {
  return eventos.reduce((acumulador, valorActual) => {
    if (valorActual.capacity > acumulador.capacity) {
      return valorActual;
    } else {
      return acumulador;
    }
  });
}

