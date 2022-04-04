<template>
  <div class="back">
    <h1>Home</h1>
    <b-button v-on:click="increment">{{ count }}</b-button>
    <p>
      Welcome on this Dungeon &amp; Dragon Character Generator. The goal of this
      is to allow you to quickly create different characters, making you able to
      adapt to whatever your crazy players might do. Or if you're a lazy player
      who does not want to bother with creating a complicated character, this
      one is for you.
    </p>
    <b-button to="input">Start</b-button>
  </div>
</template>

<script>
export default {
  name: "MyHomeView",
  props: {
    count: Number,
  },
  components: {},
  emits: ["increment"],
  methods: {
    increment() {
      this.$emit("increment");
    },
  },
};
</script>
<style scoped>
.back {
  background-color: beige;
}
</style>
