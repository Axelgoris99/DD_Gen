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
  // Profile characters
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

  // Input character
  if (payload.input_name) {
    set(
      ref(database, "/users/" + userId + "/input_char/name"),
      payload.input_name
    );
  }
  if (payload.input_gender) {
    set(
      ref(database, "/users/" + userId + "/input_char/gender"),
      payload.input_gender
    );
  }
  if (payload.input_race) {
    set(
      ref(database, "/users/" + userId + "/input_char/race"),
      payload.input_race
    );
  }
  if (payload.input_class) {
    set(
      ref(database, "/users/" + userId + "/input_char/class"),
      payload.input_class
    );
  }
  if (payload.input_background) {
    set(
      ref(database, "/users/" + userId + "/input_char/background"),
      payload.input_background
    );
  }
  if (payload.input_alignment) {
    set(
      ref(database, "/users/" + userId + "/input_char/alignment"),
      payload.input_alignment
    );
  }
  if (payload.input_add_language) {
    set(
      ref(
        database,
        "/users/" +
          userId +
          "/input_char/languages/" +
          payload.input_add_language
      ),
      payload.input_add_language
    );
  }
  if (payload.input_remove_language) {
    set(
      ref(
        database,
        "/users/" +
          userId +
          "/input_char/languages/" +
          payload.input_remove_language
      ),
      null
    );
  }
  if (payload.input_add_trait) {
    set(
      ref(
        database,
        "/users/" + userId + "/input_char/traits/" + payload.input_add_trait
      ),
      payload.input_add_trait
    );
  }
  if (payload.input_remove_trait) {
    set(
      ref(
        database,
        "/users/" + userId + "/input_char/traits/" + payload.input_remove_trait
      ),
      null
    );
  }

  // current character
  if (payload.current_char_name) {
    set(
      ref(database, "/users/" + userId + "/current_char/name"),
      payload.current_char_name
    );
  }
  if (payload.current_char_gender) {
    set(
      ref(database, "/users/" + userId + "/current_char/gender"),
      payload.current_char_gender
    );
  }
  if (payload.current_char_race) {
    set(
      ref(database, "/users/" + userId + "/current_char/race"),
      payload.current_char_race
    );
  }
  if (payload.current_char_class) {
    set(
      ref(database, "/users/" + userId + "/current_char/class"),
      payload.current_char_class
    );
  }
  if (payload.current_char_background) {
    set(
      ref(database, "/users/" + userId + "/current_char/background"),
      payload.current_char_background
    );
  }
  if (payload.current_char_alignment) {
    set(
      ref(database, "/users/" + userId + "/current_char/alignment"),
      payload.current_char_alignment
    );
  }
  if (payload.current_char_image) {
    set(
      ref(database, "/users/" + userId + "/current_char/image"),
      payload.current_char_image
    );
  }
  if (payload.current_char_add_language) {
    set(
      ref(
        database,
        "/users/" +
          userId +
          "/current_char/languages/" +
          payload.current_char_add_language.name
      ),
      payload.current_char_add_language
    );
  }
  if (payload.current_char_remove_language) {
    set(
      ref(
        database,
        "/users/" +
          userId +
          "/current_char/languages/" +
          payload.current_char_remove_language.name
      ),
      null
    );
  }
  if (payload.current_char_add_trait) {
    set(
      ref(
        database,
        "/users/" +
          userId +
          "/current_char/traits/" +
          payload.current_char_add_trait.name
      ),
      payload.current_char_add_trait
    );
  }
  if (payload.current_char_remove_trait) {
    set(
      ref(
        database,
        "/users/" +
          userId +
          "/current_char/traits/" +
          payload.current_char_remove_trait.name
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

  // onValue(
  //   ref(database, "/users/" + userId + "/input_char/name"),
  //   (snapshot) => {
  //     console.log(snapshot.val());
  //     store.dispatch("input/setName", snapshot.val());
  //   }
  // );
  // onChildAdded(
  //   ref(database, "/users/" + userId + "/input_char/languages"),
  //   (snapshot) => store.commit("input/ADD_LANGUAGE", snapshot.val())
  // );
  // onChildRemoved(
  //   ref(database, "/users/" + userId + "/input_char/languages"),
  //   (snapshot) => store.commit("input/REMOVE_LANGUAGE", snapshot.val())
  // );
}
export {
  signUp,
  signIn,
  signOut,
  updateFirebaseFromModel,
  updateModelFromFirebase,
};
