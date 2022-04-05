<template>
  <div class="header">
    <b-button-group>
      <template v-if="connect">
        <b-button variant="success" v-on:click="signOut" to="home">{{
          username
        }}</b-button>
        <b-button variant="danger" v-on:click="signOut" to="home"
          >Sign Out</b-button
        >
      </template>
      <template v-else>
        <b-button variant="primary" v-on:click="login" to="login"
          >Login</b-button
        >
        <b-button variant="success" v-on:click="signup" to="register"
          >Signup</b-button
        >
      </template>
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
  props: {
    connect: Boolean,
    username: String,
    keyComp: Number,
  },
  components: {},
  emits: ["login", "signup", "signOut"],
  methods: {
    login() {
      this.$emit("login");
    },
    signup() {
      this.$emit("signup");
    },
    signOut() {
      this.$emit("signOut");
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
