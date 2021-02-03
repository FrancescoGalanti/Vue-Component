import Vue from "vue";
import App from "./App.vue";
import AxiosPlugin from "./plugin/AxiosPlugin";

Vue.use(AxiosPlugin);

Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount("#app");
