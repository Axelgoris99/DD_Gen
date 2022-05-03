<template>
  <div class="back">
    <h1>My Profile</h1>
    <h2>My Characters</h2>
    <span v-for="character in characters" :key="character.name">
      <div>{{ character.name }}</div>
    </span>
  </div>
</template>

<script>
export default {
  name: "MyProfileView",
  props: {
    characters: Array,
  },
  methods: {
    renderImage(char) {
      return "img/icon/" + char;
    },
  },
};
</script>
<style scoped>
.back {
  background-color: beige;
}
</style>
