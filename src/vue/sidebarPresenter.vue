<template>
  <header>
    <SidebarView
      @setHome="setHome"
      @setInput="setInput"
      @setChanges="setChanges"
      @setOutput="setOutput"
    />
  </header>
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
      console.log("wtf");
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
header {
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
}
</style>
