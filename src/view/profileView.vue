<template>
  <div class="back">
    <h1>My Profile</h1>
    <h2>My Characters</h2>
    <span v-for="character in characters" :key="character.name">
      <div>{{ character.name }}</div>
      <button class="space" v-on:click="deleteCharacter(character)">
        Delete character
      </button>
    </span>
  </div>
</template>

<script>
export default {
  name: "MyProfileView",
  props: {
    characters: Array,
  },
  emits: ["deleteCharacter"],
  methods: {
    renderImage(char) {
      return "img/icon/" + char;
    },
    deleteCharacter(char) {
      this.$emit("deleteCharacter", char);
    },
  },
};
</script>
<style scoped>
.back {
  background-color: beige;
}
</style>
