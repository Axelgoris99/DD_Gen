<template>
  <div>
    <b-nav pills vertical class="w-25">
      <b-nav-item to="home">Home</b-nav-item>
      <b-nav-item to="input">Input</b-nav-item>
      <b-nav-item to="changes">Changes</b-nav-item>
      <b-nav-item to="output">Output</b-nav-item>
    </b-nav>
  </div>
</template>

<script>
export default {
  name: "MySidebarView",
  components: {},
  emits: [],
  methods: {},
};
</script>
<style scoped>
div {
  background-color: #151f28;
}
</style>
