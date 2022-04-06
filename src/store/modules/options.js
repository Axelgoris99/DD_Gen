import dnd5 from "../../api/dnd5eapi";
import open5 from "../../api/open5e";
export default {
  namespaced: true,
  state: {
    races: [],
    classes: [],
    languages: [],
    alignments: [],
    traits: [],
    backgrounds: [],
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
    SET_ALIGNMNETS(state, alignmnets) {
      state.alignmnets = alignmnets;
    },
    SET_TRAITS(state, traits) {
      state.traits = traits;
    },
    SET_BACKGROUNDS(state, backgrounds) {
      state.backgrounds = backgrounds;
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
                value: r.slugs,
              }))
            );
          }
        )
        .catch(() => console.log("error resolving promises"));
    },
  },
};
