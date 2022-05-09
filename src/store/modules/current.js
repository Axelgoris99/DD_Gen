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
    // These stats are the default value in DnD
    stats: { str: 15, int: 12, dex: 13, con: 14, wis: 10, cha: 8 },
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
    CLEAR_LANGUAGES(state) {
      state.languages = [];
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
      state.traits = [];
    },
    SET_STR(state, value) {
      state.stats.str = value;
    },
    SET_CON(state, value) {
      state.stats.con = value;
    },
    SET_INT(state, value) {
      state.stats.int = value;
    },
    SET_WIS(state, value) {
      state.stats.wis = value;
    },
    SET_DEX(state, value) {
      state.stats.dex = value;
    },
    SET_CHA(state, value) {
      state.stats.cha = value;
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
    stats(state) {
      return state.stats;
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
      return (
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
              this.$store.dispatch("current/setName", name);
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
          .then(() => {
            commit("SET_READY", true);
          })
      );
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
      commit("SET_IMAGE", num);
    },
    resetImage({ commit }) {
      commit("SET_IMAGE", null);
    },
    setStr({ commit }, value) {
      commit("SET_STR", value);
    },
    setCon({ commit }, value) {
      commit("SET_CON", value);
    },
    setInt({ commit }, value) {
      commit("SET_INT", value);
    },
    setCha({ commit }, value) {
      commit("SET_CHA", value);
    },
    setDex({ commit }, value) {
      commit("SET_DEX", value);
    },
    setWis({ commit }, value) {
      commit("SET_WIS", value);
    },
    resetStats({ commit }) {
      commit("SET_STR", 15);
      commit("SET_CON", 14);
      commit("SET_DEX", 13);
      commit("SET_INT", 12);
      commit("SET_WIS", 10);
      commit("SET_CHA", 8);
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
      dispatch("resetStats");
    },
  },
};
