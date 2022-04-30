import firebase from "firebase/compat/app";

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
      if ((state.characters.filter(hasSameName).length = lengthCharacters)) {
        state.characters = [...state.characters, characterToAdd];

        firebase
          .database()
          .ref(
            this.$store.module.auth.state.user.data.displayName +
              "/characters/" +
              characterToAdd.name
          )
          .set(characterToAdd);
      }
    },
    REMOVE_CHARACTER(state, charcaterToRemove) {
      function hasSameName(character) {
        return character.name != charcaterToRemove.name;
      }
      let lengthCharacters = state.characters.length;
      if (state.characters.filter(hasSameName).length < lengthCharacters) {
        state.characters = state.characters.filter(hasSameName);
        firebase
          .database()
          .ref(
            this.$store.module.auth.state.user.data.displayName +
              "/characters/" +
              charcaterToRemove.name
          )
          .set(null);
      }
      return state.characters;
    },
  },
  actions: {
    fetchCharacters({ commit }) {
      firebase
        .database()
        .ref(
          this.$store.module.auth.state.user.data.displayName + "/characters"
        )
        .on("child_added", (snapshot) => {
          commit("ADD_CHARACTER", snapshot.val());
        });
      firebase
        .database()
        .ref(
          this.$store.module.auth.state.user.data.displayName + "/characters"
        )
        .on("child_removed", (snapshot) => {
          commit("REMOVE_CHARACTER", snapshot.val());
        });
    },
  },
};
