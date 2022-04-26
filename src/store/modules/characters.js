export default {
  namespaced: true,
  state: {
    characters: [{ name: "Thomas", src: "../assets/icon/barbarian.png" }],
  },
  getters: {
    characters(state) {
      return state.characters;
    },
  },
  mutations: {
    add_character(state, characterToAdd) {
      state.characters = [...state.characters, characterToAdd];
    },
    remove_character(state, charcaterToRemove) {
      function hasSameName(character) {
        return character.name != charcaterToRemove.name;
      }
      let lengthCharacters = state.characters.length;
      if (state.characters.filter(hasSameName).length < lengthCharacters) {
        state.characters = state.characters.filter(hasSameName);
      }
      return state.characters;
    },
  },
};
