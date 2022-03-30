<template>
  <header>
    <h1>test</h1>
  </header>
</template>

<script>
export default {
  name: "MyNavbar",
  props: {
    title: {
      type: String,
      default: "Hello There",
    },
  },
  components: {},
};
</script>

<style scoped>
header {
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
}
</style>
