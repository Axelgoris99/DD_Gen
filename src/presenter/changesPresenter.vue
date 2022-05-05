<template>
  <div>
    <MyChangesView></MyChangesView>
    <div class="row-fluid">
      <MyCharacter></MyCharacter>
      <pdfVue
        v-if="
          currentName &&
          currentClass &&
          currentBackground &&
          currentAlignment &&
          currentRace &&
          currentGender
        "
        :download="false"
        :myPicture="pictureUrl"
        :myName="currentName"
        :myClass="currentClass"
        :myBackground="currentBackground"
        :myRace="currentRace"
        :myAlignment="currentAlignment"
        :myTraits="currentTraits"
        :myLanguages="currentLanguages"
        :myGender="currentGender"
      ></pdfVue>
    </div>
    <b-button to="input" class="space">Another time!</b-button>
    <b-button to="output" class="space">Perfection!</b-button>
  </div>
</template>

<script>
import MyChangesView from "../view/changesView.vue";
import MyCharacter from "./charPresenter.vue";
import { mapGetters } from "vuex";
import pdfVue from "../components/pdf.vue";
// helpers for the "options" module

export default {
  name: "MyChanges",
  components: {
    MyChangesView,
    MyCharacter,
    pdfVue,
  },
  // map all the getters to computed properties.
  computed: {
    ...mapGetters({
      currentName: "current/name",
      currentGender: "current/gender",
      currentRace: "current/race",
      currentClass: "current/class",
      currentAlignment: "current/alignment",
      currentLanguages: "current/languages",
      currentTraits: "current/traits",
      currentBackground: "current/background",
    }),
    pictureUrl() {
      let number = Math.floor(Math.random() * 3);
      return (
        this.currentGender +
        this.currentRace.name.toLowerCase() +
        this.currentClass.name.toLowerCase() +
        "/" +
        this.currentGender +
        this.currentRace.name.toLowerCase() +
        this.currentClass.name.toLowerCase() +
        number +
        ".png"
      );
    },
  },
};
</script>

<style scoped>
.row-fluid {
  display: flex;
  flex-wrap: wrap;
}
.space {
  margin: 5px;
}
</style>
