<template>
  <div class="input">
    <h1>Input</h1>
    <p>
      This page is here for you to select whatever value that you want to prefix
      and that won't be modified, meaning that the method will try to adjust
      other params depending on what you selected.
      <br />A dwarf will often be a warrior for example.
    </p>
    <h2>Qualitative</h2>
    <b-form-group
      id="name"
      label="Name"
      label-for="name"
      description="A name is unique to a character. The more unique, the better !"
    >
      <b-form-input @change="onChangeName"></b-form-input>
    </b-form-group>

    <b-form-group
      id="races"
      label="Races"
      label-for="races"
      description="Each race grants your character ability and skill bonuses as well as racial traits."
    >
      <b-form-select :options="races" @change="onChangeRace"></b-form-select>
    </b-form-group>

    <b-form-group
      id="classes"
      label="Classes"
      label-for="classes"
      description="A character class is a fundamental part of the identity and nature of characters in the Dungeons &amp; Dragons role-playing game."
    >
      <b-form-select :options="classes" @change="onChangeClass"></b-form-select>
    </b-form-group>

    <b-form-group
      id="alignments"
      label="Alignments"
      label-for="alignments"
      description="A typical creature in the game world has an alignment, which broadly describes its moral and personal attitudes."
    >
      <b-form-select
        :options="alignments"
        @change="onChangeAlignment"
      ></b-form-select>
    </b-form-group>

    <b-form-group
      id="languages"
      label="Languages"
      label-for="languages"
      description="Your race indicates the languages your character can speak by default, and your background might give you access to one or more additional languages of your choice."
    >
      <b-form-select
        :options="languages"
        @change="onChangeLanguage"
      ></b-form-select>
    </b-form-group>

    <b-form-group
      id="traits"
      label="Traits"
      label-for="traits"
      description="Your traits are special powers that your character have thanks to his race, class or background."
    >
    </b-form-group>
    <b-form-select :options="traits" @change="onChangeTrait"></b-form-select>

    <b-form-group
      id="background"
      label="Backgrounds"
      label-for="background"
      description="Every story has a beginning. Your character's background reveals where you came from, how you became an adventurer, and your place in the world."
    >
      <b-form-select
        :options="backgrounds"
        @change="onChangeBackground"
      ></b-form-select>
    </b-form-group>

    <h2>Quantitative</h2>
    <b-form-group
      v-for="ability in abilities"
      v-bind:key="ability.text"
      id="background"
      v-bind:label="ability.text"
      label-for="background"
      description=""
    >
      <b-form-input type="number" min="0" max="20"></b-form-input>
    </b-form-group>
    <b-button class="space" @click="onClick">Fill those fields!</b-button>
  </div>
</template>

<script>
export default {
  name: "MyInputView",
  props: {
    races: Array,
    classes: Array,
    alignments: Array,
    languages: Array,
    traits: Array,
    backgrounds: Array,
    abilities: Array,
  },
  emits: [
    "setRace",
    "setClass",
    "setBackground",
    "setAlignment",
    "addLanguage",
    "addTrait",
    "generate",
  ],
  methods: {
    onChangeName(n) {
      this.$emit("setName", n);
    },
    onChangeRace(r) {
      this.$emit("setRace", r);
    },
    onChangeClass(c) {
      this.$emit("setClass", c);
    },
    onChangeBackground(b) {
      this.$emit("setBackground", b);
    },
    onChangeAlignment(a) {
      this.$emit("setAlignment", a);
    },

    //TODO: Make this "add" instead of change, will need to support multiselect in the UI.
    onChangeLanguage(l) {
      this.$emit("addLanguage", l);
    },
    onChangeTrait(t) {
      this.$emit("addTrait", t);
    },

    onClick() {
      this.$emit("generate");
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
