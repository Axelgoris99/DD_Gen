<template>
  <div class="input">
    <h1>Input</h1>
    <p>
      This page is here for you to select whatever value that you want to prefix
      and that won't be modified, meaning that the method will try to adjust
      other params depending on what you selected.
      <br />A dwarf will often be a warrior for example.
    </p>
    <b-form-select :options="races"></b-form-select>
    <b-form-select :options="classes"></b-form-select>
    <b-form-select :options="alignments"></b-form-select>
    <b-form-select :options="languages"></b-form-select>
    <b-form-select :options="traits"></b-form-select>
    <b-form-select :options="backgrounds"></b-form-select>
    <h2>Qualitative</h2>
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
  emits: [],
  methods: {},
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
