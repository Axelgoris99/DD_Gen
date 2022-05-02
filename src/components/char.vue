<template>
  <div class="character">
    <h2>Qualitative</h2>
    <b-form-group
      id="name"
      label="Name"
      label-for="name"
      description="A name is unique to a character. The more unique, the better !"
    >
      <b-form-input @change="onChangeName" :value="currentName"></b-form-input>
    </b-form-group>
    <b-form-group
      id="Gender"
      label="Gender"
      label-for="gender"
      description="The gender of your character."
    >
      <Multiselect
        mode="single"
        :options="[
          { label: 'Male', value: 'male' },
          { label: 'Female', value: 'female' },
        ]"
        id="0"
        @select="onSelectGender"
        @clear="onClearGender"
      ></Multiselect>
    </b-form-group>

    <b-form-group
      id="races"
      label="Races"
      label-for="races"
      description="Each race grants your character ability and skill bonuses as well as racial traits."
    >
      <Multiselect
        mode="single"
        :options="races"
        @select="onSelectRace"
        @clear="onClearRace"
      ></Multiselect>
    </b-form-group>

    <b-form-group
      id="classes"
      label="Classes"
      label-for="classes"
      description="A character class is a fundamental part of the identity and nature of characters in the Dungeons &amp; Dragons role-playing game."
    >
      <Multiselect
        mode="single"
        :options="classes"
        @select="onSelectClass"
        @clear="onClearClass"
      ></Multiselect>
    </b-form-group>

    <b-form-group
      id="alignments"
      label="Alignments"
      label-for="alignments"
      description="A typical creature in the game world has an alignment, which broadly describes its moral and personal attitudes."
    >
      <Multiselect
        mode="single"
        :options="alignments"
        @select="onSelectAlignment"
        @clear="onClearAlignment"
      ></Multiselect>
    </b-form-group>

    <b-form-group
      id="languages"
      label="Languages"
      label-for="languages"
      description="Your race indicates the languages your character can speak by default, and your background might give you access to one or more additional languages of your choice."
    >
      <Multiselect
        mode="tags"
        :options="languages"
        @select="onSelectLanguage"
        @deselect="onDeselectLanguage"
        @clear="onClearLanguages"
      ></Multiselect>
    </b-form-group>

    <b-form-group
      id="traits"
      label="Traits"
      label-for="traits"
      description="Your traits are special powers that your character have thanks to his race, class or background."
    >
      <Multiselect
        mode="tags"
        :options="traits"
        @select="onSelectTrait"
        @deselect="onDeselectTrait"
        @clear="onClearTraits"
      ></Multiselect>
    </b-form-group>

    <b-form-group
      id="background"
      label="Backgrounds"
      label-for="background"
      description="Every story has a beginning. Your character's background reveals where you came from, how you became an adventurer, and your place in the world."
    >
      <Multiselect
        mode="single"
        :options="backgrounds"
        @change="onSelectBackground"
      ></Multiselect>
    </b-form-group>
    <slot> </slot>
  </div>
</template>

<script>
import Multiselect from "@vueform/multiselect/dist/multiselect.vue2.js";

export default {
  name: "MyCharacter",
  components: { Multiselect },
  data() {
    return {
      selectedTraits: [],
    };
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
    "generate",
  ],
  methods: {
    onChangeName(n) {
      this.$emit("setName", n);
    },
    onSelectGender(r) {
      this.$emit("setGender", r);
    },
    onClearGender() {
      this.$emit("setGender", null);
    },
    onSelectRace(r) {
      this.$emit("setRace", r);
    },
    onClearRace() {
      this.$emit("setRace", null);
    },
    onSelectClass(c) {
      this.$emit("setClass", c);
    },
    onClearClass() {
      this.$emit("setClass", null);
    },
    onSelectBackground(b) {
      this.$emit("setBackground", b);
    },
    onClearBackground() {
      this.$emit("setBackground", null);
    },
    onSelectAlignment(a) {
      this.$emit("setAlignment", a);
    },
    onClearAlignment() {
      this.$emit("setAlignment", null);
    },
    onSelectLanguage(l) {
      this.$emit("addLanguage", l);
    },
    onDeselectLanguage(l) {
      this.$emit("removeLanguage", l);
    },
    onClearLanguages() {
      this.$emit("clearLanguages");
    },
    onSelectTrait(t) {
      this.$emit("addTrait", t);
    },
    onDeselectTrait(t) {
      this.$emit("removeTrait", t);
    },
    onClearTraits() {
      this.$emit("clearTraits");
    },
  },
};
</script>
<style src="@vueform/multiselect/themes/default.css"></style>
<style scoped>
.character {
  display: row;
  background-color: white;
  left: 0;
  right: 0;
}
.space {
  margin: 5px;
}
</style>
