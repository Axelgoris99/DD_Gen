import Vue from "vue";
import Vuex from "vuex";
import auth from "./modules/auth";
import options from "./modules/options";

Vue.use(Vuex);

const store = new Vuex.Store({
  strict: true,
  modules: {
    auth,
    options,
  },
});
export default store;
