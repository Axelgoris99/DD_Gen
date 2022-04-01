<template>
  <div>
    <footerView />
  </div>
</template>

<script>
import footerView from "../view/footerView.vue";

export default {
  name: "MyFooter",
  components: {
    footerView,
  },
  methods: {
    login() {
      console.log("Welcome user !");
    },
    signup() {
      console.log("New User Incoming ?");
    },
  },
};
</script>

<style scoped></style>
