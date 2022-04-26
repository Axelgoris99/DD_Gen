<template>
  <div class="back">
    <h1>My Profile</h1>
    <h2>My Characters</h2>
    <span v-for="character in characters" :key="character.name">
      <img src="../assets/icon/barbarian.png" />
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
};
</script>
<style scoped>
.back {
  background-color: beige;
}
</style>
