import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import axios from "./backend/vue-axios";
import "./main.css";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  axios,
  render: h => h(App)
}).$mount("#app");