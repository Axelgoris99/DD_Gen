<template>
  <div class="input">
    <h1>Input</h1>
    <p>
      This page is here for you to select whatever value that you want to prefix
      and that won't be modified, meaning that the method will try to adjust
      other params depending on what you selected.
      <br />A dwarf will often be a warrior for example.
    </p>
    <MyCharacterView
      :races="races"
      :classes="classes"
      :alignments="alignments"
      :languages="languages"
      :traits="traits"
      :backgrounds="backgrounds"
      :clearable="true"
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
    />
    <b-button @click="navChanges">Generate</b-button>
  </div>
</template>

<script>
import MyCharacterView from "@/components/char.vue";
export default {
  name: "MyInputView",
  components: {
    MyCharacterView,
  },
  props: {
    races: Array,
    classes: Array,
    alignments: Array,
    languages: Array,
    traits: Array,
    backgrounds: Array,
    abilities: Array,
    currentName: String,
    currentGender: String,
    generate: Function,
  },
  emits: [
    "setName",
    "setGender",
    "setRace",
    "setClass",
    "setBackground",
    "setAlignment",
    "addLanguage",
    "removeLanguage",
    "clearLanguages",
    "addTrait",
    "removeTrait",
    "clearTraits",
  ],
  methods: {
    setName(n) {
      this.$emit("setName", n);
    },
    setGender(r) {
      this.$emit("setGender", r);
    },
    setRace(r) {
      this.$emit("setRace", r);
    },
    setClass(c) {
      this.$emit("setClass", c);
    },
    setBackground(b) {
      this.$emit("setBackground", b);
    },
    setAlignment(a) {
      this.$emit("setAlignment", a);
    },
    addLanguage(l) {
      this.$emit("addLanguage", l);
    },
    removeLanguage(l) {
      this.$emit("removeLanguage", l);
    },
    clearLanguages() {
      this.$emit("clearLanguages");
    },
    addTrait(t) {
      this.$emit("addTrait", t);
    },
    removeTrait(t) {
      this.$emit("removeTrait", t);
    },
    clearTraits() {
      this.$emit("clearTraits");
    },
    navChanges() {
      this.$router.push("changes");
    },
  },
};
</script>
<style scoped>
.input {
  display: row;
  background-color: white;
  left: 0;
  right: 0;
}
.space {
  margin: 5px;
}
</style>
