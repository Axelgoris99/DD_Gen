<template>
  <div class="header">
    <b-button-group>
      <b-button variant="primary" v-on:click="Login">Login</b-button>
      <b-button variant="success" v-on:click="Signup">Signup</b-button>
    </b-button-group>
    <b-img
      right
      src="../assets/dd_logo.png"
      alt="Right image"
      width="50px"
      height="50px"
    ></b-img>
  </div>
</template>

<script>
export default {
  name: "MyHeaderView",
  components: {},
  emits: ["login", "signup"],
  methods: {
    login() {
      this.$emit("login");
    },
    signup() {
      this.emits("signup");
    },
  },
};
</script>

<style scoped>
.header {
  margin-bottom: 10px;
  background: #ffffff;
}
</style>
