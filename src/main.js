import "@babel/polyfill";
import "mutationobserver-shim";
import Vue from "vue";
import "./plugins/bootstrap-vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import {
  updateFirebaseFromModel,
  updateModelFromFirebase,
} from "./firebaseModel";
import firebaseConfig from "../firebase.config";
import VueCompositionAPI from "@vue/composition-api";
Vue.use(VueCompositionAPI);
Vue.config.productionTip = false;

firebase.initializeApp(firebaseConfig);

firebase.auth().onAuthStateChanged((user) => {
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
