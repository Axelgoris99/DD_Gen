<template>
  <div class="header">
    <div>
      <b-navbar toggleable="lg" type="light" variant="info">
        <b-navbar-brand href="#" to="home">
          <b-img
            right
            src="../assets/dd_logo.png"
            alt="Right image"
            width="50px"
            height="50px"
          ></b-img
        ></b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
            <b-nav-item to="home">Home</b-nav-item>
            <b-nav-item to="input">Input</b-nav-item>
            <b-nav-item to="changes">Changes</b-nav-item>
            <b-nav-item to="output" :disabled="ready">Output</b-nav-item>
          </b-navbar-nav>

          <!-- Right aligned nav items -->
          <b-navbar-nav class="ml-auto">
            <b-button-group>
              <template v-if="connect">
                <b-button variant="success" to="profile">{{
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
            </b-button-group></b-navbar-nav
          >
        </b-collapse>
      </b-navbar>
    </div>
  </div>
</template>

<script>
export default {
  name: "MyHeaderView",
  props: {
    connect: Boolean,
    username: String,
    ready: Boolean,
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
}
</style>
