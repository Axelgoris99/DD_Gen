<template>
  <header>
    <h1>{{ title }}</h1>
  </header>
</template>

<script>
export default {
  name: "MySidebar",
  props: {
    title: {
      type: String,
      default: "Hello There",
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
