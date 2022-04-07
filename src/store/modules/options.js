import dnd5 from "../../api/dnd5eapi";
import open5 from "../../api/open5e";
// This is a vuex module containing all the options from dnd5eapi and open5e apis.
// This module should be initialized once on startup of the application.
export default {
  namespaced: true,
  state: {
    races: [],
    classes: [],
    languages: [],
    alignments: [],
    traits: [],
    backgrounds: [],
    ability_scores: [],
  },

  mutations: {
    SET_RACES(state, races) {
      state.races = races;
    },
    SET_CLASSES(state, classes) {
      state.classes = classes;
    },
    SET_LANGUAGES(state, languages) {
      state.languages = languages;
    },
    SET_ALIGNMENTS(state, alignments) {
      state.alignments = alignments;
    },
    SET_TRAITS(state, traits) {
      state.traits = traits;
    },
    SET_BACKGROUNDS(state, backgrounds) {
      state.backgrounds = backgrounds;
    },
    SET_ABILITY_SCORE(state, ability_scores) {
      state.ability_scores = ability_scores;
    },
  },
  getters: {
    races(state) {
      return state.races;
    },
    classes(state) {
      return state.classes;
    },
    languages(state) {
      return state.languages;
    },
    alignments(state) {
      return state.alignments;
    },
    traits(state) {
      return state.traits;
    },
    backgrounds(state) {
      return state.backgrounds;
    },
    abilities(state) {
      return state.ability_scores;
    },
  },
  actions: {
    init({ commit }) {
      // Fetch data from apis to populate dropdowns
      const promises = [
        dnd5.raceList(),
        dnd5.classList(),
        dnd5.alignmentList(),
        dnd5.languageList(),
        dnd5.traitList(),
        open5.backgroundList(),
        dnd5.abilityScoreList(),
      ];
      Promise.all(promises)
        .then(
          ([
            { data: races },
            { data: classes },
            { data: alignments },
            { data: languages },
            { data: traits },
            { data: backgrounds },
            { data: ability_scores },
          ]) => {
            commit(
              "SET_RACES",
              races.results.map((r) => ({
                text: r.name,
                value: r.index,
              }))
            );
            commit(
              "SET_CLASSES",
              classes.results.map((r) => ({
                text: r.name,
                value: r.index,
              }))
            );
            commit(
              "SET_ALIGNMENTS",
              alignments.results.map((r) => ({
                text: r.name,
                value: r.index,
              }))
            );
            commit(
              "SET_LANGUAGES",
              languages.results.map((r) => ({
                text: r.name,
                value: r.index,
              }))
            );
            commit(
              "SET_TRAITS",
              traits.results.map((r) => ({
                text: r.name,
                value: r.index,
              }))
            );
            commit(
              "SET_BACKGROUNDS",
              backgrounds.results.map((r) => ({
                text: r.name,
                value: r.slug,
              }))
            );
            commit(
              "SET_ABILITY_SCORE",
              ability_scores.results.map((r) => ({
                text: r.name,
                value: r.index,
              }))
            );
          }
        )
        .catch(() => console.log("error resolving promises"));
    },
  },
};
