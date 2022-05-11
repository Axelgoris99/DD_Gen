import "@babel/polyfill";
import "mutationobserver-shim";
import Vue from "vue";
import "./plugins/bootstrap-vue";
import App from "./presenter/App";
import router from "./router";
import store from "./store";
import { auth } from "./firebase";
import VueCompositionAPI from "@vue/composition-api";
Vue.use(VueCompositionAPI);
Vue.config.productionTip = false;

auth.onAuthStateChanged((user) => {
  store.dispatch("auth/fetchUser", user);
});

store.subscribe((mutation, state) => {
  // Store the state object as a JSON string
  localStorage.setItem("store", JSON.stringify(state));
});

new Vue({
  router,
  store,
  render: (h) => h(App),
  beforeCreate() {
    this.$store.commit("initialiseStore");
  },
}).$mount("#app");
