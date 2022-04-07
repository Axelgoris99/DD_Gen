<template>
  <div>
    <MyChangesView :dropdownAttribute="dropdownAttribute" />
  </div>
</template>

<script>
import MyChangesView from "../view/changesView.vue";

export default {
  name: "MyChanges",
  components: {
    MyChangesView,
  },
  data() {
    return {
      dropdownAttribute: ["Elf", "Gnome", "Dwarf", "Human", "Troll"],
    };
  },
  methods: {},
};
</script>

<style scoped></style>
