import firebaseConfig from "../firebase.config.js";
firebase.initializeApp(firebaseConfig);

function updateFirebaseFromModel() {}

function updateModelFromFirebase() {}

function firebaseModelPromise() {}

export {
  updateFirebaseFromModel,
  updateModelFromFirebase,
  firebaseModelPromise,
};
