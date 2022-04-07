<template>
  <div class="input">
    <h1>Input</h1>
    <p>
      This page is here for you to select whatever value that you want to prefix
      and that won't be modified, meaning that the method will try to adjust
      other params depending on what you selected.
      <br />A dwarf will often be a warrior for example.
    </p>
    <b-form-select :options="races" @change="onChangeRace"></b-form-select>
    <b-form-select :options="classes" @change="onChangeClass"></b-form-select>

    <b-form-select
      :options="alignments"
      @change="onChangeAlignment"
    ></b-form-select>

    <b-form-select
      :options="languages"
      @change="onChangeLanguage"
    ></b-form-select>

    <b-form-select :options="traits" @change="onChangeTrait" />
    <b-form-select :options="backgrounds" @change="onChangeBackground" />
    <h2>Qualitative</h2>
    <b-button @click="onClick">Generate</b-button>
    <b-button to="changes" class="space">Fill those fields!</b-button>
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
    },
  },
};
</script>

<stylescoped>
.input {
  display: row;
  background-color: beige;
  left: 0;
  right: 0;
}
.space {
  margin: 5px;
}
</stylescoped>
