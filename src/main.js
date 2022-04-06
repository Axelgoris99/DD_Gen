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

Vue.config.productionTip = false;

const firebaseConfig = {
  apiKey: "AIzaSyAWcaKc1vf-tzZbXgwdm1CXTWjYrbTN4Gk",
  authDomain: "dd-gen.firebaseapp.com",
  projectId: "dd-gen",
  storageBucket: "dd-gen.appspot.com",
  messagingSenderId: "855834182893",
  appId: "1:855834182893:web:90fa684de54dd1f0f838e4",
};

firebase.initializeApp(firebaseConfig);

firebase.auth().onAuthStateChanged((user) => {
  store.dispatch("auth/fetchUser", user);
});

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
