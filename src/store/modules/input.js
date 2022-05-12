import Vue from "vue";
export default {
  namespaced: true,
  state: {
    name: null,
    gender: null,
    race: null,
    class: null,
    background: null,
    alignment: null,
    languages: [],
    traits: [],
  },
  mutations: {
    SET_NAME(state, payload) {
      Vue.set(state, "name", payload.input_name);
    },
    SET_GENDER(state, payload) {
      Vue.set(state, "gender", payload.input_gender);
    },
    SET_RACE(state, payload) {
      Vue.set(state, "race", payload.input_race);
    },
    SET_CLASS(state, payload) {
      Vue.set(state, "class", payload.input_class);
    },
    SET_BACKGROUND(state, payload) {
      Vue.set(state, "background", payload.input_background);
    },
    SET_ALIGNMENT(state, payload) {
      Vue.set(state, "alignment", payload.input_alignment);
    },
    ADD_LANGUAGE(state, payload) {
      if (
        state.languages.filter(
          (l) => l.index === payload.input_add_language.index
        ).length === 0
      ) {
        Vue.set(state, "languages", [
          ...state.languages,
          payload.input_add_language,
        ]);
      }
    },
    REMOVE_LANGUAGE(state, payload) {
      state.languages = state.languages.filter(
        (l) => l.index !== payload.input_remove_language
      );
    },
    CLEAR_LANGUAGES(state) {
      state.languages = state.languages.splice(0);
    },
    ADD_TRAIT(state, payload) {
      if (
        state.traits.filter((t) => t.index === payload.input_add_trait.index)
          .length === 0
      ) {
        Vue.set(state, "traits", [...state.traits, payload.input_add_trait]);
      }
    },
    REMOVE_TRAIT(state, payload) {
      state.traits = state.traits.filter(
        (t) => t.index !== payload.input_remove_trait
      );
    },
    CLEAR_TRAITS(state) {
      state.traits = state.traits.splice(0);
    },
  },
  getters: {
    name(state) {
      return state.name;
    },
    race(state) {
      return state.race;
    },
    class(state) {
      return state.class;
    },
    gender(state) {
      return state.gender;
    },
    background(state) {
      return state.background;
    },
    alignment(state) {
      return state.alignment;
    },
    languages(state) {
      return state.languages;
    },
    traits(state) {
      return state.traits;
    },
  },

  actions: {
    setGenerated({ commit }, generated) {
      commit("SET_GENERATED", generated);
    },
    setName({ commit }, name) {
      commit("SET_NAME", { input_name: name });
    },
    unsetName({ commit }) {
      commit("SET_NAME", { input_name: null });
    },
    setGender({ commit }, gender) {
      commit("SET_GENDER", { input_gender: gender });
    },
    unsetGender({ commit }) {
      commit("SET_GENDER", { input_gender: null });
    },
    setRace({ commit }, race) {
      commit("SET_RACE", { input_race: race });
    },
    unsetRace({ commit }) {
      commit("SET_RACE", { input_race: null });
    },
    setClass({ commit }, c) {
      commit("SET_CLASS", { input_class: c });
    },
    unsetClass({ commit }) {
      commit("SET_CLASS", { input_class: null });
    },
    setBackground({ commit }, background) {
      commit("SET_BACKGROUND", { input_background: background });
    },
    unsetBackground({ commit }) {
      commit("SET_BACKGROUND", { input_background: null });
    },
    setAlignment({ commit }, alignment) {
      commit("SET_ALIGNMENT", { input_alignment: alignment });
    },
    unsetAlignment({ commit }) {
      commit("SET_ALIGNMENT", { input_alignment: null });
    },
    addLanguage({ commit }, lang) {
      commit("ADD_LANGUAGE", { input_add_language: lang });
    },
    removeLanguage({ commit }, lang) {
      commit("REMOVE_LANGUAGE", { input_remove_language: lang });
    },
    clearLanguages({ commit }) {
      commit("CLEAR_LANGUAGES");
    },
    addTrait({ commit }, trait) {
      commit("ADD_TRAIT", { input_add_trait: trait });
    },
    removeTrait({ commit }, trait) {
      commit("REMOVE_TRAIT", { input_remove_trait: trait });
    },
    clearTraits({ commit }) {
      commit("CLEAR_TRAITS");
    },
    reset({ dispatch }) {
      dispatch("clearTraits");
      dispatch("clearLanguages");
      dispatch("unsetAlignment");
      dispatch("unsetBackground");
      dispatch("unsetRace");
      dispatch("unsetClass");
      dispatch("unsetName");
      dispatch("unsetGender");
    },
  },
};
