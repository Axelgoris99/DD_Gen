import Vue from "vue";
import sample from "lodash.sample";
import camelCase from "lodash.camelcase";
import dnd5 from "../../api/dnd5eapi";
import open5 from "../../api/open5e";
import { Names } from "fantasy-content-generator";

export default {
  namespaced: true,
  state: {
    image: null,
    ready: false,
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
    SET_READY(state, ready) {
      Vue.set(state, "ready", ready);
    },
    SET_IMAGE(state, payload) {
      Vue.set(state, "image", payload.current_char_image);
    },
    SET_NAME(state, payload) {
      Vue.set(state, "name", payload.current_char_name);
    },
    SET_GENDER(state, payload) {
      Vue.set(state, "gender", payload.current_char_gender);
    },
    SET_RACE(state, payload) {
      Vue.set(state, "race", payload.current_char_race);
    },
    SET_CLASS(state, payload) {
      Vue.set(state, "class", payload.current_char_class);
    },
    SET_BACKGROUND(state, payload) {
      Vue.set(state, "background", payload.current_char_background);
    },
    SET_ALIGNMENT(state, payload) {
      Vue.set(state, "alignment", payload.current_char_alignment);
    },
    ADD_LANGUAGE(state, payload) {
      if (
        state.languages.filter(
          (l) => l.index === payload.current_char_add_language.index
        ).length === 0
      ) {
        Vue.set(state, "languages", [
          ...state.languages,
          payload.current_char_add_language,
        ]);
      }
    },
    REMOVE_LANGUAGE(state, payload) {
      state.languages = state.languages.filter(
        (l) => l.index !== payload.current_char_remove_language
      );
    },
    CLEAR_LANGUAGES(state) {
      state.languages = [];
    },
    ADD_TRAIT(state, payload) {
      if (
        state.traits.filter(
          (t) => t.index === payload.current_char_add_trait.index
        ).length === 0
      ) {
        Vue.set(state, "traits", [
          ...state.traits,
          payload.current_char_add_trait,
        ]);
      }
    },
    REMOVE_TRAIT(state, payload) {
      state.traits = state.traits.filter(
        (t) => t.index !== payload.current_char_remove_trait
      );
    },
    CLEAR_TRAITS(state) {
      state.traits = [];
    },
  },
  getters: {
    ready(state) {
      return state.ready;
    },
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
    image(state) {
      return state.image;
    },
  },

  actions: {
    init({ dispatch, commit, getters, rootGetters }) {
      // Set synchronous properties first.
      dispatch(
        "setGender",
        rootGetters["input/gender"] || sample(["male", "female"])
      );
      dispatch("setImage", Math.floor(Math.random() * 3));

      // Now we want to set the properties that are set asynchronously.
      // collect the base promises (that independent of each other).
      const basePromises = [];

      basePromises.push(
        dispatch(
          "setClass",
          rootGetters["input/class"] ||
            sample(rootGetters["options/classes"]).value
        ),
        dispatch(
          "setAlignment",
          rootGetters["input/alignment"] ||
            sample(rootGetters["options/alignments"]).value
        ),
        dispatch(
          "setBackground",
          rootGetters["input/background"] ||
            sample(rootGetters["options/backgrounds"]).value
        ),
        dispatch(
          "setRace",
          rootGetters["input/race"] ||
            sample(rootGetters["options/races"]).value
        )
      );

      // Chain on dependent promises.
      Promise.all(basePromises)
        .then(() => {
          const language_slugs = rootGetters["input/languages"];
          if (language_slugs.length > 0) {
            // map slugs to promises and reduce to a promise chain.
            return Promise.all(
              language_slugs.map((slug) => dispatch("addLanguage", slug))
            );

            // Otherwise, we add languages dependent on the race.
          } else {
            const current_race = getters.race;
            // map slugs to promises and reduce to a promise chain.
            return Promise.all(
              current_race.languages.map((lang) =>
                dispatch("addLanguage", lang.index)
              )
            );
          }
        })
        .then(() => {
          const trait_slugs = rootGetters["input/traits"];
          if (trait_slugs.length > 0) {
            // map slugs to promises and reduce to a promise chain.
            return Promise.all(
              trait_slugs.map((slug) => dispatch("addTrait", slug))
            );
          } else {
            // Otherwise, we generate we add traits dependent on the race.
            const current_race = getters.race;
            return Promise.all(
              current_race.traits.map((t) => dispatch("addTrait", t.index))
            );
          }
        })
        .then(() => {
          const name = rootGetters["input/name"];
          if (name) {
            dispatch("setName", name);
          } else {
            // Generate random name.
            const current_race = getters.race;
            const current_gender = getters.gender;
            const gen = Names.generate({
              race: camelCase(current_race.index),
              gender: current_gender,
            });
            dispatch("setName", gen.name);
          }
        })
        // Set the ready flag.
        .finally(() => {
          commit("SET_READY", true);
        });
    },

    setName({ commit }, name) {
      commit("SET_NAME", { current_char_name: name });
    },
    unsetName({ commit }) {
      commit("SET_NAME", { current_char_name: null });
    },
    setGender({ commit }, gender) {
      commit("SET_GENDER", { current_char_gender: gender });
    },
    setRace({ commit }, slug) {
      return new Promise((resolve, reject) => {
        dnd5
          .raceGet(slug)
          .then((resp) => {
            commit("SET_RACE", { current_char_race: resp.data });
            resolve();
          })
          .catch((error) => reject(error));
      });
    },
    unsetRace({ commit }) {
      commit("SET_RACE", { current_char_race: null });
    },

    setClass({ commit }, slug) {
      return new Promise((resolve, reject) => {
        dnd5
          .classGet(slug)
          .then((resp) => {
            commit("SET_CLASS", { current_char_class: resp.data });
            resolve();
          })
          .catch((error) => reject(error));
      });
    },

    unsetClass({ commit }) {
      commit("SET_CLASS", { current_char_class: null });
    },
    setBackground({ commit }, slug) {
      return new Promise((resolve, reject) => {
        open5
          .backgroundGet(slug)
          .then((resp) => {
            commit("SET_BACKGROUND", { current_char_background: resp.data });
            resolve();
          })
          .catch((error) => reject(error));
      });
    },
    unsetBackground({ commit }) {
      commit("SET_BACKGROUND", { current_char_background: null });
    },
    setAlignment({ commit }, slug) {
      return new Promise((resolve, reject) => {
        dnd5
          .alignmentGet(slug)
          .then((resp) => {
            commit("SET_ALIGNMENT", { current_char_alignment: resp.data });
            resolve();
          })
          .catch((error) => reject(error));
      });
    },
    unsetAlignment({ commit }) {
      commit("SET_ALIGNMENT", { current_char_alignement: null });
    },
    addLanguage({ commit }, slug) {
      return new Promise((resolve, reject) => {
        dnd5
          .languageGet(slug)
          .then((resp) => {
            commit("ADD_LANGUAGE", { current_char_add_language: resp.data });
            resolve();
          })
          .catch((error) => reject(error));
      });
    },
    removeLanguage({ commit }, lang) {
      commit("REMOVE_LANGUAGE", { current_char_remove_language: lang });
    },
    addTrait({ commit }, slug) {
      return new Promise((resolve, reject) => {
        dnd5
          .traitGet(slug)
          .then((resp) => {
            commit("ADD_TRAIT", { current_char_add_trait: resp.data });
            resolve();
          })
          .catch((error) => reject(error));
      });
    },
    removeTrait({ commit }, trait) {
      commit("REMOVE_TRAIT", { current_char_remove_trait: trait });
    },
    resetTraits({ commit }) {
      commit("CLEAR_TRAITS");
    },
    resetLanguages({ commit }) {
      commit("CLEAR_LANGUAGES");
    },
    resetReady({ commit }) {
      commit("SET_READY", false);
    },
    setImage({ commit }, num) {
      commit("SET_IMAGE", { current_char_image: num });
    },
    resetImage({ commit }) {
      commit("SET_IMAGE", { current_char_image: null });
    },
    reset({ dispatch }) {
      dispatch("unsetName");
      dispatch("unsetBackground");
      dispatch("unsetClass");
      dispatch("unsetRace");
      dispatch("unsetAlignment");
      dispatch("resetTraits");
      dispatch("resetLanguages");
      dispatch("resetReady");
      dispatch("resetImage");
    },
  },
};
