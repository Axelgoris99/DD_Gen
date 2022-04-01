<template>
  <header>
    <SidebarView :title="title" @setTitle="setTitle" />
  </header>
</template>

<script>
import SidebarView from "@/view/sidebarView.vue";
export default {
  name: "MySidebar",
  data() {
    return { title: "myOldTitle" };
  },
  components: {
    SidebarView,
  },
  methods: {
    setTitle(newTitle) {
      this.title = newTitle;
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
