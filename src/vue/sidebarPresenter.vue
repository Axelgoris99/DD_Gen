<template>
  <sidebar>
    <SidebarView
      @setHome="setHome"
      @setInput="setInput"
      @setChanges="setChanges"
      @setOutput="setOutput"
    />
  </sidebar>
</template>

<script>
import SidebarView from "@/view/sidebarView.vue";
export default {
  name: "MySidebar",
  components: {
    SidebarView,
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
sidebar {
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
}
</style>
