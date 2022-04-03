<template>
  <div class="input">
    <h1>Input</h1>
    This page is here for you to select whatever value that you want to prefix
    and that won't be modified, meaning that the method will try to adjust other
    params depending on what you selected.
    <br />A dwarf will often be a warrior for example.
    <InputBarVue
      nameAttribute="Race"
      typeAttribute="dropdown"
      :dropdownAttribute="dropdownAttribute"
      class="space"
    />
    <InputBarVue
      nameAttribute="Strenght"
      typeAttribute="number"
      class="space"
    />
    <InputBarVue nameAttribute="Backstory" typeAttribute="text" class="space" />
  </div>
</template>

<script>
import InputBarVue from "../components/Input.vue";

export default {
  name: "MyInputView",
  components: {
    InputBarVue,
  },
  emits: [],
  methods: {},
  data: function () {
    return {
      dropdownAttribute: ["Elf", "Gnome", "Dwarf", "Human", "Troll"],
    };
  },
};
</script>
<style scoped>
.input {
  display: row;
  background-color: beige;
  left: 0;
  right: 0;
}
.space {
  margin-bottom: 5px;
  margin-top: 5px;
}
</style>
