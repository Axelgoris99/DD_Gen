<template>
  <div>
    <h1>Home</h1>
    <b-button v-on:click="increment">{{ count }}</b-button>
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
<style scoped></style>
