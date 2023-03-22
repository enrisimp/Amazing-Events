console.log("test");

let urlAPI = "https://mindhub-xj03.onrender.com/api/amazing";
// let urlAPI = "./api.json";
const { createApp } = Vue;

const app = createApp({
  data() {
    return {
      urlApi: "https://mindhub-xj03.onrender.com/api/amazing",
      events: [],
      backupEventos: [],
      textoBusqueda: "",
      categories: [],
      checked: [],
    };
  },
  created() {
    this.traerDatos();
  },
  methods: {
    traerDatos() {
      fetch(this.urlApi)
        .then((response) => response.json())
        .then((data) => {
          this.events = data.events;
          this.backupEventos = this.events;
          this.extraerCategorys(this.events);
        })
        .catch((error) => console.log(error.message));
    },
    extraerCategorys(array) {
      array.forEach((elemento) => {
        if (!this.categories.includes(elemento.category)) {
          this.categories.push(elemento.category);
        }
      });
    },
  },
  computed: {
    filtroDoble() {
      let primerFiltro = this.backupEventos.filter((evento) =>
        evento.name.toLowerCase().includes(this.textoBusqueda.toLowerCase())
      );
      if (this.checked.length > 0) {
        return primerFiltro.filter((evento) =>
          this.checked.includes(evento.category)
        );
      } else {
        return primerFiltro;
      }
    },
  },
});

app.mount("#app");