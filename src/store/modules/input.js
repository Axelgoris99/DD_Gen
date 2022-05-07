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
    SET_NAME(state, name) {
      Vue.set(state, "name", name);
    },
    SET_GENDER(state, gender) {
      Vue.set(state, "gender", gender);
    },
    SET_RACE(state, race) {
      Vue.set(state, "race", race);
    },
    SET_CLASS(state, c) {
      Vue.set(state, "class", c);
    },
    SET_BACKGROUND(state, background) {
      Vue.set(state, "background", background);
    },
    SET_ALIGNMENT(state, alignment) {
      Vue.set(state, "alignment", alignment);
    },
    ADD_LANGUAGE(state, language) {
      if (
        state.languages.filter((l) => l.index === language.index).length === 0
      ) {
        Vue.set(state, "languages", [...state.languages, language]);
      }
    },
    REMOVE_LANGUAGE(state, language) {
      state.languages = state.languages.filter((l) => l.index !== language);
    },
    CLEAR_LANGUAGES(state) {
      state.languages = state.languages.splice(0);
    },
    ADD_TRAIT(state, trait) {
      if (state.traits.filter((t) => t.index === trait.index).length === 0) {
        Vue.set(state, "traits", [...state.traits, trait]);
      }
    },
    REMOVE_TRAIT(state, trait) {
      state.traits = state.traits.filter((t) => t.index !== trait);
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
      commit("SET_NAME", name);
    },
    unsetName({ commit }) {
      commit("SET_NAME", null);
    },
    setGender({ commit }, gender) {
      commit("SET_GENDER", gender);
    },
    setRace({ commit }, race) {
      commit("SET_RACE", race);
    },
    unsetRace({ commit }) {
      commit("SET_RACE", null);
    },
    setClass({ commit }, c) {
      commit("SET_ClASS", c);
    },
    unsetClass({ commit }) {
      commit("SET_CLASS", null);
    },
    setBackground({ commit }, background) {
      commit("SET_BACKGROUND", background);
    },
    unsetBackground({ commit }) {
      commit("SET_BACKGROUND", null);
    },
    setAlignment({ commit }, alignment) {
      commit("SET_ALIGNMENT", alignment);
    },
    unsetAlignment({ commit }) {
      commit("SET_ALIGNMENT", null);
    },
    addLanguage({ commit }, lang) {
      commit("ADD_LANGUAGE", lang);
    },
    removeLanguage({ commit }, lang) {
      commit("REMOVE_LANGUAGE", lang);
    },
    clearLanguages({ commit }) {
      commit("CLEAR_LANGUAGES");
    },
    addTrait({ commit }, trait) {
      commit("ADD_TRAIT", trait);
    },
    removeTrait({ commit }, trait) {
      commit("REMOVE_TRAIT", trait);
    },
    clearTraits({ commit }) {
      commit("CLEAR_TRAITS");
    },
  },
};
