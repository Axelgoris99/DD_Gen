//import { initializeApp } from "firebase/app";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";
import {
  getDatabase,
  set,
  ref,
  get,
  child,
  onChildAdded,
  onChildRemoved,
  onValue,
} from "firebase/database";
import { getAuth } from "firebase/auth";
import firebaseConfig from "../firebase.config";

firebase.initializeApp(firebaseConfig);

var database = getDatabase();

const auth = firebase.auth();
const storage = firebase.storage();

const fetchImageUrl = (race, gender, _class, number) => {
  return storage
    .ref()
    .child(`icon/${race}/${gender}/${_class}/${number}.png`)
    .getDownloadURL();
};

function signUp(email, password, name) {
  return firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then((data) => {
      data.user.updateProfile({
        displayName: name,
      });
    });
}

function signIn(email, password) {
  return firebase.auth().signInWithEmailAndPassword(email, password);
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
  if (!isNaN(payload.current_char_image)) {
    set(
      ref(database, "/users/" + userId + "/current_char/image"),
      payload.current_char_image
    );
  }
  if (payload.current_char_str) {
    set(
      ref(database, "/users/" + userId + "/current_char/stats/strength"),
      payload.current_char_str
    );
  }
  if (payload.current_char_con) {
    set(
      ref(database, "/users/" + userId + "/current_char/stats/constitution"),
      payload.current_char_con
    );
  }
  if (payload.current_char_dex) {
    set(
      ref(database, "/users/" + userId + "/current_char/stats/dexterity"),
      payload.current_char_dex
    );
  }
  if (payload.current_char_wis) {
    set(
      ref(database, "/users/" + userId + "/current_char/stats/wisdom"),
      payload.current_char_wis
    );
  }
  if (payload.current_char_int) {
    set(
      ref(database, "/users/" + userId + "/current_char/stats/intelligence"),
      payload.current_char_int
    );
  }
  if (payload.current_char_cha) {
    set(
      ref(database, "/users/" + userId + "/current_char/stats/charisma"),
      payload.current_char_cha
    );
  }
  if (payload.current_char_ready) {
    set(
      ref(database, "/users/" + userId + "/current_char/ready"),
      payload.current_char_ready
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

var modelFetched = { ready: false };
// function getModelFetched() {
//   return modelFetched;
// }

function updateModelFromFirebase(store) {
  let userId = getAuth().currentUser.uid;
  // charcaters
  onChildAdded(ref(database, "/users/" + userId + "/characters"), (snapshot) =>
    store.dispatch("characters/addChar", snapshot.val())
  );
  onChildRemoved(
    ref(database, "/users/" + userId + "/characters"),
    (snapshot) => store.dispatch("characters/removeChar", snapshot.val())
  );

  //input
  onValue(
    ref(database, "/users/" + userId + "/input_char/name"),
    (snapshot) => {
      if (snapshot.val()) {
        store.dispatch("input/setName", snapshot.val());
      }
    }
  );
  onValue(
    ref(database, "/users/" + userId + "/input_char/gender"),
    (snapshot) => {
      if (snapshot.val()) {
        store.dispatch("input/setGender", snapshot.val());
      }
    }
  );
  onValue(
    ref(database, "/users/" + userId + "/input_char/race"),
    (snapshot) => {
      if (snapshot.val()) {
        store.dispatch("input/setRace", snapshot.val());
      }
    }
  );
  onValue(
    ref(database, "/users/" + userId + "/input_char/class"),
    (snapshot) => {
      if (snapshot.val()) {
        store.dispatch("input/setClass", snapshot.val());
      }
    }
  );
  onValue(
    ref(database, "/users/" + userId + "/input_char/background"),
    (snapshot) => {
      if (snapshot.val()) {
        store.dispatch("input/setBackground", snapshot.val());
      }
    }
  );
  onValue(
    ref(database, "/users/" + userId + "/input_char/alignment"),
    (snapshot) => {
      if (snapshot.val()) {
        store.dispatch("input/setAlignment", snapshot.val());
      }
    }
  );
  onChildAdded(
    ref(database, "/users/" + userId + "/input_char/languages"),
    (snapshot) => store.dispatch("input/addLanguage", snapshot.val())
  );
  onChildRemoved(
    ref(database, "/users/" + userId + "/input_char/languages"),
    (snapshot) => store.dispatch("input/removeLanguage", snapshot.val())
  );
  onChildAdded(
    ref(database, "/users/" + userId + "/input_char/traits"),
    (snapshot) => store.dispatch("input/addTrait", snapshot.val())
  );
  onChildRemoved(
    ref(database, "/users/" + userId + "/input_char/traits"),
    (snapshot) => store.dispatch("input/removeTrait", snapshot.val())
  );

  // current
  onValue(
    ref(database, "/users/" + userId + "/current_char/name"),
    (snapshot) => {
      if (snapshot.val()) {
        store.dispatch("current/setName", snapshot.val());
      }
    }
  );
  onValue(
    ref(database, "/users/" + userId + "/current_char/gender"),
    (snapshot) => {
      if (snapshot.val()) {
        store.dispatch("current/setGender", snapshot.val());
      }
    }
  );
  onValue(
    ref(database, "/users/" + userId + "/current_char/race"),
    (snapshot) => {
      if (snapshot.val()) {
        store.dispatch("current/setRace", snapshot.val().index);
      }
    }
  );
  onValue(
    ref(database, "/users/" + userId + "/current_char/class"),
    (snapshot) => {
      if (snapshot.val()) {
        store.dispatch("current/setClass", snapshot.val().index);
      }
    }
  );
  onValue(
    ref(database, "/users/" + userId + "/current_char/background"),
    (snapshot) => {
      if (snapshot.val()) {
        store.dispatch("current/setBackground", snapshot.val().slug);
      }
    }
  );
  onValue(
    ref(database, "/users/" + userId + "/current_char/alignment"),
    (snapshot) => {
      if (snapshot.val()) {
        store.dispatch("current/setAlignment", snapshot.val().index);
      }
    }
  );
  onValue(
    ref(database, "/users/" + userId + "/current_char/image"),
    (snapshot) => {
      if (snapshot.val()) {
        store.dispatch("current/setImage", snapshot.val());
      }
    }
  );
  onValue(
    ref(database, "/users/" + userId + "/current_char/stats/strength"),
    (snapshot) => {
      if (snapshot.val()) {
        store.dispatch("current/setStr", snapshot.val());
      }
    }
  );
  onValue(
    ref(database, "/users/" + userId + "/current_char/stats/constitution"),
    (snapshot) => {
      if (snapshot.val()) {
        store.dispatch("current/setCon", snapshot.val());
      }
    }
  );
  onValue(
    ref(database, "/users/" + userId + "/current_char/stats/dexterity"),
    (snapshot) => {
      if (snapshot.val()) {
        store.dispatch("current/setDex", snapshot.val());
      }
    }
  );
  onValue(
    ref(database, "/users/" + userId + "/current_char/stats/wisdom"),
    (snapshot) => {
      if (snapshot.val()) {
        store.dispatch("current/setWis", snapshot.val());
      }
    }
  );
  onValue(
    ref(database, "/users/" + userId + "/current_char/stats/intelligence"),
    (snapshot) => {
      if (snapshot.val()) {
        store.dispatch("current/setInt", snapshot.val());
      }
    }
  );
  onValue(
    ref(database, "/users/" + userId + "/current_char/stats/charisma"),
    (snapshot) => {
      if (snapshot.val()) {
        store.dispatch("current/setCha", snapshot.val());
      }
    }
  );
  onValue(
    ref(database, "/users/" + userId + "/current_char/ready"),
    (snapshot) => {
      if (snapshot.val()) {
        // modelFetched.ready = true;
        store.dispatch("current/setReady", snapshot.val());
      }
    }
  );
  onChildAdded(
    ref(database, "/users/" + userId + "/current_char/languages"),
    (snapshot) => store.dispatch("current/addLanguage", snapshot.val().index)
  );
  onChildRemoved(
    ref(database, "/users/" + userId + "/current_char/languages"),
    (snapshot) => store.dispatch("current/removeLanguage", snapshot.val().index)
  );
  onChildAdded(
    ref(database, "/users/" + userId + "/current_char/traits"),
    (snapshot) => store.dispatch("current/addTrait", snapshot.val().index)
  );
  onChildRemoved(
    ref(database, "/users/" + userId + "/current_char/traits"),
    (snapshot) => store.dispatch("current/removeTrait", snapshot.val().index)
  );
}

function initialModelFromFirebase(store) {
  const userId = getAuth().currentUser.uid;
  // store.dispatch("loader/pending");
  // try {
  get(child(ref(database), `users/${userId}/current_char`))
    .then((snapshot) => {
      const model = snapshot.val();
      if (model) {
        store
          .dispatch("current/setModel", model)
          .then(() => store.dispatch("options/init"))
          .then(() => (modelFetched.ready = true));
      } else {
        modelFetched.ready = true;
      }
    })
    .finally(() => {});
  //   store.dispatch("loader/done");
  // } catch {
  //   store.dispatch("loader/done");
  //   store.dispatch("loader/error");
}
// }

export {
  auth,
  storage,
  modelFetched,
  fetchImageUrl,
  signUp,
  signIn,
  signOut,
  updateFirebaseFromModel,
  updateModelFromFirebase,
  initialModelFromFirebase,
};
