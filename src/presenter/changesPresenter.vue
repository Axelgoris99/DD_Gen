<template>
  <div>
    <MyChangesView></MyChangesView>
    <div class="row-fluid">
      <MyCharacter
        :currentName="currentName"
        :currentGender="currentGender"
        :currentRace="currentRace"
        :currentClass="currentClass"
        :currentAlign="currentAlignment"
        :currentLanguages="currentLanguages"
        :currentTraits="currentTraits"
        :currentBackground="currentBackground"
        :races="races"
        :classes="classes"
        :alignments="alignments"
        :languages="languages"
        :traits="traits"
        :backgrounds="backgrounds"
        @setName="setName"
        @setGender="setGender"
        @setRace="setRace"
        @setClass="setClass"
        @setBackground="setBackground"
        @setAlignment="setAlignment"
        @addLanguage="addLanguage"
        @removeLanguage="removeLanguage"
        @clearLanguages="clearLanguages"
        @removeTrait="removeTrait"
        @addTrait="addTrait"
        @clearTraits="clearTraits"
      ></MyCharacter>
      <pdfVue
        :download="false"
        :myName="currentName"
        :myClass="currentClass"
        :myBackground="currentBackground"
        :myRace="currentRace"
        :myAlignment="currentAlignment"
      ></pdfVue>
    </div>
  </div>
</template>

<script>
import MyChangesView from "../view/changesView.vue";
import MyCharacter from "../components/char.vue";
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
  // We store the selected slugs in component state.
  data() {
    return {
      name: null,
      gender: null,
      race_slug: null,
      class_slug: null,
      alignment_slug: null,
      background_slug: null,

      language_slugs: [],
      trait_slugs: [],
    };
  },
  created() {
    this.$store.dispatch("options/init");
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
  },
  methods: {
    setName(n) {
      this.name = n;
      this.$store.dispatch("current/setName", n);
    },
    setGender(g) {
      this.gender = g;
    },
    setRace(r) {
      this.race_slug = r;
    },
    setClass(c) {
      this.class_slug = c;
    },
    setBackground(b) {
      this.background_slug = b;
    },
    setAlignment(a) {
      this.alignment_slug = a;
    },
    addLanguage(l) {
      this.language_slugs.push(l);
    },
    removeLanguage(l) {
      this.language_slugs = this.language_slugs.filter((item) => item !== l);
    },
    clearLanguages() {
      this.language_slugs.splice(0);
    },
    addTrait(t) {
      this.trait_slugs.push(t);
    },
    removeTrait(t) {
      this.trait_slugs = this.trait_slugs.filter((item) => item !== t);
    },
    clearTraits() {
      this.trait_slugs.splice(0);
    },
  },
};
</script>

<style scoped>
.row-fluid {
  display: flex;
  flex-wrap: wrap;
}
</style>
