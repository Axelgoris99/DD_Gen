<template>
  <div>
    <MyInputView
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
    ></MyInputView>
  </div>
</template>

<script>
import MyInputView from "../view/inputView.vue";
import { mapGetters } from "vuex";
export default {
  name: "MyInput",
  components: {
    MyInputView,
  },
  created() {
    this.$store.dispatch("options/init");
    this.$store.dispatch("current/reset");
  },
  computed: {
    ...mapGetters({
      races: "options/races",
      classes: "options/classes",
      alignments: "options/alignments",
      languages: "options/languages",
      traits: "options/traits",
      abilities: "options/abilities",
      backgrounds: "options/backgrounds",
    }),
  },
  methods: {
    setName(n) {
      this.$store.dispatch("input/setName", n);
    },
    setGender(g) {
      this.$store.dispatch("input/setGender", g);
    },
    setRace(r) {
      this.$store.dispatch("input/setRace", r);
    },
    setClass(c) {
      this.$store.dispatch("input/setClass", c);
    },
    setBackground(b) {
      this.$store.dispatch("input/setBackground", b);
    },
    setAlignment(a) {
      this.$store.dispatch("input/setAlignment", a);
    },
    addLanguage(l) {
      this.$store.dispatch("input/addLanguage", l);
    },
    removeLanguage(l) {
      this.$store.dispatch("input/removeLanguage", l);
    },
    clearLanguages() {
      this.$store.dispatch("input/clearLanguages");
    },
    addTrait(t) {
      this.$store.dispatch("input/addTrait", t);
    },
    removeTrait(t) {
      this.$store.dispatch("input/removeTrait", t);
    },
    clearTraits() {
      this.$store.dispatch("input/clearTraits");
    },
  },
};
</script>
<style scoped></style>
