import { initializeApp } from "firebase/app";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
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

function signUp(email, password, name) {
  firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then((data) => {
      data.user.updateProfile({
        displayName: name,
      });
    })
    .then(() => {})
    .catch((err) => {
      this.error = err.message;
    });
}

function signIn(email, password) {
  firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then(() => {})
    .catch((err) => {
      this.error = err.message;
    });
}

function signOut() {
  firebase.auth().signOut();
}

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
export {
  signUp,
  signIn,
  signOut,
  updateFirebaseFromModel,
  updateModelFromFirebase,
};
