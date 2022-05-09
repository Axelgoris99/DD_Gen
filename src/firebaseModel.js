import { initializeApp } from "firebase/app";
import {
  getDatabase,
  set,
  ref,
  onChildAdded,
  onChildRemoved,
} from "firebase/database";
import { getAuth } from "firebase/auth";
import firebaseConfig from "../firebase.config";
initializeApp(firebaseConfig);
var database = getDatabase();

function signIn() {}

function signOut() {}

function updateFirebaseFromModel(payload) {
  let userId = getAuth().currentUser.uid;
  if (payload.characterToAdd) {
    set(
      ref(
        database,
        "/users/" + userId + "/characters/" + payload.characterToAdd.name
      ),
      payload.characterToAdd
    );
  }
  if (payload.characterToRemove) {
    set(
      ref(
        database,
        "/users/" + userId + "/characters/" + payload.characterToRemove.name
      ),
      null
    );
  }
}

function updateModelFromFirebase(store) {
  let userId = getAuth().currentUser.uid;
  onChildAdded(ref(database, "/users/" + userId + "/characters"), (snapshot) =>
    store.commit("characters/ADD_CHARACTER", snapshot.val())
  );
  onChildRemoved(
    ref(database, "/users/" + userId + "/characters"),
    (snapshot) => store.commit("characters/REMOVE_CHARACTER", snapshot.val())
  );
}
export { signIn, signOut, updateFirebaseFromModel, updateModelFromFirebase };
