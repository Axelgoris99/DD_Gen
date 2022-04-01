<template>
  <div>
    <headerView @signup="signup" @login="login" />
  </div>
</template>

<script>
import headerView from "../view/headerView.vue";

export default {
  name: "MyHeader",
  components: {
    headerView,
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
