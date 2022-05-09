export default {
  namespaced: true,
  state: {
    characters: [],
  },
  getters: {
    characters(state) {
      return state.characters;
    },
  },
  mutations: {
    ADD_CHARACTER(state, characterToAdd) {
      function hasSameName(character) {
        return character.name != characterToAdd.name;
      }
      let lengthCharacters = state.characters.length;
      if (state.characters.filter(hasSameName).length == lengthCharacters) {
        state.characters = [...state.characters, characterToAdd];
      }
    },
    REMOVE_CHARACTER(state, characterToRemove) {
      function hasSameName(character) {
        return character.name != characterToRemove.name;
      }
      let lengthCharacters = state.characters.length;
      if (state.characters.filter(hasSameName).length < lengthCharacters) {
        state.characters = state.characters.filter(hasSameName);
      }
    },
  },
  actions: {
    addChar({ commit }, characterToAdd) {
      commit("ADD_CHARACTER", characterToAdd);
    },
    removeChar({ commit }, characterToRemove) {
      commit("REMOVE_CHARACTER", characterToRemove);
    },
  },
};
