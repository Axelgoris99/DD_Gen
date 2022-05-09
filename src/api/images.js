import { storage } from "../firebase";

export const getImage = (race, gender, _class, nr) => {
  return storage
    .ref()
    .child(`icon/${race}/${gender}/${_class}/${nr}.png`)
    .getDownloadURL();
};
