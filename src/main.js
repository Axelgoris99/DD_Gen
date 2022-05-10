import "@babel/polyfill";
import "mutationobserver-shim";
import Vue from "vue";
import "./plugins/bootstrap-vue";
import App from "./presenter/App";
import router from "./router";
import store from "./store";
import {
  updateFirebaseFromModel,
  updateModelFromFirebase,
} from "./firebaseModel";
import { auth } from "./firebase";
import VueCompositionAPI from "@vue/composition-api";
Vue.use(VueCompositionAPI);
Vue.config.productionTip = false;

auth.onAuthStateChanged((user) => {
  store.dispatch("auth/fetchUser", user);
  var unsubscribe;
  if (user) {
    updateModelFromFirebase(store);
    unsubscribe = store.subscribe((mutation) => {
      if (mutation.payload) {
        updateFirebaseFromModel(mutation.payload);
      }
    });
  } else {
    unsubscribe();
  }
});

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
