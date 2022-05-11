<template>
  <div class="back">
    <h1>My Profile</h1>
    <h2>My Characters</h2>
    <span v-for="character in characters" :key="character.name">
      <img :src="image(character)" />
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
  emits: ["deleteCharacter", "image"],
  methods: {
    renderImage(char) {
      return "img/icon/" + char;
    },
    deleteCharacter(char) {
      this.$emit("deleteCharacter", char);
    },
    image(char) {
      const test = this.$emit("image", char);
      console.log(test);
      return test;
    },
  },
};
</script>
<style scoped>
.back {
  background-color: beige;
}
</style>
