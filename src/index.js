//Estilos
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.js";
import "./css/app.css";
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
library.add(fas);

//Servicios de Firebase
import "./services/firebase.js";
import "./services/firestore.js";
import router from "./router/router.js";

//Inicializar App de VUE
import { createApp } from "vue";
import App from "./App.vue";

const app = createApp(App);

app.use(router);
app.component('font-awesome-icon', FontAwesomeIcon)
app.mount("#app");