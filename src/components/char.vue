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
        ref="gender"
        :canClear="clearable"
        :options="[
          { label: 'Male', value: 'male' },
          { label: 'Female', value: 'female' },
        ]"
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
        ref="race"
        :canClear="clearable"
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
        ref="class"
        :canClear="clearable"
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
        ref="alignment"
        :options="alignments"
        :canClear="clearable"
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
        ref="languages"
        :options="languages"
        :canClear="clearable"
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
        ref="traits"
        :options="traits"
        :canClear="clearable"
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
        ref="background"
        :canClear="clearable"
        :options="backgrounds"
        @change="onSelectBackground"
      ></Multiselect>
    </b-form-group>
  </div>
</template>

<script>
import Multiselect from "@vueform/multiselect/dist/multiselect.vue2.js";

export default {
  name: "MyCharacterView",
  components: { Multiselect },
  mounted() {
    if (this.currentGender) this.$refs.gender.select(this.currentGender);
    if (this.currentRace) this.$refs.race.select(this.currentRace);
    if (this.currentClass) this.$refs.class.select(this.currentClass);

    if (this.currentAlignment)
      this.$refs.alignment.select(this.currentAlignment);

    if (this.currentBackground)
      this.$refs.background.select(this.currentBackground);

    if (this.currentLanguages) {
      this.currentLanguages.forEach((lang) => {
        console.log(lang);
        this.$refs.languages.select(lang);
      });
    }
    if (this.currentTraits) {
      this.currentTraits.forEach((trait) => {
        this.$refs.traits.select(trait);
      });
    }
  },
  props: {
    clearable: Boolean,
    races: Array,
    classes: Array,
    alignments: Array,
    languages: Array,
    traits: Array,
    backgrounds: Array,
    abilities: Array,

    currentName: String,
    currentGender: String,
    currentRace: String,
    currentClass: String,
    currentBackground: String,
    currentAlignment: String,
    currentLanguages: Array,
    currentTraits: Array,
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
