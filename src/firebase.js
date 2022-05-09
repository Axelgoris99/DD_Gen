import firebase from "firebase/compat/app";
import firebaseConfig from "../firebase.config";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const storage = firebase.storage();

export const fetchImageUrl = (race, gender, _class, number) => {
  return storage
    .ref()
    .child(`icon/${race}/${gender}/${_class}/${number}.png`)
    .getDownloadURL();
};
