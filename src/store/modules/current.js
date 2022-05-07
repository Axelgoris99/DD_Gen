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
    SET_IMAGE(state, image) {
      Vue.set(state, "image", image);
    },
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
      commit("SET_IMAGE", Math.floor(Math.random() * 3));

      // Now we want to set the properties that are set asynchronously.
      const promises = [];

      promises.push(
        // set properties first by the slug in component state,
        // then by picking a random slug.
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

      Promise.all(promises)
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
            this.$store.dispatch("current/setName", name);
          } else {
            // Otherwise, we generate a random one from the race and gender.
            const current_race = getters.race;
            const current_gender = getters.gender;
            const gen = Names.generate({
              race: camelCase(current_race.index),
              gender: current_gender,
            });
            dispatch("setName", gen.name);
          }
        })
        .finally(() => {
          commit("SET_READY", true);
        });
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
