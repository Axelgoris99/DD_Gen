<template>
  <div class="header">
    <div>
      <b-navbar toggleable="lg" type="light" variant="info">
        <b-navbar-brand href="#" @click="navHome">
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
            <b-nav-item @click="navHome">Home</b-nav-item>
            <b-nav-item @click="navInput">Input</b-nav-item>
            <b-nav-item @click="navChanges">Changes</b-nav-item>
            <b-nav-item @click="navOutput" :disabled="ready">Output</b-nav-item>
          </b-navbar-nav>

          <!-- Right aligned nav items -->
          <b-navbar-nav class="ml-auto">
            <b-button-group>
              <template v-if="connect">
                <b-button variant="success" @click="navProfile">{{
                  username
                }}</b-button>
                <b-button variant="danger" v-on:click="signOut"
                  >Sign Out</b-button
                >
              </template>
              <template v-else>
                <b-button variant="primary" v-on:click="login">Login</b-button>
                <b-button variant="success" v-on:click="signup"
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
      this.$router.push("login");
    },
    signup() {
      this.$emit("signup");
      this.$router.push("register");
    },
    signOut() {
      this.$emit("signOut");
      this.$router.push("home");
    },
    navProfile() {
      this.$router.push("profile");
    },
    navHome() {
      this.$router.push("home");
    },
    navInput() {
      this.$router.push("input");
    },
    navChanges() {
      this.$router.push("changes");
    },
    navOutput() {
      this.$router.push("output");
    },
  },
};
</script>

<style scoped>
.header {
  margin-bottom: 10px;
}
</style>
