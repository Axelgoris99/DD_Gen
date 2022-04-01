import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    count: 0,
  },
  computed: {
    count() {
      return store.state.count;
    },
  },
  mutations: {
    increment(state) {
      state.count++;
    },
  },
});
export default store;
