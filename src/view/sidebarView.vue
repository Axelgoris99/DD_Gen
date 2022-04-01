<template>
  <div>
    <b-nav pills vertical class="w-25">
      <b-nav-item v-on:click="setHome">Home</b-nav-item>
      <b-nav-item v-on:click="setInput">Input</b-nav-item>
      <b-nav-item v-on:click="setChanges">Changes</b-nav-item>
      <b-nav-item v-on:click="setOutput">Output</b-nav-item>
    </b-nav>
  </div>
</template>

<script>
export default {
  name: "MySidebarView",
  components: {},
  emits: ["setHome", "SetInput", "setChanges", "setOutput"],
  methods: {
    setHome() {
      this.$emit("setHome");
    },
    setInput() {
      this.$emit("setInput");
    },
    setChanges() {
      this.$emit("setChanges");
    },
    setOutput() {
      this.$emit("setOutput");
    },
  },
};
</script>
<style scoped>
div {
  background-color: #151f28;
}
</style>
