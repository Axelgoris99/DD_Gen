<template>
  <div class="sidebar">
    <MySidebarView
      @setHome="setHome"
      @setInput="setInput"
      @setChanges="setChanges"
      @setOutput="setOutput"
    />
  </div>
</template>

<script>
import MySidebarView from "../view/sidebarView.vue";

export default {
  name: "MySidebar",
  components: {
    MySidebarView,
  },
  methods: {
    setHome() {
      window.location.hash = "home";
    },
    setInput() {
      window.location.hash = "Input";
    },
    setChanges() {
      window.location.hash = "Changes";
    },
    setOutput() {
      window.location.hash = "Output";
    },
  },
};
</script>

<style scoped>
.sidebar {
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
}
</style>
