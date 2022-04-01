<template>
  <div class="sidebar">
    <MySidebarView />
  </div>
</template>

<script>
import MySidebarView from "../view/sidebarView.vue";

export default {
  name: "MySidebar",
  components: {
    MySidebarView,
  },
  methods: {},
};
</script>

<style scoped>
.sidebar {
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
}
</style>
