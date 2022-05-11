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
    ADD_CHARACTER(state, payload) {
      function hasSameName(character) {
        return character.name != payload.characterToAdd.name;
      }
      let lengthCharacters = state.characters.length;
      if (state.characters.filter(hasSameName).length == lengthCharacters) {
        state.characters = [...state.characters, payload.characterToAdd];
      }
    },
    REMOVE_CHARACTER(state, payload) {
      function hasSameName(character) {
        return character.name != payload.characterToRemove.name;
      }
      let lengthCharacters = state.characters.length;
      if (state.characters.filter(hasSameName).length < lengthCharacters) {
        state.characters = state.characters.filter(hasSameName);
      }
    },
  },
  actions: {
    addChar({ commit }, characterToAdd) {
      commit("ADD_CHARACTER", { characterToAdd: characterToAdd });
    },
    removeChar({ commit }, characterToRemove) {
      commit("REMOVE_CHARACTER", { characterToRemove: characterToRemove });
    },
  },
};
