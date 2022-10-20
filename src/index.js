//Estilos
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/app.css";

//Servicios de Firebase
import "./services/firebase.js";
import "./services/firestore.js";
import router from "./router/router.js";

//Inicializar App de VUE
import { createApp } from "vue";
import App from "./App.vue";

const app = createApp(App);

app.use(router);
app.mount("#app");