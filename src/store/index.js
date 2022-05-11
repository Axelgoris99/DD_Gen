import Vue from "vue";
import Vuex from "vuex";
import auth from "./modules/auth";
import options from "./modules/options";
import input from "./modules/input";
import current from "./modules/current";
import loader from "./modules/loader";

Vue.use(Vuex);

const store = new Vuex.Store({
  strict: true,
  modules: {
    auth,
    options,
    input,
    current,
    loader,
  },
  mutations: {
    initialiseStore(state) {
      // Check if the ID exists
      if (localStorage.getItem("store")) {
        // Replace the state object with the stored item
        this.replaceState(
          Object.assign(state, JSON.parse(localStorage.getItem("store")))
        );
      }
    },
  },
});
export default store;
