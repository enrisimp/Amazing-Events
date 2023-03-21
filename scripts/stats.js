console.log("test");
let urlAPI = "https://mindhub-xj03.onrender.com/api/amazing";
// let urlAPI = "./assets/api.json";

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
  } catch (error) {
    console.log(error.message);
  }
}
// usage
getData().then((data) => {

  // Preparar Arrays
  events = data.events;
  // console.log(events);
  for (let evento of events) {
    if (data.currentDate < evento.date) {
      // Calculo porcentaje de asistencia y recaudación individual
      evento.percentage = (evento.estimate / evento.capacity) * 100;
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
      // console.log(evento.percentage);
      // console.log(evento.revenues);
    } else {
      // Calculo porcentaje de asistencia y recaudación individual
      evento.percentage = (evento.assistance / evento.capacity) * 100;
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
      // console.log(evento.percentage);
      // console.log(evento.revenues);
    }
  }
  // console.log(Pcategory);
  // console.log(Ucategory);
  // console.log(pastEvents);
  // console.log(upcomingEvents);

  // Render + calculos Mayores y menores
  createTable();
});

function getHigh(eventos) {
  return eventos.reduce((acumulador, valorActual) => {
    if (valorActual.percentage > acumulador.percentage) {
      return valorActual;
    } else {
      return acumulador;
    }
  });
}

function getLow(eventos) {
  return eventos.reduce((acumulador, valorActual) => {
    if (valorActual.percentage < acumulador.percentage) {
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

function createTable() {
  let table = document.getElementById("table");
  // console.log(table);

  // Paso las categorias a objetos con propiedades
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

  // Consigo los mayores y menores
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
  
  // Bt Upcoming Category
  table.innerHTML += `<tr>
                  <th colspan="3" id="upcoming">Upcoming events statistics by category</th>
              </tr>
              <tr>
                  <td>Categories</td>
                  <td>Revenues</td>
                  <td>Porcentage of attendance</td>
              </tr>`;

  resumenCategoria(UcategoryO, upcomingEvents);

  //// By Past Category
  table.innerHTML += `<tr>
                    <th colspan="3" id="past">Past events statistics by category</th>
                </tr>
                <tr>
                    <td>Categories</td>
                    <td>Revenues</td>
                    <td>Porcentage of attendance</td>
                </tr>`;
  
  resumenCategoria(PcategoryO, pastEvents);
  
}
function resumenCategoria(categoryO, eventC) {
  // Calculos x categoria
  for (let cat of categoryO) {
    // console.log(cat);
    for (let evento of eventC) {
      if (cat.name == evento.category) {
        cat.revenues += evento.revenues;
        if (evento.estimate > 0) {
          cat.attendance += evento.estimate;  
        } else {
          cat.attendance += evento.assistance;
        }
        cat.capacity += evento.capacity;
        console.log(cat, evento.name);
      }
    }
    cat.percentage = (cat.attendance / cat.capacity) * 100;
    dibujarCategoria(cat);
  }
}


function dibujarCategoria(cat){
  table.innerHTML += ` <tr>
                    <td>${cat.name}</td>
                    <td>$ ${cat.revenues}</td>
                    <td>${Math.round(cat.percentage)} %</td>
                </tr>`;
};

