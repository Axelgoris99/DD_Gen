export default {
  namespaced: true,
  state: {
    loading: false,
    requestsPending: 0,
    error: false,
  },
  actions: {
    show({ commit }) {
      commit("SET_SHOW");
    },
    hide({ commit }) {
      commit("SET_HIDE");
    },
    pending({ commit }) {
      commit("SET_PENDING");
    },
    done({ commit }) {
      commit("SET_DONE");
    },
    error({ commit }) {
      commit("SET_ERROR");
    },
  },
  mutations: {
    SET_SHOW(state) {
      state.loading = true;
    },
    SET_HIDE(state) {
      state.loading = false;
    },

    SET_PENDING(state) {
      if (state.requestsPending === 0) {
        this.commit("loader/SET_SHOW");
      }

      state.requestsPending++;
    },
    SET_DONE(state) {
      if (state.requestsPending >= 1) {
        state.requestsPending--;
      }

      if (state.requestsPending <= 0) {
        this.commit("loader/SET_HIDE");
      }
    },
    SET_ERROR(state) {
      state.error = true;
    },
  },
};
