import Vue from "vue";
import dnd5 from "../../api/dnd5eapi";
import open5 from "../../api/open5e";

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
    ADD_TRAIT(state, trait) {
      if (state.traits.filter((t) => t.index === trait.index).length === 0) {
        Vue.set(state, "traits", [...state.traits, trait]);
      }
    },
    REMOVE_TRAIT(state, trait) {
      state.traits = state.traits.filter((t) => t.index !== trait);
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
    setName({ commit }, name) {
      commit("SET_NAME", name);
    },
    unsetName({ commit }) {
      commit("SET_NAME", null);
    },
    setGender({ commit }, gender) {
      commit("SET_GENDER", gender);
    },
    setRace({ commit }, slug) {
      return new Promise((resolve, reject) => {
        dnd5
          .raceGet(slug)
          .then((resp) => {
            commit("SET_RACE", resp.data);
            resolve();
          })
          .catch((error) => reject(error));
      });
    },
    unsetRace({ commit }) {
      commit("SET_RACE", null);
    },

    setClass({ commit }, slug) {
      return new Promise((resolve, reject) => {
        dnd5
          .classGet(slug)
          .then((resp) => {
            commit("SET_CLASS", resp.data);
            resolve();
          })
          .catch((error) => reject(error));
      });
    },

    unsetClass({ commit }) {
      commit("SET_CLASS", null);
    },
    setBackground({ commit }, slug) {
      return new Promise((resolve, reject) => {
        open5
          .backgroundGet(slug)
          .then((resp) => {
            commit("SET_BACKGROUND", resp.data);
            resolve();
          })
          .catch((error) => reject(error));
      });
    },
    unsetBackground({ commit }) {
      commit("SET_BACKGROUND", null);
    },
    setAlignment({ commit }, slug) {
      return new Promise((resolve, reject) => {
        dnd5
          .alignmentGet(slug)
          .then((resp) => {
            commit("SET_ALIGNMENT", resp.data);
            resolve();
          })
          .catch((error) => reject(error));
      });
    },
    unsetAlignment({ commit }) {
      commit("SET_ALIGNMENT", null);
    },
    addLanguage({ commit }, slug) {
      return new Promise((resolve, reject) => {
        dnd5
          .languageGet(slug)
          .then((resp) => {
            commit("ADD_LANGUAGE", resp.data);
            resolve();
          })
          .catch((error) => reject(error));
      });
    },
    removeLanguage({ commit }, lang) {
      commit("REMOVE_LANGUAGE", lang);
    },
    addTrait({ commit }, slug) {
      return new Promise((resolve, reject) => {
        dnd5
          .traitGet(slug)
          .then((resp) => {
            commit("ADD_TRAIT", resp.data);
            resolve();
          })
          .catch((error) => reject(error));
      });
    },
    removeTrait({ commit }, trait) {
      commit("REMOVE_TRAIT", trait);
    },
  },
};
