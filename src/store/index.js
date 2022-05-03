import Vue from "vue";
import Vuex from "vuex";
import auth from "./modules/auth";
import options from "./modules/options";
import characters from "./modules/characters";
import firebase from "../../firebase.config";

Vue.use(Vuex);
Vue.use(firebase);

const store = new Vuex.Store({
  strict: true,
  modules: {
    auth,
    options,
    characters,
  },
});
export default store;
