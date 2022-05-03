import { initializeApp } from "firebase/app";
import { getDatabase, set, ref } from "firebase/database";
import { getAuth } from "firebase/auth";
import firebaseConfig from "../../../firebase.config";
initializeApp(firebaseConfig);
var database = getDatabase();

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
      let userId = getAuth().currentUser.uid;
      console.log(userId);
      let lengthCharacters = state.characters.length;
      if (state.characters.filter(hasSameName).length == lengthCharacters) {
        state.characters = [...state.characters, characterToAdd];
        set(
          ref(
            database,
            "/users/" + userId + "/characters/" + characterToAdd.name
          ),
          characterToAdd
        )
          .then(() => {
            console.log("succes");
          })
          .catch((error) => {
            console.log(error);
          });
      }
    },
    REMOVE_CHARACTER(state, charcaterToRemove) {
      function hasSameName(character) {
        return character.name != charcaterToRemove.name;
      }
      let lengthCharacters = state.characters.length;
      if (state.characters.filter(hasSameName).length < lengthCharacters) {
        state.characters = state.characters.filter(hasSameName);
        database
          .ref(
            this.$store.state.auth.state.user.data.displayName +
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
      database
        .ref(this.$store.state.auth.state.user.data.displayName + "/characters")
        .on("child_added", (snapshot) => {
          commit("ADD_CHARACTER", snapshot.val());
        });
      database
        .ref(
          this.$store.module.auth.state.user.data.displayName + "/characters"
        )
        .on("child_removed", (snapshot) => {
          commit("REMOVE_CHARACTER", snapshot.val());
        });
    },
  },
};
