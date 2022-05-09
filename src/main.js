import "@babel/polyfill";
import "mutationobserver-shim";
import Vue from "vue";
import "./plugins/bootstrap-vue";
import App from "./presenter/App";
import router from "./router";
import store from "./store";
import { auth } from "./firebase";
import VueCompositionAPI from "@vue/composition-api";
import AsyncComputed from "vue-async-computed";
Vue.use(VueCompositionAPI);
Vue.use(AsyncComputed);
Vue.config.productionTip = false;

auth.onAuthStateChanged((user) => {
  store.dispatch("auth/fetchUser", user);
});

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
