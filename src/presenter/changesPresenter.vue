<template>
  <div>
    <MyChangesView
      v-if="
        currentGender &&
        currentName &&
        currentRace &&
        currentClass &&
        currentAlignment &&
        currentBackground &&
        currentLanguages.length > 0 &&
        currentTraits.length > 0
      "
      :races="races"
      :classes="classes"
      :alignments="alignments"
      :languages="languages"
      :traits="traits"
      :backgrounds="backgrounds"
      :currentName="currentName"
      :currentGender="currentGender"
      :currentRace="currentRace"
      :currentClass="currentClass"
      :currentAlignment="currentAlignment"
      :currentBackground="currentBackground"
      :currentLanguages="currentLanguages"
      :currentTraits="currentTraits"
      @setName="setName"
      @setGender="setGender"
      @setRace="setRace"
      @setClass="setClass"
      @setBackground="setBackground"
      @setAlignment="setAlignment"
      @addLanguage="addLanguage"
      @removeLanguage="removeLanguage"
      @removeTrait="removeTrait"
      @addTrait="addTrait"
    />
  </div>
</template>

<script>
import MyChangesView from "../view/changesView.vue";
import { mapGetters } from "vuex";

export default {
  name: "MyChanges",
  components: {
    MyChangesView,
  },
  // map all the getters to computed properties.
  computed: {
    ...mapGetters({
      races: "options/races",
      classes: "options/classes",
      alignments: "options/alignments",
      languages: "options/languages",
      traits: "options/traits",
      abilities: "options/abilities",
      backgrounds: "options/backgrounds",
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
  methods: {
    setName(n) {
      this.$store.dispatch("current/setName", n);
    },
    setGender(g) {
      this.$store.dispatch("current/setGender", g);
    },
    setRace(r) {
      this.$store.dispatch("current/setRace", r);
    },
    setClass(c) {
      this.$store.dispatch("current/setClass", c);
    },
    setBackground(b) {
      this.$store.dispatch("current/setBackground", b);
    },
    setAlignment(a) {
      this.$store.dispatch("current/setAlignment", a);
    },
    addLanguage(l) {
      this.$store.dispatch("current/addLanguage", l);
    },
    removeLanguage(l) {
      this.$store.dispatch("current/removeLanguage", l);
    },
    addTrait(t) {
      this.$store.dispatch("current/addTrait", t);
    },
    removeTrait(t) {
      this.$store.dispatch("current/removeTrait", t);
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
