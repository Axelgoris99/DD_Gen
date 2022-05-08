import { initializeApp } from "firebase/app";
import {
  getDatabase,
  set,
  ref,
  onChildAdded,
  onChildRemoved,
} from "firebase/database";
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
      let lengthCharacters = state.characters.length;
      if (state.characters.filter(hasSameName).length == lengthCharacters) {
        state.characters = [...state.characters, characterToAdd];
        set(
          ref(
            database,
            "/users/" + userId + "/characters/" + characterToAdd.name
          ),
          characterToAdd
        );
      }
    },
    REMOVE_CHARACTER(state, charcaterToRemove) {
      function hasSameName(character) {
        return character.name != charcaterToRemove.name;
      }
      let userId = getAuth().currentUser.uid;
      let lengthCharacters = state.characters.length;
      if (state.characters.filter(hasSameName).length < lengthCharacters) {
        state.characters = state.characters.filter(hasSameName);
        set(
          ref(
            database,
            "/users/" + userId + "/characters/" + charcaterToRemove.name
          ),
          null
        );
      }
    },
  },
  actions: {
    fetchCharacters({ commit }) {
      console.log("firebase");
      let userId = getAuth().currentUser.uid;
      onChildAdded(
        ref(database, "/users/" + userId + "/characters"),
        (snapshot) => commit("ADD_CHARACTER", snapshot.val())
      );
      onChildRemoved(
        ref(database, "/users/" + userId + "/characters"),
        (snapshot) => commit("REMOVE_CHARACTER", snapshot.val())
      );
    },
  },
};
