<template>
  <div>
    <MyHomeView :count="this.$store.state.count" @increment="increment" />
  </div>
</template>

<script>
import MyHomeView from "../view/homeView.vue";

export default {
  name: "MyHome",
  components: {
    MyHomeView,
  },
  methods: {
    increment() {
      this.$store.commit("auth/increment");
    },
  },
};
</script>

<style scoped></style>
