<template>
  <div class="input">
    <h1>Input</h1>
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
